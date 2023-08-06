---
title: Hello World
updateDate: 2023-07-15
publishDate: 2023-07-15
image: '../../assets/blog/featured-1.jpg'
tags: [JS]
author: lazar-nikolov
---

How frustrating is it when you’ve just landed on a web page, you click on a
certain element and an ad or something else pops up and you end up clicking that
thing instead? That’s a layout shift, which is bad for the user’s experience and
the later they happen, the worse it is.

## Very frustrating!

Research from HTTP Archive shows that over 80% of websites use web fonts. Web
fonts also cause layout shifts, if they’re not being loaded strategically. This
means your page probably has cumulative layout shifts (CLS). In this article
we’ll explore different loading strategies to improve your page’s performance
and minimize cumulative layout shifts when using web fonts.

## What is a layout shift?

A layout shift is when a visible element changes its position from one rendered
frame to the next. This can happen when an element is added, removed, resized,
or moved. Layout shifts are bad for the user’s experience because they changes.

### What is a cumulative layout shift?

A cumulative layout shift (CLS) is the sum of all individual layout shifts that
happen between the first rendered frame and the last before the page is
considered to be fully loaded. The CLS score is calculated by multiplying the
impact fraction by the distance fraction.
