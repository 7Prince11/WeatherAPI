const canada = document.querySelector('#Canada');
const ukraine = document.querySelector('#Ukraine');
const usa = document.querySelector('#USA');
const switzerland = document.querySelector('#Switzerland');
const japan = document.querySelector('#Japan');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '631147a32cmsh3ddee0650df535fp168592jsn23f579588f47',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Canada&dt=2022-06-27', options)
	.then(response => response.json())
	.then(response => setTimeout(() => {
        const p = document.createElement('p');
        p.innerHTML = `
        <div class="inf"> Region :  ${response.location.region}</div>
        <div class="inf"> Localtime :  ${response.location.localtime}</div>
        <div class="inf"> The Sun will rise at ${response.astronomy.astro.sunrise} and set at ${response.astronomy.astro.sunset}</div>
        <div class='inf'> The Moon will rise at ${response.astronomy.astro.moonrise} and set at ${response.astronomy.astro.moonset}</div>
        <div class='inf'> The Monn Phase is :  ${response.astronomy.astro.moon_phase}</div>
        <div class='inf'> The Moon Illumination is :  ${response.astronomy.astro.moon_illumination}</div>
        `;
        canada.appendChild(p);
    }))

    fetch('https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Ukraine&dt=2022-06-27', options)
	.then(response => response.json())
	.then(response => setTimeout(() => {
        const p = document.createElement('p');
        p.innerHTML = `
        <div class="inf"> Region :  ${response.location.region}</div>
        <div class="inf"> Localtime :  ${response.location.localtime}</div>
        <div class="inf"> The Sun will rise at ${response.astronomy.astro.sunrise} and set at ${response.astronomy.astro.sunset}</div>
        <div class='inf'> The Moon will rise at ${response.astronomy.astro.moonrise} and set at ${response.astronomy.astro.moonset}</div>
        <div class='inf'> The Monn Phase is :  ${response.astronomy.astro.moon_phase}</div>
        <div class='inf'> The Moon Illumination is :  ${response.astronomy.astro.moon_illumination}</div>
        `;
        ukraine.appendChild(p);
    }))
	
fetch('https://weatherapi-com.p.rapidapi.com/astronomy.json?q=USA&dt=2022-06-27', options)
.then(response => response.json())
.then(response => setTimeout(() => {
    const p = document.createElement('p');
    p.innerHTML = `
    <div class="inf"> Region :  ${response.location.region}</div>
    <div class="inf"> Localtime :  ${response.location.localtime}</div>
    <div class="inf"> The Sun will rise at ${response.astronomy.astro.sunrise} and set at ${response.astronomy.astro.sunset}</div>
    <div class='inf'> The Moon will rise at ${response.astronomy.astro.moonrise} and set at ${response.astronomy.astro.moonset}</div>
    <div class='inf'> The Monn Phase is :  ${response.astronomy.astro.moon_phase}</div>
    <div class='inf'> The Moon Illumination is :  ${response.astronomy.astro.moon_illumination}</div>
    `;
    usa.appendChild(p);
}))

fetch('https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Switzerland&dt=2022-06-27', options)
.then(response => response.json())
.then(response => setTimeout(() => {
    const p = document.createElement('p');
    p.innerHTML = `
    <div class="inf"> Region :  ${response.location.region}</div>
    <div class="inf"> Localtime :  ${response.location.localtime}</div>
    <div class="inf"> The Sun will rise at ${response.astronomy.astro.sunrise} and set at ${response.astronomy.astro.sunset}</div>
    <div class='inf'> The Moon will rise at ${response.astronomy.astro.moonrise} and set at ${response.astronomy.astro.moonset}</div>
    <div class='inf'> The Monn Phase is :  ${response.astronomy.astro.moon_phase}</div>
    <div class='inf'> The Moon Illumination is :  ${response.astronomy.astro.moon_illumination}</div>
    `;
    switzerland.appendChild(p);
}))
fetch('https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Tokyo&dt=2022-06-27', options)
.then(response => response.json())
.then(response => setTimeout(() => {
    const p = document.createElement('p');
    p.innerHTML = `
    <div class="inf"> Region :  ${response.location.region}</div>
    <div class="inf"> Localtime :  ${response.location.localtime}</div>
    <div class="inf"> The Sun will rise at ${response.astronomy.astro.sunrise} and set at ${response.astronomy.astro.sunset}</div>
    <div class='inf'> The Moon will rise at ${response.astronomy.astro.moonrise} and set at ${response.astronomy.astro.moonset}</div>
    <div class='inf'> The Monn Phase is :  ${response.astronomy.astro.moon_phase}</div>
    <div class='inf'> The Moon Illumination is :  ${response.astronomy.astro.moon_illumination}</div>
    `;
    japan.appendChild(p);
}))
 
 
 