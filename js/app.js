function go(screen){

document.querySelectorAll(".screen").forEach(s=>{
s.classList.remove("active");
});

document.getElementById(screen).classList.add("active");

}

async function boot(){

const {data} = await supabaseClient.auth.getSession();

if(!data.session){
go("loginScreen");
return;
}

const user = data.session.user;

go("ownerHomeScreen");

initOwnerMap();
initProviderMap();
initWalkerMap();

registerPush();
listenPush();

}

document.addEventListener("DOMContentLoaded",boot);