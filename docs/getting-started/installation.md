# Installation

You can use Native Elements in different ways, depend on which level of customization and optimization you want.

## CDN

The easiest way is to include the compiled version of the library directly in your page, using a CDN service like <a href="https://www.jsdelivr.com/" target="_blank" rel="noopner noreferrer">JsDelivr</a>:

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@native-elements/core@1/native-elements.css">
```

You will get the whole library including the style for all the HTML elements, even if you're not using it on your page. This method is really useful to fast build prototypes and simple websites. <br />Just plug-n-customise.

?> Using the `core@1` alias as version will let you getting every `patch` and `minor` releases, while you'll not get `major` updates.

## PostCSS

If you're already using <a href="https://postcss.org/" target="_blank" rel="noopener noreferrer">PostCSS</a>, you can add [postcss-import-url](https://www.npmjs.com/package/postcss-import-url) plugin to import and inline the compiled file in your final build (build-time), avoiding the HTTP request.

```css
@import 'https://cdn.jsdelivr.net/npm/@native-elements/core@1/native-elements.css';
```

By using this method you avoid the HTTP request to the CDN and you will be able to handle the final output as you want, for example by parsing it to your PostCSS plugins.

## Package manager

First you need a package manager like <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm</a>, <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">yarn</a>, or <a href="https://pnpm.js.org/" target="_blank" rel="noopener noreferrer">pnpm</a>, then install the package locally inside your project:

```shell
yarn add @native-elements/core
```

You can then import the **compiled** file from within **CSS** or **JS**:

<!-- tabs:start -->

#### ** CSS **

```css
/* You need "postcss-easy-import" or similar to import from modules */
@import '@native-elements/core';
```

#### ** JS **

```js
/* Resolve to @native-elements/core/native-elements.css */
import '@native-elements/core';
```

<!-- tabs:end -->

### Compiling source

!> We don't encourage using this method if you don't know very well what you are doing.

If you want to go this way and unleash the full potentiality, you need configure PostCSS to use the plugins required by Native Elements:

- [postcss-easy-import](https://github.com/TrySound/postcss-easy-import ':target=_blank')
- [postcss-preset-env](https://preset-env.cssdb.org ':target=_blank')
- [postcss-mixins](https://github.com/postcss/postcss-mixins ':target=_blank')
- [cssnano](https://github.com/cssnano/cssnano ':target=_blank')

Here the full PostCSS configuration file:

<details>
  <summary><b>postcss.config.js</b></summary>

```js
const path = require('path');
const camelCase = require('camelcase');
const variables = require('@native-elements/core/props');

/*
 * Parse variables files and prepare
 * to use them as env() variables
*/
const envVariables = {
  environmentVariables: Object.keys(variables).reduce((props, key) => {
    let prop = variables[key];
    let normalizedName = prop.name.replace('--ne-', '');
    let newKey = `--${camelCase(normalizedName)}`;
    props[newKey] = `${prop.tokenValue}`;
    return props;
  }, {}),
};

module.exports = {
  plugins: {
    // More info: https://github.com/TrySound/postcss-easy-import
    'postcss-easy-import': {
      extensions: '.pcss'
    },

    // More info: https://preset-env.cssdb.org
    'postcss-preset-env': {
      stage: 0,
      features: {
        'logical-properties-and-values': {
          preserve: true
        }
      },
      importFrom: [
        envVariables,
      ],
      insertAfter: {
        // More info: https://github.com/postcss/postcss-mixins
        'custom-media-queries': require('postcss-mixins')({
          mixinsFiles: path.join(
            process.cwd(),
            'node_modules/@native-elements/core/elements/**',
            '_*.pcss'
          )
        })
      }
    },

    // More info: https://github.com/cssnano/cssnano
    cssnano: {
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true
          },
          reduceIdents: false,
          autoprefixer: false
        }
      ]
    }
  }
};
```
</details>

Add your browserslist targets inside `package.json`:

```js
"browserslist": [
  "last 1 Chrome versions",
  "last 1 Firefox versions",
  "last 1 Safari versions",
  "last 1 Edge versions"
]
```

Once set this, you are able to import single `.pcss` files from within your code using postcss-easy-import, and compile it with your build process.

**app.css**
```css
@import '@native-elements/core/elements/core/core.pcss';
```

**components/my-button.css**
```css
@import '@native-elements/core/elements/ne-button/ne-button.pcss';
```

?> You need to import `core` to get the style applied to the document, like selection color, base font-size, etc...
