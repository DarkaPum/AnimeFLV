/* FUNCIÓN para el despliegue de los MENUS */

var leftMenu = document.getElementById("left__menu");
var rightMenu = document.getElementById("right__menu");
var iconRightMenu = document.getElementById("icon-more-vertical");
var filterMenu = document.getElementById("filterMenu");



function displayLeftMenu() {
	var displayLeftMenu = leftMenu.style.display;
	var displayRightMenu = rightMenu.style.display;
	/*var displayFilterMenu = filterMenu.style.display;*/

	if (displayLeftMenu == "none" || displayLeftMenu == "") {
		 leftMenu.style.display = "block";
	} else {
		 leftMenu.style.display = "none";
	}

	if (displayRightMenu == "block") {
		rightMenu.style.display = "none";
		iconRightMenu.style.top = "0px";
	}

	/*if (displayFilterMenu == "block") {
		filterMenu.style.display = "none";
	}*/
}

function displayRightMenu() {
	var displayLeftMenu = leftMenu.style.display;
	var displayRightMenu = rightMenu.style.display;
	/*var displayFilterMenu = filterMenu.style.display;*/

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

	/*if (displayFilterMenu == "block") {
		filterMenu.style.display = "none";
	}*/
}
/*
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
*/

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

/* FUNCIÓN para el SLIDER de SEGUIR VIENDO. */

var keepWatching__list = document.getElementById("keepWatching__list");
var prev__keepWatching = document.getElementById("prev__keepWatching");

function keepWatching__next() {
	var translateXnext = keepWatching__list.style.transform;
	var displayPrev = prev__keepWatching.style.display;

	if (translateXnext == "translateX(0%)" || translateXnext == ""){
		keepWatching__list.style.transform = "translateX(-20%)";
		prev__keepWatching.style.display = "flex";
	}
	if (translateXnext == "translateX(-20%)"){
		keepWatching__list.style.transform = "translateX(-40%)";
	}
	if (translateXnext == "translateX(-40%)"){
		keepWatching__list.style.transform = "translateX(-60%)";
	}
	if (translateXnext == "translateX(-60%)"){
		keepWatching__list.style.transform = "translateX(-80%)";
	}
	if (translateXnext == "translateX(-80%)"){
		keepWatching__list.style.transform = "translateX(0%)";
		prev__keepWatching.style.display = "none";
	}
}

function keepWatching__prev() {
	var translateXprev = keepWatching__list.style.transform;
	var displayPrev = prev__keepWatching.style.display;

	if (translateXprev == "translateX(-80%)"){
		keepWatching__list.style.transform = "translateX(-60%)";
	}
	if (translateXprev == "translateX(-60%)"){
		keepWatching__list.style.transform = "translateX(-40%)";
	}
	if (translateXprev == "translateX(-40%)"){
		keepWatching__list.style.transform = "translateX(-20%)";
	}
	if (translateXprev == "translateX(-20%)"){
		keepWatching__list.style.transform = "translateX(0%)";
		prev__keepWatching.style.display = "none";
	}
}


