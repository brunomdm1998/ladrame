async function handleSignup(){

const email = document.getElementById("signupEmail").value;
const pass = document.getElementById("signupPass").value;

const {error} = await supabaseClient.auth.signUp({
email: email,
password: pass
});

if(error){
document.getElementById("signupMsg").innerText = error.message;
return;
}

document.getElementById("signupMsg").innerText = "Cuenta creada, revisa tu correo";

}

async function handleLogin(){

const email = document.getElementById("loginEmail").value;
const pass = document.getElementById("loginPass").value;

const {data,error} = await supabaseClient.auth.signInWithPassword({
email: email,
password: pass
});

if(error){
document.getElementById("loginMsg").innerText = error.message;
return;
}

boot();

}

async function logout(){

await supabaseClient.auth.signOut();

location.reload();

}