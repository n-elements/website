# Browser support

Native Elements core is built using many modern CSS features. Most notable of these features include CSS variables, also known as CSS custom properties and logical properties. Support for these features is exceptional among modern evergreen browsers, however older, non evergreen browsers lack support for many of these same features. We therefore recommend that if support of older browsers like IE 10 and 11 are a concern then Native Elements will not be the correct fit for your project.

Following are the most modern CSS features used by Native Elements along with their corresponding entry in the excellent Can I Use database.

- [Custom Properties](https://caniuse.com/#feat=css-variables)
- [Logical Properties](https://caniuse.com/#feat=css-logical-props)

## Browsers target {docsify-ignore}

The distributed version of the compiled Native Elements (native-elements.css) comes with vendor prefixes included and specific optimisations based on the targetted browsers. Such target-specific manipulation are made based on the Native Elements default <a href="https://github.com/browserslist/browserslist" target="_blank" rel="noopener noreferrer">Browserslist</a> configuration:

```js
"browserslist": [
  "last 1 Chrome versions",
  "last 1 Firefox versions",
  "last 1 Safari versions",
  "last 1 Edge versions"
]
```

If you wish to control which prefixes are applied, you can [import the source files and run them through your own PostCSS setup.](/docs/getting-started/installation#compiling-source)
