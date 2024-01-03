const URL = "https://restcountries.com/v3.1/all";
const obj = new XMLHttpRequest();
obj.open ( "GET" , URL );
obj.send();
obj.onload = () => {
    const countries = JSON.parse(obj.response)
    console.log(countries)
    console.log(countries.filter(country => country.population < 200000))
}