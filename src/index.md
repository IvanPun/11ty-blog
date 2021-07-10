---
layout: 'layouts/base.html'
title: 'Home'
---

# Home

{%- for post in posts -%}
<div class="post">
  <h2>
  <a href="/posts/{{ post.title | slug}}/">{{ post.title }}</a>
  </h2>
  <p>{{ post.body}}</p>
  <hr>
</div>
{%- endfor -%}