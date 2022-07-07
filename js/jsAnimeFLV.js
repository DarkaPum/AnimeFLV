/* FUNCIÓN para el despliegue de los MENUS */

var docPrincipalMenu = document.getElementById("principalMenu");
var docSettingsMenu = document.getElementById("settingsMenu");
var docIconSMenu = document.getElementById("icon-more-vertical");
var docFilterMenu = document.getElementById("filterMenu");



function displayMenu() {
	var displayPrincipalMenu = docPrincipalMenu.style.display;
	var displaySettingsMenu = docSettingsMenu.style.display;
	var displayFilterMenu = docFilterMenu.style.display;

	if (displayPrincipalMenu == "none" || displayPrincipalMenu == "") {
		 docPrincipalMenu.style.display = "block";
	}
	else {
		 docPrincipalMenu.style.display = "none";
	}

	if (displaySettingsMenu == "block") {
		docSettingsMenu.style.display = "none";
		docIconSMenu.style.top = "0px";
	}

	if (displayFilterMenu == "block") {
		docFilterMenu.style.display = "none";
	}
}

function displaySettingsMenu() {
	var displayPrincipalMenu = docPrincipalMenu.style.display;
	var displaySettingsMenu = docSettingsMenu.style.display;
	var displayFilterMenu = docFilterMenu.style.display;

	if (displaySettingsMenu == "none" || displaySettingsMenu == "") {
		 docSettingsMenu.style.display = "block";
		 docIconSMenu.style.top = "-62px";
	}
	else {
		 docSettingsMenu.style.display = "none";
		 docIconSMenu.style.top = "0px";
	}

	if (displayPrincipalMenu == "block") {
		docPrincipalMenu.style.display = "none";
	}

	if (displayFilterMenu == "block") {
		docFilterMenu.style.display = "none";
	}
}

function displayFilterMenu() {
	var displayPrincipalMenu = docPrincipalMenu.style.display;
	var displaySettingsMenu = docSettingsMenu.style.display;
	var displayFilterMenu = docFilterMenu.style.display;

	if (displayFilterMenu == "none" || displayFilterMenu == "") {
		 docFilterMenu.style.display = "block";
	}
	else {
		 docFilterMenu.style.display = "none";
	}

	if (displayPrincipalMenu == "block") {
		docPrincipalMenu.style.display = "none";
	}
	
	if (displaySettingsMenu == "block") {
		docSettingsMenu.style.display = "none";
		docIconSMenu.style.top = "0px";
	}
}


/* FUNCIÓN para mostrar los diferentes SECTIONS (Home, Follow, Fav, SeeLater, More) */

function navSection(nav) {
	var sections = new Array(5);
	sections[0] = "SHome";
	sections[1] = "SFollow";
	sections[2] = "SFav";
	sections[3] = "SSeeLater";
	sections[4] = "SMore";

	var search;
	var show;

	for (var i=0; i<5; i++) {
		search = document.getElementById(sections[i]);
		show = search.style.display = "none";

		if (sections[i] == nav){
			search.style.display = "block";
		}
	}
}

function displaySection(nav) {
	var sections = new Array(10);
	sections[0] = "first";
	sections[1] = "second";
	sections[2] = "third";
	sections[3] = "fourth";
	sections[4] = "fifth";
	sections[5] = "sixth";
	sections[6] = "seventh";
	sections[7] = "eighth";
	sections[8] = "nineth";
	sections[9] = "tenth";

	var search;
	var show;

	for (var i=0; i<10; i++) {
		search = document.getElementById(sections[i]);
		show = search.style.display;

		if (show == "block" || show == "") {
			search.style.display = "none";
			if (nav == 'next') {
				i++;
				if (i>9) {
					i=0;
				}				
			}
			if (nav == 'prev') {
				i--;
				if (i<0) {
					i=9;
				}				
			}
			search = document.getElementById(sections[i]);
			search.style.display = "block";
			break;
		}
	}
}