---
title: Star Wars films
layout: main
---

## Star Wars Films

Welcome to my Star Wars fan page.

<div id="app">
	<ul>
	<li v-for="film in films">{{ film.title }}, released in {{ film.release_date }}</li>
	</ul>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="js/app.js"></script>