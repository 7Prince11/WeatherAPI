const button = document.querySelectorAll('button');
 

for (let i = 0; i < button.length; i++) {
    button[0].addEventListener("click",  () => {
        location.href = '../../sport_api/index.html';
    });
    button[1].addEventListener("click", () => {
        location.href = '../../time_zone_api/index.html';
    })
    button[2].addEventListener("click", () => {
        location.href = '../../weather_rn/index.html';
    })
    button[3].addEventListener("click", () => {
        location.href = '../../astronomy/index.html';
    })


}