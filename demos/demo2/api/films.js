const fetch = require('node-fetch');

module.exports = async (req, res) => {


	let resp = await fetch('https://swapi.dev/api/films/');
	let films = (await resp.json()).results;
	// clean it up a bit
	films = films.map(f => {
		return {
			title:f.title,
			release_date:f.release_date,
			director:f.director
		}
	});

    res.json(films);

}