/* FUNCIÓN para el despliegue de los MENUS */

var leftMenu = document.getElementById("left__menu");
var rightMenu = document.getElementById("right__menu");
var iconRightMenu = document.getElementById("icon-more-vertical");
var filterMenu = document.getElementById("filterMenu");



function displayLeftMenu() {
	var displayLeftMenu = leftMenu.style.display;
	var displayRightMenu = rightMenu.style.display;
	var displayFilterMenu = filterMenu.style.display;

	if (displayLeftMenu == "none" || displayLeftMenu == "") {
		 leftMenu.style.display = "block";
	} else {
		 leftMenu.style.display = "none";
	}

	if (displayRightMenu == "block") {
		rightMenu.style.display = "none";
		iconRightMenu.style.top = "0px";
	}

	if (displayFilterMenu == "block") {
		filterMenu.style.display = "none";
	}
}

function displayRightMenu() {
	var displayLeftMenu = leftMenu.style.display;
	var displayRightMenu = rightMenu.style.display;
	var displayFilterMenu = filterMenu.style.display;

	if (displayRightMenu == "none" || displayRightMenu == "") {
		 rightMenu.style.display = "block";
		 iconRightMenu.style.top = "-62px";
	}
	else {
		 rightMenu.style.display = "none";
		 iconRightMenu.style.top = "0px";
	}

	if (displayLeftMenu == "block") {
		leftMenu.style.display = "none";
	}

	if (displayFilterMenu == "block") {
		docFilterMenu.style.display = "none";
	}
}

function displayFilterMenu() {
	var displayLeftMenu = leftMenu.style.display;
	var displayRightMenu = rightMenu.style.display;
	var displayFilterMenu = filterMenu.style.display;

	if (displayFilterMenu == "none" || displayFilterMenu == "") {
		 filterMenu.style.display = "block";
	}
	else {
		 filterMenu.style.display = "none";
	}

	if (displayLeftMenu == "block") {
		leftMenu.style.display = "none";
	}
	
	if (displayRightMenu == "block") {
		rightMenu.style.display = "none";
		iconRightMenu.style.top = "0px";
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