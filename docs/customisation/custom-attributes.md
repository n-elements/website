# Custom attributes

Some elements can be composed to build a group that needs some visual adjustments. Native Elements do this following HTML custom attributes. Here you will find the full list of all the custom attributes you can use and which elements can accept it.

## ne-button

Applied to an `a` element it visually becomes a button instead of a text link.

<iframe src="https://ne-doc-custom-attr.glitch.me" width="100%" frameborder="0" loading="lazy" ></iframe>

```html
<button>This is a button</button>
<a href="#" ne-button>This is a link button</a>
```

## ne-details-group

Can be applied to a container to create a group of `<details>` elements with separators.

<iframe src="https://ne-doc-custom-attr.glitch.me/details.html" width="100%" height="600" frameborder="0" loading="lazy" ></iframe>

```html
<div ne-details-group>
  <details>
    <summary>My address details</summary>
    <!-- ... -->
  </details>
  <details>
    <summary>My address details</summary>
    <!-- ... -->
  </details>
  <details>
    <summary>My details extended</summary>
    <!-- ... -->
  </details>
</div>
```

## ne-prose

Used to set vertical leading and correctly space textual elements inside.

<iframe src="https://ne-doc-prose.glitch.me" width="100%" height="600" frameborder="0" loading="lazy" ></iframe>

```html
<main ne-prose>
  <h1>
    Page title heading
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu purus sit amet felis feugiat malesuada. Donec ullamcorper, ligula quis pellentesque rhoncus, justo neque ultrices magna, sed elementum nulla ante auctor lectus. Aliquam iaculis metus turpis, bibendum luctus risus molestie lacinia. Praesent non lacus finibus, finibus neque vel, commodo metus. Sed nec purus ante. Nam consectetur mattis arcu eget porttitor. Proin auctor dapibus sem in luctus. Vivamus a erat efficitur, dapibus odio vitae, facilisis odio.
  </p>
  <p>...</p>

  <h2>H2 level title</h2>
  <p>...</p>

  <h3>
    H3 level title
  </h3>
  <p>...</p>

  <h2>H2 level title</h2>
  <p>...</p>
</main>
```
