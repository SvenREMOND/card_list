/* ********* */
/* 1er étape */
/* ********* */

/* 1.1.1 Affichage des information de la premiere carte dans la console */

var carte_1 = document.querySelector(".card");

var titrecarte = carte_1.querySelector("h3").innerHTML;
var themecarte = carte_1.querySelector(".theme").innerHTML;
var desccarte = carte_1.querySelector(".description").innerHTML;
var liencarte = carte_1.querySelector("a");
var liencarte = liencarte.getAttribute("href");

console.log(titrecarte);
console.log(themecarte);
console.log(desccarte);
console.log(liencarte);

console.log("");

var h1 = document.querySelector("h1");

h1.style.cssText =
	"color: white; font-size: 50px; fontFamily: Poppins_EB; font-kerning: initial;";

/*1.1.2 changement de style au hover de la carte une */

var num = carte_1.querySelector("h2");

// carte_1.addEventListener("mouseenter", function(){
//     num.classList.toggle("actif");
// });
//
// carte_1.addEventListener("mouseleave", function(){
//     num.classList.toggle("actif");
// });

/*1.2.1 Nombre de carte présente */

var number_of_card = document.querySelectorAll(".card").length;

console.log(number_of_card);

console.log("");

/*1.2.2 Affiche le theme de la carte */

var themes = document.querySelectorAll(".theme");
var tag = [];

for (var i = 0; i < number_of_card; i++) {
	var tags = themes[i].innerHTML;

	if (tag.indexOf(tags) === -1) {
		tag.push(tags);
	}
}

console.log(tag);

/*1.2.3 Généraliser les effet de survol */

var cartes = document.querySelectorAll(".card");

// for(let i = 0; i < cartes.length; i++) {
//     let nums = cartes[i].querySelector('h2');
//
//     cartes[i].addEventListener("mouseenter", function(){
//         nums.classList.toggle("actif");
//     });
//
//     cartes[i].addEventListener("mouseleave", function(){
//         nums.classList.toggle("actif");
//     });
// }

/*1.2.4 Changer la couleur en fonction du theme */

var tagcolor = [
	"rgba(100, 128, 255, 0.6)",
	"rgba(0, 128, 0, 0.6)",
	"rgba(255, 166, 0, 0.6)",
];

for (let i = 0; i < themes.length; i++) {
	let nums = cartes[i].querySelector("h2");
	let butt = cartes[i].querySelector("a");

	cartes[i].addEventListener("mouseenter", function () {
		if (themes[i].innerHTML === "Intégration") {
			nums.style.color = tagcolor[0];
			butt.style.backgroundColor = tagcolor[0];
		} else if (themes[i].innerHTML === "Dev Web") {
			nums.style.color = tagcolor[1];
			butt.style.backgroundColor = tagcolor[1];
		} else {
			nums.style.color = tagcolor[2];
			butt.style.backgroundColor = tagcolor[2];
		}
	});

	cartes[i].addEventListener("mouseleave", function () {
		nums.style.color = "";
		butt.style.backgroundColor = "";
	});
}

/*1.3.1 Menu de catégorie */
const body = document.querySelector("body");

// var header = document.createElement('header');
// body.prepend(header);
//
// for (let i = 0; i < tag.length; i++) {
//     var menu = document.createElement('a');
//     menu.textContent = tag[i];
//     menu.setAttribute('href', '#');
//     header.append(menu);
// }

/*1.3.2 => 1.2.2 */

/*1.3.3 Bouton Tous */

// var tout = document.createElement('a');
// tout.textContent = 'Tout';
// tout.setAttribute('href', '#');
// header.prepend(tout);

/*1.3.3 Changer la couleur */

function togglelight() {
	body.classList.toggle("light");
}

var bouton = document.querySelector(".power-switch");

/*1.3.4 Fonction pour le 1.3.1 */

var container = document.querySelector(".container");

function header(themes) {
	var header = document.createElement("header");
	body.insertBefore(header, container);

	for (let i = 0; i < themes.length; i++) {
		var menu = document.createElement("a");
		menu.textContent = themes[i];
		header.append(menu);
	}

	var tout = document.createElement("a");
	tout.textContent = "Tout";
	header.prepend(tout);
}

header(tag);

/*1.4.1 Survol du bouton light */

bouton.addEventListener("mouseenter", function () {
	bouton.classList.toggle("survol");
});

bouton.addEventListener("mouseleave", function () {
	bouton.classList.toggle("survol");
});

/*1.4.2 Changement text du bouton */

/* Pas pour moi */

/*1.4.3 Menu utilisable */

var menu = document.querySelectorAll("header a");

for (let i = 0; i < menu.length; i++) {
	menu[i].addEventListener("click", function () {
		for (let j = 0; j < cartes.length; j++) {
			let theme = cartes[j].querySelector(".theme");
			if (menu[i].innerText != theme.innerText) {
				cartes[j].style.display = "none";
			} else if (menu[i].innerText == theme.innerText) {
				cartes[j].style.display = "block";
			}
			if (menu[i].innerText == "Tout") {
				cartes[j].style.display = "block";
			}
		}
	});
}

/* ********** */
/* 2eme étape */
/* ********** */

/*2.1 Manipuler les tableaux : Ajouter des cartes via un script */

/* affichage des cartes dans la console */

// if(tab_titres.length = tab_themes.length = tab_descriptions.length = tab_liens.length){
//
//     for(let i = 0; i < tab_titres.length; i++){
//         console.log(tab_titres[i]);
//         console.log(tab_descriptions[i]);
//         console.log(tab_themes[i]);
//         console.log(tab_liens[i]);
//         console.log('');
//     }
//
// }else{
//     console.log('Les tableaux n\'on pas le meme nombre d\'élément ');
// }

/* Affichage des cartes en HTML */

if (
	(tab_titres.length = tab_themes.length = tab_descriptions.length =
		tab_liens.length)
) {
	for (let i = 0; i < tab_titres.length; i++) {
		var description = tab_descriptions[i];
		var titre = tab_titres[i];
		var theme = tab_themes[i];
		var lien = tab_liens[i];

		let newcard = `<div class="card">
            <div class="box">
                <div class="content">
                    <h2>${i + 1}</h2>
                    <h3>${titre}</h3>
                    <div class="th_desc">
                        <p class="theme">${theme}</p>
                        <p class="description">${description}</p>
                    </div>
                    <a href="${lien}" target="_blank">Page</a>
                </div>
            </div>
        </div>`;

		container.innerHTML += newcard;
	}
} else {
	alert("Les tableaux n'on pas le meme nombre d'élément ");
}

/*2.2 Formulaire */

/* Ajout du bouton formulaire */

var butt_form = document.createElement("a");
butt_form.setAttribute("class", "butt_form");
butt_form.textContent = "Ajouter carte";
body.prepend(butt_form);

/* Utilisation du bouton formulaire */

var bouton = document.querySelector(".butt_form");
var formulaire = document.querySelector("form");

bouton.addEventListener("click", function () {
	for (let j = 0; j < card.length; j++) {
		card[j].style.display = "none";
	}
	formulaire.style.display = "flex";
});

/* Ajout des options sur le select */

for (let i = 0; i < tag.length; i++) {
	let select = document.querySelector("form select");
	let option = document.createElement("option");
	option.textContent = tag[i];
	option.setAttribute("value", tag[i]);
	select.append(option);
}

/* 2.7 */

/* Agrandissement d'image */

var image = document.querySelectorAll("span img");

for (let i = 0; i < card.length; i++) {
	image[i].addEventListener("click", function () {
		let div = document.createElement("div");
		let src = image[i].getAttribute("src");
		div.setAttribute("class", "full");
		let full = document.createElement("img");
		full.setAttribute("src", src);
		body.append(div);
		div.append(full);

		/* Reduction de l'image */

		div.addEventListener("click", function () {
			div.remove();
		});
	});
}

/* Edition du titre */
for (let i = 0; i < card.length; i++) {
	var title = card[i].querySelector("h3");

	title.addEventListener("click", function () {
		var title = card[i].querySelector("h3");
		let txt = title.innerText;
		let input = document.createElement("input");

		input.setAttribute("value", txt);

		title.insertAdjacentElement("beforebegin", input);
		title.remove();
		input.addEventListener("keydown", (event) => {
			let key = event.key;
			if (key === "Enter") {
				let h = document.createElement("h3");
				let value = input.value;
				h.innerText = value;
				input.insertAdjacentElement("beforebegin", h);
				input.remove();
				tab.cartes[i].titre = value;
			}
		});
	});
}
