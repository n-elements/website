# Themes

Thanks to the custom properties you can easily change the default style by providing a set of properties with the new value. You can choose to override all the properties or just some of them, you don't need to redefine the whole list, just set the ones that are changed.

The default style of Native Elements is built in as custom properties fallback. This means that if you don't set any custom theme, you will get a basic and opinionated style for free.

## Making a theme

Thanks to the <a href="https://app.native-elements.dev/" rel="noopener" target="_blank">Theme Builder</a> app you can create your color palette, visually change and preview all the available custom properties, and download a ready-to-use theme that you can include in your project.

<a href="https://app.native-elements.dev/" data-hide-icon rel="noopener" target="_blank">
<picture>
  <source srcset="/images/tb-dark.png" media="(prefers-color-scheme: dark)">
  <img src="/images/tb-light.png" />
</picture>
</a>

?> This is currently the best and recommended way to customise Native Elements

## Using themes

Once you have your set of custom properties, there are few ways to use it. You can put the custom properties inside the global `:root` of your css, or scope it inside a custom selector.

### Global themes

When you put your theme inside the `:root` selector it will be applied to all the elements of your page. This is useful when you have one theme active at time:

**app.css**

```css
:root {
  --accent-color: hsl(220, 100%, 50%);
  --ne-global-background: hsl(0, 0%, 100%);
  --ne-global-foreground: hsl(0, 0%, 0%);
  --ne-body-font-family: sans-serif;
  --ne-root-font-size: 100%;
  --ne-body-font-size: 1.125rem;
  --ne-selection-foreground: hsl(0, 0%, 100%);
  --ne-selection-background: hsl(233, 64%, 72%);
  --ne-outline-width: 2px;
  --ne-outline-color: var(--accent-color);
  --ne-basic-line-height: 1.5;
  --ne-headings-scale: 1.25;
  --ne-quote-font-size: 2rem;
  --ne-cite-foreground: var(--accent-color);
  --ne-cite-font-size: 1rem;
  --ne-cite-start-sign: '—';
  --ne-links-foreground: var(--accent-color);
  --ne-links-active-foreground: hsl(233, 64%, 52%);
  --ne-del-foreground: hsl(337, 74%, 31%);
  --ne-del-background: hsl(0, 100%, 94%);
  /* ... */
}
```

### Scoped themes

The CSS's cascade is very useful to make scoped themes, it affects custom properties like other properties.

If you want to divide your theme into multiple pieces, you can wrap the custom properties inside separate selectors. Every element inside that selector will inherit the theme, while elements outside it will use their default style.

**dark-theme.css**

```css
:root[data-theme="dark"] {
  --accent-color: hsl(220, 100%, 50%);
  --ne-global-background: hsl(0, 0%, 100%);
  --ne-global-foreground: hsl(0, 0%, 0%);
  --ne-body-font-family: sans-serif;
  --ne-root-font-size: 100%;
  --ne-body-font-size: 1.125rem;
  /* ... */
}
```

**neumorphic-theme.css**

```css
.NeumorphicTheme {
  --accent-color: hsl(220, 100%, 50%);
  --ne-global-background: hsl(0, 0%, 100%);
  --ne-global-foreground: hsl(0, 0%, 0%);
  --ne-body-font-family: sans-serif;
  --ne-root-font-size: 100%;
  --ne-body-font-size: 1.125rem;
  /* ... */
}
```
