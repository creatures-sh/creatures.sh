---
title: 'CSS Style Queries'
updateDate: 2023-08-30
publishDate: 2023-08-30
image: 'design-2.jpg'
tags: ['CSS']
author: lazar-nikolov
excerpt:
  "CSS Style Queries are a new way to write CSS that allow you to scope styles
  based on the size of a containing element rather than the size of the
  viewport. In this article we're going to learn all about style queries."
---

Style Queries is a very cool feature in CSS, and they’re defined by the
containment spec. Aside from being able to query a parent’s inline size (that’s
container queries), the containment spec also includes the ability to query a
parent’s style values (that’s style queries). Even though the container queries
are available in all modern browsers, the style queries aren’t. Chrome and Edge
have it. Opera’s working on it. Firefox and Safari, not so much. If you haven’t
learned about container queries so far, check out our
[Container Queries](/blog/css-container-queries) article. Style queries are just
slightly different than container queries, so I’d suggest to learn about
container queries first. Alright, let’s play with some style queries!

## Syntax

Here’s our first example:

<p class="codepen" data-height="600" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="NWeWxov" data-user="nikolovlazar" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nikolovlazar/pen/NWeWxov">
  CSS Style Queries (Spotify Daily Mix cards)</a> by Lazar Nikolov (<a href="https://codepen.io/nikolovlazar">@nikolovlazar</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

The markup is simple. We have a list of collection of cards who have an image, a
title and some text. We can see that the images have an overlay with different
colors. We can call them different variants of the card, and it’s a really good
example for demonstrating style queries. Let’s break down the example. In the
markup, we can see that we’re defining a CSS variable on every `<li>` element:
`style='--variant: teal'`, and that’s all we need to do in our markup. Then in
our CSS we define a container query, but instead of querying on its size, we’re
querying on its specific style value, which is the variable we defined earlier:
`@container style(--variant: teal)`. This creates a containment context on the
element that has the `--variant: teal` variable, and that’s the first `<li>`
element. Just like the container queries, everything we put inside has to target
a descendant of that `<li>` element. In our case we’re targeting the `.poster`
element, which is the image, and we’re setting its `::after` element’s content
to a specific SVG image:

```css
@container style(--variant: teal) {
	.poster::after {
		content: url("data:image/svg+xml;base64,PHN2Zy.........)
	}
}
```

We can now repeat the same for the other variants `cream`, `mint`, `pink`,
`yellow` and `sky`, and our card variants will be done!

You might’ve also noticed that even though the style queries are built on top of
container queries, we didn’t define the `container` or `container-name`
anywhere. CSS is smart enough to figure it out for you. But what if you have
multiple components that use the `--variant` variable? In that case, you can
explicitly define the container name, so your style queries don’t mix:

```css
li {
  container-name: daily-mix-card;
  /* ... */
}

@container daily-mix-card style(--variant: teal) {
  /* ... */
}
```

## Combining multiple styles

Let’s see another example:

<p class="codepen" data-height="600" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="LYMYqep" data-user="nikolovlazar" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nikolovlazar/pen/LYMYqep">
  CSS Style Queries (Etsy items)</a> by Lazar Nikolov (<a href="https://codepen.io/nikolovlazar">@nikolovlazar</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

In this example we’re using the variables to indicate whether certain things
should be visible in the card. There are three variables: `---star-seller`,
`---order-soon`, and `---free-delivery`. All of them when set to `true` will
make the “✪ Star Seller”, “Only X left - order soon” and “FREE delivery”
(respectfully) elements visible. If you look at line 29 in the HTML you’ll see
that we have two variables defined: `--star-seller` and `--order-soon`. And if
you look at the “EWB Bench” item, you’ll see that both the purple “Star Seller”
and the red “Only 1 left - order soon” labels are displayed. Or check out the
vintage lamp item with the red border around its image. It has all three styles
set to true. To define a style query that queries on multiple styles, use `and`
to combine the `style(...)` functions like this:

```css
@container style(--star-seller: true) and style(--free-delivery: true) and style(--order-soon: true) {
  img {
    border: 3px solid red;
  }
}
```

With this approach, we can create and combine as many styles as we like. The
best thing about it is that everything is controlled just by the `style`
attribute of the `<li>` element. If we want to dynamically control that using
JavaScript, all we need to do is invoke the `setProperty` method of the
element’s style property:

```jsx
product.style.setProperty('--star-seller', true)
```

## Conclusion

Just imagine what you can do with style queries. All that with just pure CSS! No
JavaScript logic to show/hide or conditionally render certain elements. Style
queries allow us to define variants of our components, or toggle the visibility
of certain elements, all just by setting a single CSS variable at the root
element. We can also dynamically add/remove/change the variables with JavaScript
by using the `style.setProperty()` method.

Another benefit of this feature is the separation of data from design. The HTML
and CSS define all the possible varieties, while the JavaScript only toggles
them. And since we’re talking about plain JavaScript, we can use style queries
to define our variants and togglable elements without being constrained to a
specific UI framework! That’s why this CSS feature is a game changer, and I
can’t wait for it to be supported by all modern browsers.
