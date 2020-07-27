# Outline

Native Elements adds by default the outline indicator to any focusable elements when they are on `:focus` state.

Since the outline indicator is useful for the keyboard and AT navigation, you should never completely hide it. We strongly suggest to hide the outline when appropriate, for example using [`what-input`](https://github.com/ten1seven/what-input) you can do this by including it in your JavaScript file, then add this CSS snippet:

```css
[data-whatintent='mouse'] *:focus,
[data-whatintent='touch'] *:focus {
  outline: none;
}
```

By this way, thanks to what-input which will add `[data-whatintent='mouse']` and `[data-whatintent='touch']` to the `html` element, the outline indicator will be visible only when users will use the keyboard as input to navigate through the page.

**Try it:**

<iframe src="https://ne-doc-outline.glitch.me" width="100%" height="400" frameborder="0" loading="lazy" ></iframe>
