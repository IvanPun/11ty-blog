---
layout: 'layouts/base.html'
title: 'Home'
---

## Please read the following pages

<ul>
  {%- for page in collections.static -%}
  <li>
  <a href="{{ page.data.permalink }}/">{{ page.data.title }}</a>
  </li>
  {%- endfor -%}
</ul>


{%- for post in posts -%}
<div class="post">
  <h2>
  <a href="/posts/{{ post.title | slug}}/">{{ post.title }}</a>
  </h2>
  <p>{{ post.body}}</p>
  <hr>
</div>
{%- endfor -%}