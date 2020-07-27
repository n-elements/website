# React, Vue, Svelte...

Modern UI libraries like React, Vue, and Svelte allow developers to scope their css using [CSS Modules](https://github.com/css-modules/css-modules) or some built-in function like the one used by Vue, which assign a custom attribute to each component. Since Native Elements is just a css library, it's pretty easy to use in such environments.

## Scoped style {docsify-ignore}

If you're using React and CSS modules or any scoped-style library, you can drop NE inside your app entry point to make it global:

**app.jsx**

```jsx
import React from 'react';
import '@native-elements/core';
import './App.css';

function App() {
  return (
    <main className="App">
      ...
    </main>
  );
}

export default App;
```

Every HTML element handled by Native Elements will be styled, and the custom properties you will define inside the `:root` selector will be passed down even inside CSS modules. If you need to edit an element only inside a custom component, you can use their relative custom properties inside the component css:

**card.module.css**

```css
.CardButton {
  --ne-button-y-padding: 8px;
  --ne-button-x-padding: 16px;
}
```

**card.jsx**

```jsx
import React from 'react';
import classes from './card.module.css';

const Card = ({...attributes}) => (
  <div {...attributes}>
    <h4>Card title</h4>
    <button type="button" className={classes.CardButton}>
      My custom button
    </button>
  </div>
)
```

The procedure is the same with [Vue Scoped CSS](https://vuejs.org/v2/guide/comparison.html#Component-Scoped-CSS), import the main file in your app entry point and use the custom properties inside the scoped style:

```html
<template>
  <div>
    <h4>Card title</h4>
    <button class="CardButton">My custom button</button>
  </div>
</template>

<style scoped>
  .CardButton {
    --ne-button-y-padding: 8px;
    --ne-button-x-padding: 16px;
  }
</style>
```
