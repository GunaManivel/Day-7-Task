const URL = "https://restcountries.com/v3.1/all";
const obj = new XMLHttpRequest();
obj.open( "GET" , URL );
obj.send();
obj.onload = () => {
    const countries = JSON.parse(obj.response)
    console.log(countries);
    const totalpopulation = countries.reduce((a,country) => a+country.population,0);
     console.log("Total poulation is :" ,totalpopulation);
}