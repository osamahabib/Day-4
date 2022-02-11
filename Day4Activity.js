//1.

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log(_.isEqual(obj1,obj2));

//Output:

//yes

//2.

var xhr = new XMLHttpRequest();

xhr.open("GET", 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
xhr.send();

xhr.onload = function() {
    if(xhr.status>=200 && xhr.status<300)
    {
        var data = JSON.parse(xhr.response);
        for (let index = 0; index < data.length; index++) {
            var countryData = data[index];
            console.log(`
            Country Flag: ${countryData.flag}
            Country Name: ${countryData.name}
            Country Region: ${countryData.region}
            Country SubRegion: ${countryData.subregion}
            Population: ${countryData.population}
            `);
            
        }
    }
}

//Output:


// Country Flag: https://restcountries.eu/data/afg.svg
// Country Name: Afghanistan
// Country Region: Asia
// Country SubRegion: Southern Asia
// Population: 27657145
// test.js:25:21

// Country Flag: https://restcountries.eu/data/ala.svg
// Country Name: Åland Islands
// Country Region: Europe
// Country SubRegion: Northern Europe
// Population: 28875
// test.js:25:21

// Country Flag: https://restcountries.eu/data/alb.svg
// Country Name: Albania
// Country Region: Europe
// Country SubRegion: Southern Europe
// Population: 2886026
// test.js:25:21

// Country Flag: https://restcountries.eu/data/dza.svg

//........
