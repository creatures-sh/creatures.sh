---
title: Getting started with CSS Nesting
updateDate: 2023-08-12
publishDate: 2023-08-12
image: '../../assets/blog/featured-1.jpg'
tags: [CSS]
author: lazar-nikolov
excerpt:
  "CSS Nesting used to only be possible in CSS preprocessors like Sass and Less.
  But guess what, it’s now part of Native CSS! Let's see what's CSS Nesting and
  how we can get started using it."
---

<iframe
  width='560'
  height='315'
  src='https://www.youtube-nocookie.com/embed/dr6UAQUAiu4'
  title='Getting started with CSS Nesting'
  frameborder='0'
  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
  allowfullscreen
></iframe>

CSS Nesting used to only be possible in CSS preprocessors like Sass and Less.
But guess what, it's now built in native CSS and all modern browsers will
support it after August 29th. Let's see what's CSS Nesting and how we can use
it.

## What is CSS Nesting?

CSS Nesting is a new feature that allows you to nest selectors inside other
selectors. Nesting helps by reducing repetition, reducing the file size, better
file organization and easier refactoring. Let's see an example without nesting:

```css
/* No nesting */
article.card {
  border: 1px solid lightgrey;
  border-radius: 6px;
  overflow: hidden;
}

article.card header {
  border-bottom: 1px solid lightgrey;
  background: #f1f3f4;
  padding: 16px;
}
```

This example can be written with nesting like this:

```css
/* With nesting */
article.card {
  border: 1px solid lightgrey;
  border-radius: 6px;
  overflow: hidden;

  & header {
    border-bottom: 1px solid lightgrey;
    background: #f1f3f4;
    padding: 16px;
  }
}
```

## Nesting examples

To get a good feel of how nesting works, let's see some more examples.

<p
  class='codepen'
  data-height='450'
  data-theme-id='dark'
  data-default-tab='css,result'
  data-slug-hash='poQYdOG'
  data-user='nikolovlazar'
  style='height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;'
>
  All of the examples are from [the CodePen
  above](https://codepen.io/nikolovlazar/pen/poQYdOG).
</p>
<script async src='https://cpwebassets.codepen.io/assets/embed/ei.js'></script>

### Multi-level nesting

```css
article.card {
  border: 1px solid lightgrey;
  border-radius: 6px;
  overflow: hidden;

  & header {
    border-bottom: 1px solid lightgrey;
    background: #f1f3f4;
    padding: 16px;

    & h2 {
      margin: 0;
    }
  }
}
```

In this example we can see that we can nest as many levels as we want. The first
level is the `article.card` selector, which is the root selector. The second
level is the `& header` selector, which is nested inside the root selector. The
header styles will only be applied to `header` elements that are children of
`article.card` elements.

### Nesting without the `&` symbol

```css
article.card {
  border: 1px solid lightgrey;
  border-radius: 6px;
  overflow: hidden;

  .content {
    border-bottom: 1px solid lightgrey;
  }
}
```

We don't always need to add the `&` symbol to indicate nesting. If we don't add
it, CSS will add `&` + " " (space) in front of the nested selector. By
explicitly placing the `&` symbol, we can control where the parent selector
should be placed.

### Nesting pseudo-classes

```css
article.card {
  /* ... */

  :is(.content, footer) {
    padding: 16px;
  }
}
```

It's also possible to nest pseudo-classes like the `:is()` in this example. As
we saw in the previous example, if we don't add the `&` symbol CSS is going to
add that for us + an empty space, so this example will target all children of
the `article.card` element that are either `.content` or `footer` elements. The
"compiled" selector will look like this:

```css
article.card :is(.content, footer): {
  /* ... */
}
```

### Nesting pseudo-elements

```css
article.card {
  /* ... */

  & footer a {
    /* ... */

    &:hover {
      background: maroon;

      &::after {
        content: '>';
        margin-left: 12px;
      }
    }
  }
}
```

Just like the pseudo-classes, we can also nest pseudo-elements. In this example
we're defining hover styles for the `a` element that's a child of the `footer`.
We're also defining styles for the `::after` pseudo-element of the `a` element
while it's being hovered. Feel free to play around with the
[example above](#nesting-examples) to see the result.

### Nesting `@media` queries

```css
article.card {
  /* ... */

  @media (min-width: 768px) {
    /* ... */
  }
}
```

We can also nest `@media` queries. This is a great way to keep the styles for a
specific breakpoint in one place. This way we can easily find and update them if
needed.

## The `&` symbol

As mentioned in the previous examples, the `&` symbol is used to indicate where
the parent selector should be placed. This gives us more control over the final
selector, and if needed, we can also completely rearrange the whole context.
Let's see some examples:

```css
a {
  &:hover {
    /* a:hover */
  }

  :hover {
    /* a :hover */
  }
}
```

In this example we can see the different output when we use the `&` symbol and
when we don't. In cases where we want to define pseudo-classes for the parent
selector, we'd need to use the `&` symbol. Otherwise, CSS will add the parent
selector in front of the pseudo-class.

Since the `&` symbol is just a placeholder for the parent selector, we can also
use it multiple times in the same selector, and flip the context completely:

```css
header {
  & h2 {
    /* header h2 */
  }

  h2 & & & {
    /* h2 header header header */
  }
}
```

## Understanding the parser

The nesting parser is what's responsible for parsing the nested selectors. The
way that the parser identifies if the selector is defining a nested style is by
checking whether the selector contains one of the symbols below:

```
& @ : . > ~ + # [ *
```

You might recognize some of these symbols. Some of them are used for selectors,
pseudo-classes and pseudo-elements, combinators, attribute selectors etc...

If the parser finds a nested selector that does't start with any of these
symbols, it will fail to parse it, which will result in incorrect styles.

## Conclusion

Nesting is a great feature that can help us write more maintainable CSS. It can
also help us write less code, since we don't need to repeat the parent selector
over and over again. This is huge for CSS, and I'm really excited to see all of
the creative ways developers are going to come up with to use it.
