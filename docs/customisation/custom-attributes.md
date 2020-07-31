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
