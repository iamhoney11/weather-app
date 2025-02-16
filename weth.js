const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5&units=imperial&lang=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '900b55ff0amsh8507ebee6ea020cp13925ejsn1b73db919670',
		'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}