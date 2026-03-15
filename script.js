const ADMIN_CODE="170713";

let games=[];

const gamesContainer=document.getElementById("games");


function renderGames(list=games){

gamesContainer.innerHTML="";

list.forEach((game,index)=>{

let div=document.createElement("div");

div.className="game";

div.innerHTML=`

<img src="${game.image}">

<div class="gameContent">

<h3>${game.title}</h3>

<div class="tag" onclick="filterCategory('${game.category}')">${game.category}</div>

<p>${game.description}</p>

<div>👥 ${game.plays||0} joueurs</div>

<button onclick="playGame(${index})">▶ Jouer</button>

</div>

`;

gamesContainer.appendChild(div);

});

}


function playGame(index){

games[index].plays=(games[index].plays||0)+1;

document.getElementById("gameViewer").classList.remove("hidden");

document.getElementById("gameFrame").src=games[index].url;

}


function closeGame(){

document.getElementById("gameViewer").classList.add("hidden");

document.getElementById("gameFrame").src="";

}


function fullscreenGame(){

document.getElementById("gameFrame").requestFullscreen();

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
plays:0

};

games.unshift(game);

renderGames();

};

reader.readAsDataURL(file);

}


function filterCategory(cat){

let filtered=games.filter(game=>game.category===cat);

renderGames(filtered);

}


function showAll(){

renderGames();

}


function searchGame(){

let input=document.getElementById("searchBar").value.toLowerCase();

let filtered=games.filter(g=>g.title.toLowerCase().includes(input));

renderGames(filtered);

}


function openAdmin(){

let code=prompt("Code admin");

if(code===ADMIN_CODE){

document.getElementById("adminPanel").classList.remove("hidden");

}

}


function closeAdmin(){

document.getElementById("adminPanel").classList.add("hidden");

}


renderGames();
