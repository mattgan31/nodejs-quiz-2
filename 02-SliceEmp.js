// terdapat array employees
const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];

const bogor = cities.indexOf("bogor")

const citiesSliced = [...cities.slice(0, bogor), ...cities.slice(bogor + 1)]

function citiesSlice(arrays, cityBetween) {
    jakarta = cities.indexOf(cityBetween);
    arrays.splice(jakarta, 1);

    return arrays;
}

console.log(citiesSlice(cities,"jakarta"));
//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung']
