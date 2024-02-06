const apikey = '565204050ddba089702ddcaf8e310c63'
const getWeather = async (city)  => {
    const result= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

return await result.json();
    }
export default getWeather;