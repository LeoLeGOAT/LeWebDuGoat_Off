const ADMIN_CODE = "170713";

let games = JSON.parse(localStorage.getItem("games")) || [];

const gamesContainer = document.getElementById("games");

function renderGames(){

gamesContainer.innerHTML="";

games.forEach((game,index)=>{

let div=document.createElement("div");
div.className="game";

div.innerHTML=`
<img src="${game.image}">
<h3>${game.title}</h3>
<p>${game.description}</p>
`;

div.onclick=()=>openGame(game.url);

gamesContainer.appendChild(div);

});

}

function openGame(url){

document.getElementById("gameViewer").classList.remove("hidden");
document.getElementById("gameFrame").src=url;

}

function closeGame(){

document.getElementById("gameViewer").classList.add("hidden");
document.getElementById("gameFrame").src="";

}

function addGame(){

let title=document.getElementById("title").value;
let image=document.getElementById("image").value;
let url=document.getElementById("url").value;
let description=document.getElementById("description").value;

let game={title,image,url,description};

games.push(game);

localStorage.setItem("games",JSON.stringify(games));

renderGames();

}

document.getElementById("adminBtn").onclick=()=>{

let code=prompt("Entrez le code admin");

if(code===ADMIN_CODE){

document.getElementById("adminPanel").classList.toggle("hidden");

}else{

alert("Code incorrect");

}

};

renderGames();
