# Usage

Once installed you can run the `funky` command in your terminal to generate the utility-first css file based on the default configuration.

```bash
funky --out path/to/output.css
```

You can also use `npx` to run the CLI as-a-service:

```bash
npx @native-elements/funky --out path/to/output.css
```

The above commands will use the default configuration and they generate the full CSS.

## CLI parameters

<details>
  <summary><b><output>--out</output></b> | <em>string</em> | <span class="Badge" data-type="important">required</span></summary>
This set where to generate the output css
</details>
<hr />
<details>
  <summary><b><output>--minify</output></b> | <em>boolean</em> | true</summary>
If present, minify the output
</details>
