const SUPABASE_URL = "TU_SUPABASE_URL";
const SUPABASE_KEY = "TU_SUPABASE_ANON_KEY";

const supabaseClient = supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

mapboxgl.accessToken = "TU_MAPBOX_TOKEN";

const ICE_SERVERS = [
{
urls: [
"stun:stun.l.google.com:19302"
]
},
{
urls: [
"turn:187.33.147.246:3478"
],
username: "bruno",
credential: "ladrame123"
}
];