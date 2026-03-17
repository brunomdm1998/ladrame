async function createWalk(){

const price = document.getElementById("walkPrice").value;
const minutes = document.getElementById("walkMinutes").value;

const user = (await supabaseClient.auth.getUser()).data.user;

navigator.geolocation.getCurrentPosition(async pos => {

const lat = pos.coords.latitude;
const lng = pos.coords.longitude;

await supabaseClient.from("walk_requests").insert({
owner_id: user.id,
price: price,
minutes: minutes,
lat: lat,
lng: lng
});

alert("Solicitud enviada");

});

}

async function loadNearbyWalks(){

navigator.geolocation.getCurrentPosition(async pos => {

const lat = pos.coords.latitude;
const lng = pos.coords.longitude;

const {data} = await supabaseClient
.from("walk_requests")
.select("*");

data.forEach(walk => {

const el = document.createElement("div");
el.className = "emoji-marker";
el.innerText = "🐕";

new mapboxgl.Marker(el)
.setLngLat([walk.lng,walk.lat])
.addTo(walkerMap);

});

});

}