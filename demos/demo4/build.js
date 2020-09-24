const fetch = require('node-fetch');
const fs = require('fs');

console.log('called!');
fetch('https://swapi.dev/api/films')
.then(res => res.json())
.then(res => {
	console.log('res', res);
	let films = res.results.map(f => {
		return {
			title:f.title,
			director:f.director,
			releaseDate:f.release_date
		}	
	});

	let generatedHTML = '';
	films.forEach(f => {
		generatedHTML += `<li>${f.title} was released on ${f.releaseDate} and directed by ${f.director}.</li>`;
	});

	let contents = fs.readFileSync('./index.md','utf8');
	contents = contents.replace('{{ filmData }}', generatedHTML);

	fs.writeFileSync('./index.md', contents);
	
});