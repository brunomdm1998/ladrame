async function registerPush(){

if(!("serviceWorker" in navigator)) return;

const reg = await navigator.serviceWorker.register(
"/firebase-messaging-sw.js"
);

const permission = await Notification.requestPermission();

if(permission !== "granted") return;

const token = await getToken(messaging,{
vapidKey: FIREBASE_VAPID_KEY,
serviceWorkerRegistration: reg
});

const user = (await supabaseClient.auth.getUser()).data.user;

if(!user) return;

await supabaseClient
.from("push_tokens")
.upsert({
user_id: user.id,
token: token
});

}

function listenPush(){

onMessage(messaging,(payload)=>{

new Notification(
payload.notification.title,
{
body: payload.notification.body,
icon: "/icon.png"
}
);

});

}