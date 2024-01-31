---
layout: ../../layouts/Blog.astro
title: Web Rendering Patterns
description: 10 Web Rendering Patterns in a nutshell
date: "13 Jan 2023"
---

We find ourselves in an era where a new JavaScript framework was born, bringing exciting possibilities to the web development landscape.

However, its complexity can be overwhelming, especially for those new to the field.

In order to ease this challenge, this blog post simplifies 10 Web Rendering Patterns for your convenience.

## 1. Static ![HTML 5](/web-rendering-patterns/html-5.svg)

- Upload your static files like html on server and it’s done
- 😔 Not good for websites that frequently update their content

## 2. MPA (Multi Page Application) ![Laravel](/web-rendering-patterns/laravel.png)

- (MPA) is a type of web application where each web page corresponds to a
  different url
- Whenever a user navigates to different parts of the application, the browser sends a request to the server for a new html,
  which is then rendered in the browser
- Each page has its own html file
- 😔 Whenever user navigates new page, browser have to request new html, css, js from the server
- 😔 Less seamless UX

## 3. SPA (Single Page Application) ![React](/web-rendering-patterns/react.png) ![Vue](/web-rendering-patterns/vue.png)

- Unlike MPA, SPA loads single html page and all UI changes are made using JavaScript
- 😔 Since all UI updates requires JavaScript, initial page loads can be very slow
- 😔 Not search engine friendly (yes, still 🤦🏼‍♂️)

## 4. SSR (Server Side Rendering) ![Next](/web-rendering-patterns/next.png) ![Nuxt.png](/web-rendering-patterns/nuxt.png)

- Render html on the server and then after initial page load hydrate
  client side javascript to make web page intractive
- SSR is like MPA + SPA
- 😔 Server cost

## 5. Streaming SSR ![Next](/web-rendering-patterns/next.png)

- Allows us to send components down to the client as soon as they've been generated
- With regular SSR, the user has to wait for the entire HTML to be generated on the server before it gets sent down to the client. However, with streaming SSR, components get streamed down as soon as they're ready, making the UI become interactive faster
- 😔 May result in more network traffic compared to traditional server rendering, as the browser receives html in chunks instead of a single response

## 6. SSG (Static Site Generation) ![Gatsby](/web-rendering-patterns/gatsby.png)

- Pre-build your HTML, CSS, and JavaScript files and serve them as static files
- Similar to SSR, hydration occurs after the initial page load
- This is a great choice when the majority of the website is static. For instance, consider an e-commerce website: while the product page is dynamic, you can pre-render the rest of the static pages on the server and use an external API for the product page to load dynamic data
- 😔 Have to deploy whenever your static data changes

## 7. ISR (Incremental Static Regeneration) ![Next](/web-rendering-patterns/next.png)

- Allows you to create or update content without redeploying your site
- It's like an improved version of SSG because you have to redeploy an SSG app even for small changes
- With ISR (Incremental Static Regeneration), the SSG will only regenerate specific pages or sections of the site that have been updated, rather than regenerating the entire site. For example, if revalidation is set to 10 seconds, the page will be regenerated after the first request at most once every 10 seconds
- 😔 However, there is no guarantee that the user will see the latest version

## 8. Partial Hydration ![Vite](/web-rendering-patterns/vite.svg) ![Next](/web-rendering-patterns/next.png)

- Hydrate selected parts of the website instead of all using code splitting
- For example, you can keep the footer static until the user scrolls to the bottom, and then hydrate it
- 😔 However, this approach can make testing harder and cause content shifting

## 9. Islands ![Astro](/web-rendering-patterns/astro.svg)

- The general idea of an [islands architecture](https://docs.astro.build/en/concepts/islands/) is to render HTML pages on the server and inject placeholders or slots around highly dynamic regions
- There are independent "islands" to load and hydrate components in isolation, rather than loading the entire application.
- This approach appears to be an improved version of code-splitting and may resemble [micro-frontends](https://micro-frontends.org/)
- Astro generates every website with zero client-side JavaScript by default. If your component/page has no JavaScript interactivity, Astro won't ship JavaScript to the client, even if you build your app with a JavaScript library like React
- 😔 Relies on each island being independent, which can make it harder to
  share functionality between islands

## 10. Resumability ![Qwik.png](/web-rendering-patterns/qwik.png)

- Qwik believes hydration can be expensive because a large amount of JavaScript has to execute before the page is actually interactive
- [Resumability](https://qwik.builder.io/docs/concepts/resumable/) aims to deliver HTML and have the application become interactive immediately after delivering the HTML, basically skipping all the work involved with hydration
- All website content is serialized into HTML (data, event listeners, etc.). JavaScript code is broken into tiny chunks, and the initial page load is always static HTML. There is no hydration
- Everything is lazy-loaded
- JavaScript is not shipped until the user interacts with it. Take a React Counter button as an example. JavaScript for the button is not loaded until the user clicks it
- So, how do these multiple chunks of JavaScript files determine when to execute? They know it because of serialization

<h4 class="mb-2 mt-20 text-slate-500">Credits</h4>
<ul class="credits text-slate-500 text-xs">
  <li><a href="https://www.youtube.com/watch?v=Dkx5ydvtpCA/">https://www.youtube.com/watch?v=Dkx5ydvtpCA</a></li>
  <li><a href="https://javascriptpatterns.vercel.app/">https://javascriptpatterns.vercel.app/patterns/rendering-patterns/introduction</a></li>
  <li><a href="https://www.patterns.dev/">https://www.patterns.dev/posts/rendering-patterns</a></li>
  <li><a href="https://web.dev/">https://web.dev/rendering-on-the-web</a></li>
  <li><a href="https://nextjs.org/">https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration</a></li>
  <li><a href="https://qwik.builder.io/">https://qwik.builder.io/docs/concepts/resumable</a></li>
  <li><a href="https://docs.astro.build/">https://docs.astro.build/en/concepts/islands</a></li>
</ul>
