# Usage

Once installed you can run the `funky` command in your terminal to generate the utility-first css file based on the default configuration.

```bash
funky --out path/to/output.css
```

You can also use `npx` to run the CLI as-a-service:

```bash
npx @native-elements/funky --out path/to/output.css
```

The above command will use the default configuration and generate the full CSS if you don't provide your own configuration file. [To access the full configuration check how to customise it.](docs/funky/configuration)

## CLI parameters

<details open>
  <summary><b><output>--out</output></b> | <em>string</em> | <span class="Badge" data-type="important">required</span></summary>
This set where to generate the output css
</details>
<hr />
<details open>
  <summary><b><output>--minify</output></b> | <em>boolean</em> | true</summary>
If present, minify the output
</details>
