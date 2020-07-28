# Funky [![](https://img.shields.io/npm/v/@native-elements/funky.svg?label=&style=minimal&colorA=000000&colorB=1B84FF)](https://www.npmjs.org/package/@native-elements/funky)

[Funky](https://www.npmjs.org/package/@native-elements/funky ':target=_blank') is the definitive CLI tool to create your own class-less based utility-first style. Instead of generating classes, it will generate custom properties to which you can pass any valid `CSS` value.

Instead of this...

```html
<p class="hover:bg-primary mt-8 flex lg:flex-shrink-0 lg:mt-0">
```

you will write this...

```html
<p style="bg-hover:var(--primary); margin-t:var(--space-1); flex-s-lg:0; martin-t:0;">
```

You are free to pass any valid value to each property without generating multiple variants of it, and you can also perform calculations inside any property, based on the situation. You may notice that this approach is similar to writing inline style, but here some difference:

- **Responsive**. Funky utilities allows you to apply styling for each breakpoint you define. Something not possible with standard inline styling.
- **Pseuso-classes**. You can create styling for pseudo class variants (`:hover`, `:focus`, `:before` etc.)

More advantages compared to other utility frameworks:

- With the default configuration is just less than <kbd>4kb</kbd>
- No compiling required
- No tons of configurations to set
- No restriction to a set number of property/value combinations defined by the framework.
- Fully customisable

**For repeated elements, we would always recommend to create your own repeatable, modular CSS.**

## Instalation {docsify-ignore}

[Funky](https://www.npmjs.org/package/@native-elements/funky ':target=_blank') is a CLI tool, you can install it locally, globally or you can run it when you need it [by using `npx`](docs/utilities/usage).

```bash
# Local installation
yarn add @native-elements/funky

# Global installation
yarn global add @native-elements/funky
```
