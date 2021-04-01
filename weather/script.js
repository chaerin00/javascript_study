
function handleSuccess(position) {
	const { latitude, longitude } = position.coords;
};
navigator.geolocation.getCurrentPosition(handleSuccess, handleError);

const axios=require('axios');
axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=351d5e96c2167ecb571357e8e67eaf73`)
.then((response)=>{
    const weather=response.data;

    console.log(weather.name);

});
