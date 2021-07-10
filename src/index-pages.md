---
layout: 'layouts/base.html'
pagination:
  data: posts
  size: 1
  alias: post
permalink: "/posts/{{ post.title | slug }}/index.html"
---

<div class="post">
  <h2>{{ post.title }}</h2>
  <p>{{ post.body}}</p>
</div>

<a href="/">Back to Home</a>