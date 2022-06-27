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

    fetch('https://weatherapi-com.p.rapidapi.com/timezone.json?q=Canada', options)
	.then(response => response.json())
	.then(response => setTimeout(() => {
        const p = document.createElement('p');
        
        p.innerHTML = `
        <div class='inf'> Name : ${response.location.name}</div>
        <div class='inf'> Region : ${response.location.region}</div>
        <div class='inf'> Country : ${response.location.country}</div>
        <div class='inf'> Tz_id : ${response.location.tz_id}</div>
        <div class='inf'> Localtime : ${response.location.localtime}</div>
        `;
        canada.appendChild(p);
    } , 0)
        
        )
        fetch('https://weatherapi-com.p.rapidapi.com/timezone.json?q=Ukraine', options)
        .then(response => response.json())
	    .then(response => setTimeout(() => {
        const p = document.createElement('p');
        p.innerHTML = `
        <div class='inf'> Name : ${response.location.name}</div>
        <div class='inf'> Region : ${response.location.region}</div>
        <div class='inf'> Country : ${response.location.country}</div>
        <div class='inf'> Tz_id : ${response.location.tz_id}</div>
        <div class='inf'> Localtime : ${response.location.localtime}</div>
        `;
        ukraine.appendChild(p);
    } , 0)

        )
        fetch('https://weatherapi-com.p.rapidapi.com/timezone.json?q=usa', options)
        .then(response => response.json())
	    .then(response => setTimeout(() => {
        const p = document.createElement('p');
        p.innerHTML = `
        <div class='inf'> Name : ${response.location.name}</div>
        <div class='inf'> Region : ${response.location.region}</div>
        <div class='inf'> Country : ${response.location.country}</div>
        <div class='inf'> Tz_id : ${response.location.tz_id}</div>
        <div class='inf'> Localtime : ${response.location.localtime}</div>
        `;
        usa.appendChild(p);
    } , 0)
        )
        fetch('https://weatherapi-com.p.rapidapi.com/timezone.json?q=Switzerland', options)
        .then(response => response.json())
	    .then(response => setTimeout(() => {
        const p = document.createElement('p');
        p.innerHTML = `
        <div class='inf'> Name : ${response.location.name}</div>
        <div class='inf'> Region : ${response.location.region}</div>
        <div class='inf'> Country : ${response.location.country}</div>
        <div class='inf'> Tz_id : ${response.location.tz_id}</div>
        <div class='inf'> Localtime : ${response.location.localtime}</div>
        `;
        switzerland.appendChild(p);
    } , 0)
        )
        fetch('https://weatherapi-com.p.rapidapi.com/timezone.json?q=Tokyo', options)   .then(response => response.json())
	    .then(response => setTimeout(() => {
        const p = document.createElement('p');
        p.innerHTML = `
        <div class='inf'> Name : ${response.location.name}</div>
        <div class='inf'> Region : ${response.location.region}</div>
        <div class='inf'> Country : ${response.location.country}</div>
        <div class='inf'> Tz_id : ${response.location.tz_id}</div>
        <div class='inf'> Localtime : ${response.location.localtime}</div>
        `;
        japan.appendChild(p);
    } , 0)

        )
	 