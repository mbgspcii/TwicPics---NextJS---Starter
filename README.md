# TwicPics Components + Next.js

This project is a template that provides a minimal setup to get [Next.js](https://nextjs.org/) working with [TwicPics Components](https://www.twicpics.com/docs/components/react?utm_source=github&utm_medium=organic&utm_campaign=components).

## Overview

### What is [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components)?

[TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) is a **Responsive Image Service Solution** (SaaS) that enables **on-demand responsive image generation**.

With [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components), developers only deal with high-resolution versions of their media while end-users receive **optimized, perfectly sized, device-adapted** versions **delivered from a server close to them**.

[TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) acts as an **image proxy**. It requests your master image, be it on your own web server, cloud storage or DAM, then generates a **device-adapted** version with **best-in-class compression**, delivered directly to the end-user from the **closest delivery point** available.

### What is TwicPics Components?

**TwicPics Components** is a **collection of web components** that make it dead easy to unleash the power of [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) in your own projects.

Whether you need to display a content image, showcase a short video or ensure optimal performance with _Large Contentful Paint_ (LCP) care, TwicPics Components has you covered.

#### Display a Content Image

If you want to display a **content pixel-perfect image** with optimized _Cumulative Layout Shift_ (CLS), _Low-Quality Image Placeholder_ (LQIP) and lazy loading out of the box, you can use the `<TwicImg>` component.

It's a drop-in replacement for the standard `img` tag and is based on the [TwicPics Script](https://www.twicpics.com/docs/essentials/script).

```html
<!-- Before -->
<img src="https://example.com/your-image.jpg" />

<!-- After -->
<TwicImg src="your-image.jpg" />
```

#### Display a Critical Image

If you need to display **critical images** with _art direction_ support, you can use the `<TwicPicture>` component.

It serves as a drop-in replacement for the standard `picture` tag and is based directly on the [TwicPics API](https://www.twicpics.com/docs/guides/writing-api-requests) without any additional effort.

```html
<!-- Before -->
<picture>
  <source
    media="(min-width: 1280px)"
    srcset="wide-image.jpg, wide-image-2x.jpg 2x, wide-image-3x.jpg 3x"
  >
  <source
    media="(min-width: 768px)"
    srcset="squared-image.jpg, squared-image-2x.jpg 2x, squared-image-3x.jpg 3x"
  >
  <img
    srcset="portrait-image.jpg, portrait-image-2x.jpg 2x, portrait-image-3x.jpg 3x"
    src="portrait-image.jpg"
  >
</picture>

<!-- After -->
<TwicPicture
  src="your-master-image.jpg"
  ratio="
    3/4
    @md 1
    @xl 16/9
  "
/>
```

#### Display a Video

For seamless playback of [videos optimized with TwicPics](https://www.twicpics.com/docs/topics/video-optimization), use the `<TwicVideo>` component. It's a sibling of `<TwicImg>` and serves as a drop-in replacement for the standard `video` tag.

```html
<!-- Before -->
<video >
  <source src="https://example.com/your-video.mp4" type="video/mp4">
  <!-- ... other video sources ... -->
</video>

<!-- After -->
<TwicVideo src="your-video.mp4" />
```

## TwicPics configuration

### Requirement

The only requirement is to have a TwicPics account.
If you don't already have one, you can easily [create your own TwicPics account for free](https://account.twicpics.com/signup).

### Configuring `@twicpics/components`

An example of configuration is set within `app/layout.tsx` file.

All you have to do is set your configuration options to the desired values ([see documentation](https://www.twicpics.com/docs/components/next#twicinstall?utm_source=github&utm_medium=organic&utm_campaign=components#setup-options)).

## Examples

You can find an example in `app/page.tsx`.

Feel free to inspire yourself from these different use cases to unleash the power of [TwicPics](https://www.twicpics.com/) in your own projects.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Licence

[![License][license-image]][license-url]

[license-image]: https://img.shields.io/npm/l/@twicpics/components.svg?style=flat-square
[license-url]: https://raw.githubusercontent.com/twicpics/components/master/LICENSE
