/* Variable globale */

const container = document.querySelector(".container");
const body = document.querySelector("body");

/* Bouton Light */

var light = document.querySelector(".power-switch");

function togglelight() {
	body.classList.toggle("light");
}

light.addEventListener("mouseenter", function () {
	light.classList.toggle("survol");
});

light.addEventListener("mouseleave", function () {
	light.classList.toggle("survol");
});

/* Changement de style du titre */

var h1 = document.querySelector("h1");

h1.style.cssText =
	"color: white; font-size: 50px; fontFamily: Poppins_EB; font-kerning: initial;";

/* fonction d'ajout des cartes depuis le fichier données.js */

function addCartes() {
	for (let i = 0; i < tab.cartes.length; i++) {
		var id = i;
		var description = tab.cartes[i]["description"];
		var titre = tab.cartes[i]["titre"];
		var theme = tab.cartes[i]["theme"];
		var lien = tab.cartes[i]["lien"];
		var img = tab.cartes[i]["img"];

		let newcard = `<div class="card" id="${id}">
                <div class="box">
                <div class="content">
                        <h2>${i + 1}</h2>
                        <h3>${titre}</h3>
                        <div class="th_desc">
                            <p class="theme">${theme}</p>
                            <p class="description">${description}</p>
                        </div>
                        <p class="link"><a  href="${lien}" target="_blank">Page</a> <span><img src="./img/${img}.png" ></span> </p>
                    </div>
                </div>
                </div>`;

		container.innerHTML += newcard;
	}
}

/* fonction de création de la liste des thèmes */

function listTheme(themes, card) {
	var tag = [];

	for (let i = 0; i < card.length; i++) {
		var tags = themes[i].innerHTML;

		if (tag.indexOf(tags) === -1) {
			tag.push(tags);
		}
	}

	return tag;
}

/* Fonction de création du menu */

function header(themes, formulaire) {
	var header = document.createElement("header");
	body.insertBefore(header, formulaire);

	for (let i = 0; i < themes.length; i++) {
		var menu = document.createElement("a");
		menu.textContent = themes[i];
		header.append(menu);
	}

	var tout = document.createElement("a");
	tout.textContent = "Tout";
	header.prepend(tout);
}

/* Fonction pour le formulaire */
function form(tag) {
	/* Ajout du bouton formulaire */

	var butt_form = document.createElement("a");
	butt_form.setAttribute("class", "butt_form");
	butt_form.textContent = "Ajouter carte";
	body.prepend(butt_form);

	/* Ajout des options sur le select */

	for (let i = 0; i < tag.length; i++) {
		let select = document.querySelector("form select");
		let option = document.createElement("option");
		option.textContent = tag[i];
		option.setAttribute("value", tag[i]);
		select.append(option);
	}
}

/* Fonctionalité du menu */

function menu(card, formulaire) {
	var menu = document.querySelectorAll("header a");

	for (let i = 0; i < menu.length; i++) {
		menu[i].addEventListener("click", function () {
			for (let j = 0; j < card.length; j++) {
				let theme = card[j].querySelector(".theme");
				if (menu[i].innerText != theme.innerText) {
					card[j].style.display = "none";
				} else if (menu[i].innerText == theme.innerText) {
					card[j].style.display = "block";
					formulaire.style.display = "none";
				}
				if (menu[i].innerText == "Tout") {
					card[j].style.display = "block";
					formulaire.style.display = "none";
				}
			}
		});
	}
}

/* Changement des couleurs en fonction du theme */

function changeColor(card, themes) {
	for (let i = 0; i < themes.length; i++) {
		let nums = card[i].querySelector("h2");
		let butt = card[i].querySelector("a");

		card[i].addEventListener("mouseenter", function () {
			if (themes[i].innerHTML === "Intégration") {
				nums.style.color = tab.theme_color["Intégration"];
				butt.style.backgroundColor = tab.theme_color["Intégration"];
			} else if (themes[i].innerHTML === "Dev Web") {
				nums.style.color = tab.theme_color["Dev Web"];
				butt.style.backgroundColor = tab.theme_color["Dev Web"];
			} else if (themes[i].innerHTML === "Outils") {
				nums.style.color = tab.theme_color["Outils"];
				butt.style.backgroundColor = tab.theme_color["Outils"];
			} else if (themes[i].innerHTML === "Culture Web") {
				nums.style.color = tab.theme_color["Culture Web"];
				butt.style.backgroundColor = tab.theme_color["Culture Web"];
			}
		});

		card[i].addEventListener("mouseleave", function () {
			nums.style.color = "";
			butt.style.backgroundColor = "";
		});
	}
}

/* Utilisation du bouton formulaire */

function formButton(formulaire, card) {
	var bouton = document.querySelector(".butt_form");

	bouton.addEventListener("click", function () {
		for (let j = 0; j < card.length; j++) {
			card[j].style.display = "none";
		}
		formulaire.style.display = "flex";
	});
}

/* Agrandisemment et réduction d'image */

function full(card) {
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
}

/* Modifie le titre */

function modifTitre(card) {
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
}

function all() {
	addCartes();
	var card = document.querySelectorAll(".card");
	var themes = container.querySelectorAll(".theme");
	var formulaire = document.querySelector("form");
	let tag = listTheme(themes, card);
	header(tag, formulaire);
	menu(card, formulaire);
	changeColor(card, themes);
	suppression(card);
	form(tag);
	formButton(formulaire, card);
	full(card);
	modifTitre(card);
}

all();

function suppression(card) {
	for (let i = 0; i < card.length; i++) {
		var title = card[i].querySelector("h2");
		var sup = document.createElement("span");
		sup.innerText = "X";

		title.insertAdjacentElement("beforebegin", sup);

		sup.addEventListener("click", function () {
			tab.cartes.splice(i, 1);
			document.querySelector(".butt_form").remove();
			document.querySelector(".container").innerHTML = "";
			document.querySelector("header").remove();
			all();
		});
	}
}

/* Fonction créer la carte */
function ajoutCarte() {
	var formulaire = document.querySelector("form");
	var titre = formulaire.querySelector('input[type="text"]').value;
	var theme = formulaire.querySelector("select").value;
	var desc = formulaire.querySelector("textarea").value;
	var lien = formulaire.querySelector('input[type="url"]').value;

	var add = [];

	add["titre"] = titre;
	add["theme"] = theme;
	add["description"] = desc;
	add["lien"] = lien;

	JSON.stringify(add);

	tab.cartes.push(add);

	document.querySelector(".container").innerHTML = "";
	document.querySelector("header").remove();
	document.querySelector("select").innerHTML = "";

	formulaire.style.display = "none";

	all();
}
