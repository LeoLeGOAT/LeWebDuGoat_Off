const ADMIN_CODE="170713";

let games=JSON.parse(localStorage.getItem("games"))||[];

const gamesContainer=document.getElementById("games");


function renderGames(){

gamesContainer.innerHTML="";

games.forEach((game,index)=>{

let div=document.createElement("div");
div.className="game";

div.innerHTML=`

<img src="${game.image}">

<div class="gameContent">

<h3>${game.title}</h3>

<p>${game.description}</p>

<div class="gameButtons">

<button onclick="likeGame(${index})">👍 ${game.likes||0}</button>

<button onclick="dislikeGame(${index})">👎 ${game.dislikes||0}</button>

<button onclick="openGame('${game.url}')">▶️ Jouer</button>

</div>

</div>

`;

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


function fullscreenGame(){

let iframe=document.getElementById("gameFrame");

if(iframe.requestFullscreen){

iframe.requestFullscreen();

}

}


function addGame(){

let title=document.getElementById("title").value;

let image=document.getElementById("image").value;

let url=document.getElementById("url").value;

let description=document.getElementById("description").value;

let game={

title:title,

image:image,

url:url,

description:description,

likes:0,

dislikes:0

};

games.push(game);

localStorage.setItem("games",JSON.stringify(games));

renderGames();

}


function likeGame(index){

games[index].likes++;

localStorage.setItem("games",JSON.stringify(games));

renderGames();

}


function dislikeGame(index){

games[index].dislikes++;

localStorage.setItem("games",JSON.stringify(games));

renderGames();

}


function searchGame(){

let input=document.getElementById("searchBar").value.toLowerCase();

let gameCards=document.querySelectorAll(".game");

gameCards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

card.style.display=title.includes(input)?"block":"none";

});

}


document.getElementById("adminBtn").onclick=()=>{

let code=prompt("Code admin");

if(code===ADMIN_CODE){

document.getElementById("adminPanel").classList.toggle("hidden");

}else{

alert("Code incorrect");

}

};


renderGames();
