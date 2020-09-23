const app = new Vue({
	el:'#app',
	data: {
		films: null
	},
	async created() {
		let resp = await fetch('/api/films');
		this.films = (await resp.json()).results;
	}
});