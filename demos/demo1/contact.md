---
title: Contact Me
layout: main
---

## Contact Us!

<form id="contactForm">
<p>
<label for="yourname">Your Name:</label><br/>
<input id="yourname" v-model="name">
</p>
<p>
<label for="youremail">Your Email:</label><br/>
<input id="youremail" type="email" v-model="email">
</p>
<p>
<label for="yourcomments">Your Comments:</label><br/>
<textarea id="yourcomments" v-model="comments"></textarea>
</p>
<p>
<button @click.prevent="send">Send</button>
</form>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
const app = new Vue({
	el:'#contactForm',
	data: {
		name:'',
		email:'',
		comments:''
	},
	methods:{
		async send() {
			console.log('send');
			let data = new FormData();
			data.append('name', this.name);
			data.append('email', this.email);
			data.append('comments', this.comments);
			let resp = await fetch('https://formspree.io/mknpnkdg', {
				method:'POST', 
				body:data,
				headers: {
    				'Accept': 'application/json'
			  	}
			});
			let respData = await resp.json();
			if(respData.ok) {
				alert("Your awesome form was submitted!");
				this.comments = '';
			}
		}
	}
});
</script>