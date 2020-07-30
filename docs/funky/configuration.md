# How it works

Funky can take a configuration object to generate the utilities by using custom properties. For example, using the following configuration:

<!-- tabs:start -->

#### ** Configuration → **

```js
module.exports = {
  minify: false,
  utilities: {
    'bg': {
      type: 'standard',
      property: 'background-color',
      states: ['hover']
    }
  }
};
```

#### ** Output **

```css
[style*='--bg:'] {
  background-color: var(--bg);
}
[style*='--bg-hover:'] {
  background-color: var(--bg-hover);
}
```

<!-- tabs:end -->

By adding the `breakpoints` key with a list of your breakpoints, you can generate responsive properties by set the `type` to be `responsive` instead of `standard`. For example, taking this configuration:


<!-- tabs:start -->

#### ** Configuration → **

```js
module.exports = {
  minify: false,
  breakpoints: {
    sm: '48em',
  },
  utilities: {
    m: {
      type: 'responsive',
      property: 'margin'
    }
  }
};
```

#### ** Output **

```css
[style*='--m:'] {
  margin: var(--m);
}
@media (width >= 48em) {
  [style*='--m-sm:'] {
    margin: var(--m-sm);
  }
}
```

<!-- tabs:end -->

## Local configuration

The CLI will use a [default configuration](https://github.com/n-elements/funky/blob/master/config.js ':target=_blank') when you don't provide yours but you can fully customize Funky by creating a file at the root of your project called `funky.config.js`.

**Note that the default configuration is full logical properties oriented. So if you have to support obsolete software, you have to provide your own utilities**.

### New configuration

You may don't need all the utilities that are generated with the default configuration, so if you want to create a new set of utilities from scratch, export a new object from the configuration file, following this schema:

```js
module.exports = {
  minify: false,
  outputPath: 'path/to/utilities.css',
  breakpoints: {
    xlg: '120em',
  },
  utilities: {
    res: {
      type: 'responsive',
      property: 'resize',
    },
  },
};
```

The above configuration will generate only the specified utilities and breakpoints, dropping everything else that comes from the default configuration:

```css
[style*='--res:'] {
  resize: var(--res);
}

@media (width >= 120em) {
  [style*='--res-xlg:'] {
    resize: var(--res-xlg);
  }
}
```

### Extending the default configuration

If you are ok with the default configuration but you need to add more utilities, you can extend the built-in config by importing it and exporting a new object from your `funky.config.js`:

```js
const {breakpoints, utilities} = require('@native-elements/funky/config.js');

module.exports = {
  minify: false,
  outputPath: 'path/to/utilities.css',
  breakpoints: {
    ...breakpoints,
    xlg: '120em',
  },
  utilities: {
    ...utilities,
    res: {
      type: 'responsive',
      property: 'resize',
    },
  },
};
```

By this way the CLI will merge the default configurations with ones provided by your configuration file.


## Options

Here the full list of options.

<details open>
  <summary><b><output>minify</output></b> | <em>boolean</em> | true</summary>
  Minify the output
</details>
<hr />
<details open>
  <summary><b><output>outputPath</output></b> | <em>string</em> | <span class="Badge" data-type="important">required</span></summary>
This set where to generate the output css. If you're not passing the <code>--out</code> flag to the cli, this option is required.
</details>
<hr />
<details open>
  <summary><b><output>breakpoints</output></b> | <em>object</em></summary>

```js
{
  // the `min-width` breakpoint name and value
  name: string,
}
```
</details>
<hr />
<details open>
  <summary><b><output>utilities</output></b> | <em>object</em></summary>

  Set the list of the properties you want to generate

```js
utilities: {
  'varName': {
    // Set if it should have responsive variants
    type: 'standard' | 'responsive',
    // Any CSS property name
    property: string,
    // Any CSS pseudo-class: hover, focus, etc...
    states?: string[]
  }
}
```
</details>
