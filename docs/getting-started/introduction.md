# Introduction

Native Elements (NE) is not a CSS framework, no bundlers required or tons of configurations to set. You can consider it as a customizable plug-n-play library for your site which helps you easily style all the available HTML elements using CSS custom properties, classes, attributes, or whatever you want in less than <kbd>6 kB</kbd>. You can also build your class-based CSS framework on top of it.

## Features

This library is built using modern CSS feature and best practices, the compiled version supports only the latest two Chrome, Safari, Firefox, and Edge versions and this is possible thanks to <a href="https://github.com/browserslist/browserslist" target="_blank" rel="noopener noreferrer">Browserslist</a>



### Modern <img src="/images/icons/modern.svg" style="margin-right: 16px;" width="48px" align="left" />

Built on top of <a href="https://postcss.org/" target="_blank" rel="noopener noreferrer">PostCSS</a> takes advantage of exciting new CSS features, like custom and logical properties. If you use it from source, you can define custom selectors and mixins to make styling even easier.

### Modular <img src="/images/icons/modular.svg" style="margin-right: 16px;" width="48px" align="left" />

<p>In the age of Flexbox, CSS grid, and other exciting layout features, there is less and less need for a bloated CSS framework. What you do need is a simple foundation on top of which to build your styles.</p>

### Framework agnostic <img src="/images/icons/framework.svg" style="margin-right: 16px;" width="48px" align="left" />

<p>
    If you're using the compiled version, just drop it inside your application main style. It's just CSS, so it works with <a href="https://reactjs.org"
        rel="noopener noreferrer"
        target="_blank">React</a>, <a href="https://vuejs.org/"
        rel="noopener noreferrer"
        target="_blank">Vue</a>, <a href="https://angular.io/"
        rel="noopener noreferrer"
        target="_blank">Angular</a> and <a href="https://svelte.dev/"
        rel="noopener noreferrer"
        target="_blank">Svelte.</a></p>

### Easy theming <img src="/images/icons/theming.svg" style="margin-right: 16px;" width="48px" align="left" />


<p>With our <a href="https://app.native-elements.dev" rel="noopener" target="_blank">theme builder</a> tool you can create, tweak, and export your theme easily. In the future, we'll share new premade themes.</p>

### Other features

- Classless base styling of semantic HTML elements
- All packed inside a gzipped size of just <a href="https://bundlephobia.com/result?p=@native-elements/core" target="_blank" rel="noopener noreferrer">less than <kbd>6kb</kbd></a>
- Drop n Build - No compiling required
- Flexibility — Create your UI components following the naming convention you like.

## When to use it

- You're working on projects for **modern and secure web browsers** <img width="16px" alt="Google Chrome" src="https://goo.gl/U987PH"/> <img width="16px" alt="Firefox" src="https://bit.ly/35SKj4D"/> <img width="16px" alt="Safari" src="https://goo.gl/S1vPDZ"/> <img width="16px" alt="Edge" src="https://bit.ly/2MnqnyS"/>
- You're not going to mix other CSS frameworks
- You want to save time sacrificing a bit of flexibility.


## Who is using it

- <a href="https://equinusocio.dev/" rel="noopener" target="_blank">equinusocio.dev</a>
- <a href="https://app.native-elements.dev/" rel="noopener" target="_blank">app.native-elements.dev</a>
- <a href="https://xity-starter.netlify.app/" rel="noopener" target="_blank">xity-starter.netlify.app</a>
- <a href="https://wi-freecom.it/" rel="noopener" target="_blank">wi-freecom.it</a>
- <a href="https://blog.freecomsrl.com/" rel="noopener" target="_blank">blog.freecomsrl.com</a>
- <a href="https://pierresaid.github.io/random-cat-facts/" rel="noopener" target="_blank">pierresaid.github.io/random-cat-facts</a>
- <b>If you want to add your site here, edit <a href="https://github.com/n-elements/website/blob/master/src/docs/getting-started/Introduction.mdx" target="_blank" rel="noopener" >this file</a> and submit a PR!</b>

# Vue guide

<div id="main">hello <button>Click</button></div>

<script>
  new Vue({
    el: '#main'
  })
</script>

<style lang="css" scoped>
  @import '@native-elements/core';
</style>
