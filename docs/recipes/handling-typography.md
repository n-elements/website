# Handling typography

With Native Elements handling responsive and fluid typography is extremely easy, you just need to change a couple of variables and you're done.

Let's spend some words about differences between **fluid** and **responsive** typography. Both of them are approaches to handle typography size based on the font and/or the available space, to keep text content readable across all kinds of viewports.

- **Fluid typography**

  Fluid typography is the most modern approach to handle the font size. It doesn't require `@media` at-rules (aka media queries) and thanks to modern `CSS`, it can be implemented with one line of code. Using this method the font size scales based on a factor, generally the viewport width (`vw`)or generally the widest dimension of the viewport (`vmax`). **This approch offer a less precise control over the font size wile scaling.**

- **Responsive typography**

  This method is still used a lot but it requires to some media queries to handle different font sizes based on specific breakpoints. On each break, the font will use a specified size and this means that you may require to define multiple breaks. Some people don't like it because **this approach you introduce some extra code, and more code means bigger file size.**

  With Native Elements, you are able to use both methods easily, let's see how.

## Fluid typography

To set fluid typography with Native Elements, you can change the `--ne-body-font-size` custom property to change it across the whole site. In the following example, we are changing it globally inside the theme, and we're passing the new [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp '_target:_blank') function.

That function will set `1rem` as a minimum size and `3rem` as a maximum size, while using the "optimal" value of `10vw` in between. Using a **viewport based unit** (thi is a relative unit), the font-size will scale up until reaching `3rem`, and it will scale down until reaching `1rem`, keeping a scale factor of `10vw`. In other words, you are telling to scale the font size while `10vw` is greater than `1rem` and less than `3rem`.

```css
:root {
  --ne-body-font-size: clamp(1rem, 10vw, 3rem);
}
```

?> Please note that any elements that is inheriting the font-size from the `body` — like buttons —  will use the same rule. Since you may dont' want this, we suggest to make sure to declare a font-size on such elements.

## Responsive typography

As mentioned above, this approach requires you to use media queries to define different font sizes. In this case we'll work with both `--ne-body-font-size` and `--ne-headings-scale` to change also the scale factor of headings (`h1`, `h2`, etc...). This offer a better way to control font sizes, but you'll need extra code.

This is our starting point, these two properties are set inside our theme and their values are applied on mobile, since we'are going to use mobile-first media queries.

```css
:root {
  --ne-body-font-size: 1.2rem;
  --ne-headings-scale: 1.125;
}
```

Now, let's suppose we want to increase the body font size and the headings scale factor when the viewport reaches `48em`, we have to write this:

```css
:root {
  --ne-body-font-size: 1.2rem;
  --ne-headings-scale: 1.125;
}

@media (width >= 48em) {
  :root {
    --ne-body-font-size: 1.4rem;
    --ne-headings-scale: 1.2;
  }
}
```

If you need bigger typography on very large viewports, you can add more breakpoints as you want, but keep in mind that you're adding more code just to push pixel-perfect design that most of your users will not even notice.

```css
:root {
  --ne-body-font-size: 1.2rem;
  --ne-headings-scale: 1.125;
}

@media (width >= 48em) {
  :root {
    --ne-body-font-size: 1.4rem;
    --ne-headings-scale: 1.2;
  }
}

@media (width >= 60em) {
  :root {
    --ne-body-font-size: 1.6rem;
    --ne-headings-scale: 1.4;
  }
}
```

?> In the above examples we use a [new syntax](https://www.w3.org/TR/mediaqueries-4/#range-context ':target=_blank'), you will need to use [`postcss-media-minmax`](https://github.com/postcss/postcss-media-minmax ':target=_blank') (included in postcss-preset-env) plugin in order to transform them for browsers who don't support this syntax yet.
