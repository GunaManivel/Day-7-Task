const URL = "https://restcountries.com/v3.1/all";
const obj = new XMLHttpRequest();
obj.open( "GET", URL );
obj.send();
obj.onload = () => {
    const countries = JSON.parse(obj.response);
    console.log(countries);
    const USDcountries = countries.filter( country => country.currencies && country.currencies.USD);
    console.log(USDcountries)
    USDcountries.forEach(country => { console.log(country.name.common) });
    //console.log(countries.filter(country => country.name.common === "Caribbean Netherlands"))

    

}