let ownerMap;
let providerMap;
let walkerMap;

function initOwnerMap(){

ownerMap = new mapboxgl.Map({
container: "ownerHomeMap",
style: "mapbox://styles/mapbox/streets-v11",
center: [-77.0428,-12.0464],
zoom: 13
});

}

function initProviderMap(){

providerMap = new mapboxgl.Map({
container: "providerHomeMap",
style: "mapbox://styles/mapbox/streets-v11",
center: [-77.0428,-12.0464],
zoom: 13
});

}

function initWalkerMap(){

walkerMap = new mapboxgl.Map({
container: "walkerMap",
style: "mapbox://styles/mapbox/streets-v11",
center: [-77.0428,-12.0464],
zoom: 13
});

}