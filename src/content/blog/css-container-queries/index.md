---
title: 'CSS Container Queries'
updateDate: 2023-08-30
publishDate: 2023-08-30
image: 'design-1.jpg'
tags: ['CSS']
author: lazar-nikolov
excerpt:
  "CSS Container Queries are a new way to write CSS that allow you to scope
  styles based on the size of a containing element rather than the size of the
  viewport. In this article we're going to learn all about container queries."
---

<iframe
  width='100%'
  style='aspect-ratio: 16/9'
  src='https://www.youtube-nocookie.com/embed/CHKUFsnABw4'
  title='CSS Container Queries'
  frameborder='0'
  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
  allowfullscreen
></iframe>

Unlike Media Queries, which let you apply styles to an element based on the
viewport size, Container Queries let you apply styles to an element based on its
own size. Talk about next level responsive design! And the best thing is, it’s
supported by all modern browsers! Let’s say you want a card’s layout to be
horizontal if it has at least a certain width, and switch to vertical when it
gets narrower. Here’s an example:

<p class="codepen" data-height="600" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="vYvYRWr" data-user="nikolovlazar" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nikolovlazar/pen/vYvYRWr">
  CSS Container Queries</a> by Lazar Nikolov (<a href="https://codepen.io/nikolovlazar">@nikolovlazar</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Containment context

Looking at the example, we can see that our `article.post-card` has a
`container` property with a value of `post-card / inline-size`. This declares a
containment context on our post card element. The `container` is a shorthand
property that sets the `container-name` to `post-card` and the `container-type`
to `inline-size`. The `inline-size` value declares the containment context on
the inline axis of the container. This means that you can only define styles
based on the width of the container. If you also want to define styles based on
the height, you can use the `size` value.

Bear in mind that when you declare a container to a certain element, **it will
prevent it from being sized based on its contents**. This goes for both `size`
and `inline-size`. To provide size to the “containerized” element, you would
need to either define it through its parent (flex and grid stretch by default)
or its display (block also stretches by default), or set its `width` or `height`
explicitly. Setting the `container-type` to `size` will collapse its height,
while setting it to `inline-size` will collapse its width.

Another thing to have in mind is that you can’t use an inline element as a
container. If you were to define a `span` as a container, you could, but you’d
have to make it a non-inline display. **Rule of thumb: any element that’s not
inline can be made into a container**.

## Container query

Check out line 40. We set the `.content` element’s `flex-direction` to column.
On smaller sizes we want the image and text to be one on top of the other, but
if we have enough horizontal space we can actually put them one next to the
other, or set the `flex-direction` to row. That’s a use case for a container
query! Scroll down to line 96:

```css
@container post-card (min-width: 512px) {
  ...
}
```

This is how we define a container query. With this line, we’re basically telling
CSS “when the post-card container (not element with class) has at least 768px of
width, apply these styles (…)”. The top level scope is the `article.card`
element. We should take that in consideration when writing the selectors. On
line 99 we redefine the `.content` element’s `flex-direction` to `row`. That’ll
make the image and text to flow horizontally, and if we expand the viewport
enough we’ll see that the card’s content changes direction. Notice that if we
change the selector to `article.post-card div.content` it won’t work, even
though it’s a perfectly valid selector, because it would expect to find an
`article.post-card` inside of the `article.post-card` element and we both know
that’s wrong. But following this example, we can redefine any property of any
descendant of our `article.post-card`. That’s the beauty of it!

## Container query units

Along with the new `@container` syntax, we also get brand new values that are
relative to the container size. Here are they:

- `cqw` is 1% of the container’s width
- `cqh` is 1% of the container’s height
- `cqi` is 1% of the container’s inline size
- `cqb` is 1% of the container’s block size
- `cqmin` and `cqmax` are the smallest and largest (respectfully) value of
  either `cqi` or `cqb`

So, if we wanted to set something to be the 3% of the container’s width for
example, we would set it to `3cqw`. Scroll all the way down to line 123, 128 and
133, and you’ll see that the text elements are being set to a certain percentage
of the container’s inline size. Try changing the size of the card and you’ll see
that the font size grows and shrinks with the card. This might not be a
real-world use case, but you get the gist 😁.

## Conclusion

So there you have it! Container Queries! How cool are they? You can use them to
define responsive elements that react not based on the viewport’s size, but
based on the space they’re given, regardless of the viewport size. That means
that you can have two instances of the same component on a page, but because of
the different space they’re given, they’ll appear differently. Check out the
[creatures.sh blog page](https://creatures.sh/blog/all/1/). The featured post
card is the same component as the post cards in the grid below. That card is the
card from this example, but used in production. If you want to see more use
cases, check out
[this article](https://css-tricks.com/a-few-times-container-size-queries-would-have-helped-me-out/)
(takes you to CSS Tricks).
