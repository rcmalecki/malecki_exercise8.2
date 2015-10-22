// Javascript Document

/* -----------------------------------------

Scripts to add text to the div portion of this site.

-Manages what header will be added to the div.

-Manages what paragraph will be addd to the div.

-------------------------------------------- */

/*
	addTextToDiv()
	-creates a variable to select the desired div element
	-sets the style attribute of the selected div element
	-creates the new elements to be added to the div element
	-creates the child nodes to be added to the div element
	-Adds the child nodes to the new elements
	-Attaches the child nodes to the document
	
*/

function addDivText() {
	//create a variable to select the desired div element
	var addQuote = document.getElementById ('acdoyle');

	//set the style attribute of the selected div element
	addQuote.setAttribute('align','left');

	//create the elements
	var newHeading = document.createElement('h1');
	var newParagraph = document.createElement('p');

	//create the child nodes
	var h1Text = document.createTextNode('An excerpt from The Adventures of Sherlock Holmes by Arthur Conan Doyle:');
	var paraText = document.createTextNode('Life is infinitely stranger than anything which the mind of man could invent. We would not dare to conceive the things which are really mere commonplaces of existence. If we could fly out of that window hand in hand, hover over this great city, gently remove the roofs, and and peep in at the queer things which are going on, the strange coincidences, the plannings, the cross-purposes, the wonderful chains of events, working through generations, and leading to the most outre results, it would make all fiction with its conventionalities and foreseen conclusions most stale and unprofitable.');

	//add the child nodes to the new elements
	newHeading.appendChild(h1Text);
	newParagraph.appendChild(paraText);

	//attach the child nodes to the document
	document.getElementById('acdoyle').appendChild(newHeading);
	document.getElementById('acdoyle').appendChild(newParagraph);
}
	


