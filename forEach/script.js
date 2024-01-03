const URL = "https://restcountries.com/v3.1/all";
const obj = new XMLHttpRequest();
obj.open( "GET" , URL );
obj.send();
obj.onload = () => {
    const countries = JSON.parse(obj.response);
    console.log(countries)
    countries.forEach(country => {
        console.log(`Country : ${country.name.common} , Capital : ${country.capital} , Flag : ${country.flags.png}`)

        });
}