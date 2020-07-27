# Customisation

Native Elements style targets HTML elements by the tag name, this means that if you change the elements custom properties at the `root` level, they will'be applied across the whole page.

This is the default behavior designed to fit the most simple use case, and of course, it has some limitations, like the impossibility to create different styles of the same element, but here is where custom properties help you.

## Variants

If you need to create multiple variants of the same element, you can create your selectors and use the custom properties cascade to define elements variants. Let's see an example.

This is the default button

<iframe src="https://ne-doc-customisation.glitch.me" width="100%" frameborder="0" loading="lazy" ></iframe>

Assuming now you want to create a full rounded and outlined secondary button, first you need create the selector using a class or attribute. Let's create it.

<iframe src="https://ne-doc-customisation.glitch.me/variant-1.html" width="100%" frameborder="0" loading="lazy" ></iframe>

<!-- tabs:start -->

#### ** HTML **

```html
<button type="button" data-type='secondary'>
  Secondary button
</button>
```

#### ** CSS **

```css
button[data-type='secondary'] {
  /* Resting */
  --ne-button-background: transparent;
  --ne-button-border: 2px solid slategray;
  --ne-button-foreground: slategray;
  --ne-button-border-radius: 100px;

  /* Hover status */
  --ne-button-hover-background: transparent;
  --ne-button-hover-border: 2px solid #05f;
  --ne-button-hover-foreground: #05f;

  /* Focus status */
  --ne-button-active-background: transparent;
  --ne-button-active-border: 2px solid #05f;
  --ne-button-active-foreground: #05f;
}
```

<!-- tabs:end -->


This is just an example of how versatile is this library. You are not binded to a special syntax or naming convention. Takes our previous example and a let's make it bolder and uppercase:

<iframe src="https://ne-doc-customisation.glitch.me/variant-2.html" width="100%" frameborder="0" loading="lazy" ></iframe>

<!-- tabs:start -->

#### ** HTML **

```html
<button type="button" data-type='secondary'>
  Secondary button
</button>
```

#### ** CSS **

```css
button[data-type='secondary'] {
  /* Resting */
  --ne-button-background: transparent;
  --ne-button-border: 2px solid black;
  --ne-button-foreground: black;
  --ne-button-border-radius: 100px;

  /* Hover status */
  --ne-button-hover-background: transparent;
  --ne-button-hover-border: 2px solid black;
  --ne-button-hover-foreground: #05f;

  /* Focus status */
  --ne-button-active-background: transparent;
  --ne-button-active-border: 2px solid #05f;
  --ne-button-active-foreground: #05f;

  /* Custom style */
  text-transform: uppercase;
  font-weight: 700;
}
```

<!-- tabs:end -->

Here another example of variants, striped tables.

<iframe src="https://ne-doc-customisation.glitch.me/variant-3.html" width="100%" height="400" frameborder="0" loading="lazy" ></iframe>

<!-- tabs:start -->

#### ** HTML **

```html
<table>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>

<table class="StripedTable">
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

#### ** CSS **

```css
.StripedTable {
  --ne-table-striped-background: hsl(0, 0%, 97%);
}
```

<!-- tabs:end -->


## Overrides

In some cases, you may want to override some property to make something special like applying masks or making special hover effects. You can just add the property or state you want to override:

<iframe src="https://ne-doc-customisation.glitch.me/overrides.html" width="100%" frameborder="0" loading="lazy" ></iframe>

<!-- tabs:start -->

#### ** HTML **

```html
<button type="button" class="MySpecialButton">Custom button</button>
```

#### ** CSS **

```css
.MySpecialButton {
  --ne-button-background: linear-gradient( 270deg, #00ffbd, #d000ff);
  --ne-button-hover-background: var(--ne-button-background);
  --ne-button-active-background: var(--ne-button-background);

  background-size: 600% 600%;
}

.MySpecialButton:hover {
  background-size: 400% 400%;
  animation: Hover 0.5s ease-out 1;
  animation-fill-mode: forwards;
}

@keyframes Hover {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
```

<!-- tabs:end -->

## Resetting

Some HTML elements like `<button>` are very often reused across the project but with different styles, that's because this element should be used every time the user can perform a UI interaction.

For example, if you are creating an interactive icon that will open a modal, you may want to completely exclude this element from its default style. You can do that by using the CSS `all` property and creating a global selector which removes all the Native Elements style.

In this example, we're defining a global `[data-is-custom]` selector which just remove all the styles.

<iframe src="https://ne-doc-customisation.glitch.me/reset.html" width="100%" height="400" frameborder="0" loading="lazy" ></iframe>

<!-- tabs:start -->

#### ** HTML **

```html
<button type="button" class="IconButton" data-is-custom>...</button>
```

#### ** CSS **

```css
[data-is-custom],
[data-is-custom]:hover,
[data-is-custom]:active {
  --ne-button-icon-size: 64px;
  --ne-button-icon-margin: 0;
  all: unset;
  color: slategray;
}

.IconButton:hover {
  cursor: pointer;
  color: #05f;
}
```

<!-- tabs:end -->

?> Read more about the `all` peroperty here: https://developer.mozilla.org/en-US/docs/Web/CSS/all
