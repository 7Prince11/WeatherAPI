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

//connection to Api (to get data from API (Location  <CANADA>, <UKRAINE>, <USA>, <SWITZERLAND>))
fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Canada', options)
	.then(response => response.json())
	.then(response => setTimeout(() => {
        const p = document.createElement('p');
        p.innerHTML = `<div class='inf'> Region :  ${response.location.region} </div>
        <div class='inf'> Localtime :  ${response.location.localtime} </div>
        `;
        canada.appendChild(p);

    } , 0))

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Ukraine', options)
    .then(response => response.json())
	.then(response => setTimeout(() => {
        const p = document.createElement('p');
        p.innerHTML = `<div class='inf'> Region :  ${response.location.region} </div>
        <div class='inf'> Localtime :  ${response.location.localtime} </div>
        `;
        ukraine.appendChild(p);

    } , 0))

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=USA', options)
    .then(response => response.json())
	.then(response => setTimeout(() => {
        const p = document.createElement('p');
        p.innerHTML = `<div class='inf'> Region :  ${response.location.region} </div>
        <div class='inf'> Localtime :  ${response.location.localtime} </div>
        `;
        usa.appendChild(p);

    } , 0))
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Switzerland', options)
    .then(response => response.json())
	.then(response => setTimeout(() => {
        const p = document.createElement('p');
        p.innerHTML = `<div class='inf'> Region :  ${response.location.region} </div>
        <div class='inf'> Localtime :  ${response.location.localtime} </div>
        `;
        switzerland.appendChild(p);

    } , 0))

   //connection to Api (to get data from API (current  <CANADA>, <UKRAINE>, <USA>, <SWITZERLAND>))
   fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Canada', options)
   .then(response => response.json())
   .then(response => setTimeout(() => {
       const p = document.createElement('p');
       p.innerHTML = `<div class='inf'> Condition :  ${response.current.condition.text} </div>
        <div class='inf'> Temperature (C) :  ${response.current.temp_c} </div>
        <div class='inf'> Temperature (F) :  ${response.current.temp_f} </div>
        <div class='inf'> Wind :  ${response.current.wind_mph} (mph) and ${response.current.wind_kph} (kph) </div>
        <div class='inf'> Pressure : ${response.current.pressure_mb} (mb) and ${response.current.pressure_in} (in) </div>
        <div class='inf'> Visibility :  ${response.current.vis_miles} (miles) and ${response.current.vis_km} (km) </div>
        <div class='inf'> Gust :  ${response.current.gust_mph} (mph) and ${response.current.gust_kph} (kph) </div>
        <div class='inf'> Humidity :  ${response.current.humidity} </div>
        <div class='inf'> UV Index :  ${response.current.uv} </div>
        <div class='inf'> Last Updated : ${response.current.last_updated}</div>
       <!-- <div class='inf'> Last Updated Epoch :  ${response.current.last_updated_epoch} </div> -->
        `;
       canada.appendChild(p);
       

   } , 0.2))

   fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Canada', options)
   .then(response => response.json())
   .then(response => setTimeout(() => {
       const p = document.createElement('p');
       p.innerHTML = `<div class='inf'> Condition :  ${response.current.condition.text} </div>
        <div class='inf'> Temperature (C) :  ${response.current.temp_c} </div>
        <div class='inf'> Temperature (F) :  ${response.current.temp_f} </div>
        <div class='inf'> Wind :  ${response.current.wind_mph} (mph) and ${response.current.wind_kph} (kph) </div>
        <div class='inf'> Pressure : ${response.current.pressure_mb} (mb) and ${response.current.pressure_in} (in) </div>
        <div class='inf'> Visibility :  ${response.current.vis_miles} (miles) and ${response.current.vis_km} (km) </div>
        <div class='inf'> Gust :  ${response.current.gust_mph} (mph) and ${response.current.gust_kph} (kph) </div>
        <div class='inf'> Humidity :  ${response.current.humidity} </div>
        <div class='inf'> UV Index :  ${response.current.uv} </div>
        <div class='inf'> Last Updated : ${response.current.last_updated}</div>
        `;
       ukraine.appendChild(p);

   } , 0.2))

   fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Canada', options)
   .then(response => response.json())
   .then(response => setTimeout(() => {
       const p = document.createElement('p');
       p.innerHTML = `<div class='inf'> Condition :  ${response.current.condition.text} </div>
        <div class='inf'> Temperature (C) :  ${response.current.temp_c} </div>
        <div class='inf'> Temperature (F) :  ${response.current.temp_f} </div>
        <div class='inf'> Wind :  ${response.current.wind_mph} (mph) and ${response.current.wind_kph} (kph) </div>
        <div class='inf'> Pressure : ${response.current.pressure_mb} (mb) and ${response.current.pressure_in} (in) </div>
        <div class='inf'> Visibility :  ${response.current.vis_miles} (miles) and ${response.current.vis_km} (km) </div>
        <div class='inf'> Gust :  ${response.current.gust_mph} (mph) and ${response.current.gust_kph} (kph) </div>
        <div class='inf'> Humidity :  ${response.current.humidity} </div>
        <div class='inf'> UV Index :  ${response.current.uv} </div>
        <div class='inf'> Last Updated : ${response.current.last_updated}</div>
        `;
       usa.appendChild(p);

   } , 0.2))

   fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Canada', options)
   .then(response => response.json())
   .then(response => setTimeout(() => {
       const p = document.createElement('p');
       p.innerHTML = `<div class='inf'> Condition :  ${response.current.condition.text} </div>
        <div class='inf'> Temperature (C) :  ${response.current.temp_c} </div>
        <div class='inf'> Temperature (F) :  ${response.current.temp_f} </div>
        <div class='inf'> Wind :  ${response.current.wind_mph} (mph) and ${response.current.wind_kph} (kph) </div>
        <div class='inf'> Pressure : ${response.current.pressure_mb} (mb) and ${response.current.pressure_in} (in) </div>
        <div class='inf'> Visibility :  ${response.current.vis_miles} (miles) and ${response.current.vis_km} (km) </div>
        <div class='inf'> Gust :  ${response.current.gust_mph} (mph) and ${response.current.gust_kph} (kph) </div>
        <div class='inf'> Humidity :  ${response.current.humidity} </div>
        <div class='inf'> UV Index :  ${response.current.uv} </div>
        <div class='inf'> Last Updated : ${response.current.last_updated}</div>
        `;
       switzerland.appendChild(p);

   } , 0.2))

   fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Canada', options)
   .then(response => response.json())
   .then(response => setTimeout(() => {
       const p = document.createElement('p');
       p.innerHTML = `<div class='inf'> Condition :  ${response.current.condition.text} </div>
        <div class='inf'> Temperature (C) :  ${response.current.temp_c} </div>
        <div class='inf'> Temperature (F) :  ${response.current.temp_f} </div>
        <div class='inf'> Wind :  ${response.current.wind_mph} (mph) and ${response.current.wind_kph} (kph) </div>
        <div class='inf'> Pressure : ${response.current.pressure_mb} (mb) and ${response.current.pressure_in} (in) </div>
        <div class='inf'> Visibility :  ${response.current.vis_miles} (miles) and ${response.current.vis_km} (km) </div>
        <div class='inf'> Gust :  ${response.current.gust_mph} (mph) and ${response.current.gust_kph} (kph) </div>
        <div class='inf'> Humidity :  ${response.current.humidity} </div>
        <div class='inf'> UV Index :  ${response.current.uv} </div>
        <div class='inf'> Last Updated : ${response.current.last_updated}</div>
        `;
       japan.appendChild(p);

   } , 0.2))


