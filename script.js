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

<div class="categoryTag">${game.category}</div>

<div>👥 Joueurs : ${game.plays||0}</div>

<div class="gameButtons">

<button onclick="likeGame(${index})">👍 ${game.likes||0}</button>

<button onclick="dislikeGame(${index})">👎 ${game.dislikes||0}</button>

<button onclick="playGame(${index})">▶️ Jouer</button>

</div>

</div>

`;

gamesContainer.appendChild(div);

});

}


function playGame(index){

games[index].plays=(games[index].plays||0)+1;

localStorage.setItem("games",JSON.stringify(games));

openGame(games[index].url);

renderGames();

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
let file=document.getElementById("imageUpload").files[0];
let url=document.getElementById("url").value;
let description=document.getElementById("description").value;
let category=document.getElementById("category").value;

let reader=new FileReader();

reader.onload=function(e){

let game={

title:title,
image:e.target.result,
url:url,
description:description,
category:category,
likes:0,
dislikes:0,
plays:0

};

games.push(game);

localStorage.setItem("games",JSON.stringify(games));

renderGames();

};

reader.readAsDataURL(file);

}


function likeGame(i){

games[i].likes++;

localStorage.setItem("games",JSON.stringify(games));

renderGames();

}


function dislikeGame(i){

games[i].dislikes++;

localStorage.setItem("games",JSON.stringify(games));

renderGames();

}


function searchGame(){

let input=document.getElementById("searchBar").value.toLowerCase();

let cards=document.querySelectorAll(".game");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

card.style.display=title.includes(input)?"block":"none";

});

}


function filterCategory(cat){

let cards=document.querySelectorAll(".game");

cards.forEach((card,i)=>{

if(cat==="all"){

card.style.display="block";

}else{

card.style.display=games[i].category===cat?"block":"none";

}

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
