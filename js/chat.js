let activeChatId = null;

async function loadMessages(chatId){

activeChatId = chatId;

const {data} = await supabaseClient
.from("messages")
.select("*")
.eq("chat_id",chatId)
.order("created_at",{ascending:true});

const box = document.getElementById("chatMessages");

box.innerHTML = "";

data.forEach(msg=>{

const div = document.createElement("div");

div.className = "bubble";

div.innerText = msg.text;

box.appendChild(div);

});

}

async function sendMessage(){

const input = document.getElementById("chatInput");

const text = input.value;

if(!text)return;

const user = (await supabaseClient.auth.getUser()).data.user;

await supabaseClient.from("messages").insert({
chat_id: activeChatId,
sender_id: user.id,
text: text
});

input.value = "";

loadMessages(activeChatId);

}