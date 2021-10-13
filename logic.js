var pkWeAreUpTo = 1;
var listItems = [
	
];

function userDidClickCreate() {
	var userEnteredText = captureUserData();
	var userEnteredText1 = captureUserData1();
	var userEnteredText2 = captureUserData2();
	var userEnteredText3 = captureUserData3();;
	var newItemDictionary = {
		"id": pkWeAreUpTo
		, "date": userEnteredText
		, "Minimum_temperature": userEnteredText1
		, "Maximum_temperature": userEnteredText2
		, "Conditions": userEnteredText3
	};
	listItems.push(newItemDictionary);
	pkWeAreUpTo++;
	redrawTable(newItemDictionary);
}

function captureUserData() {
	var Date = document.getElementById("Date");
	var userEnteredText = Date.value

	return userEnteredText ;
}

function captureUserData1() {
	var Minimum_temperature = document.getElementById("Minimum_temperature");
	var userEnteredText1 = Minimum_temperature.value

	return userEnteredText1 ;
}

function captureUserData2() {
	var Maximum_temperature = document.getElementById("Maximum_temperature");
	var userEnteredText2 = Maximum_temperature.value

	return userEnteredText2 ;
}

function captureUserData3() {
	var Conditions = document.getElementById("Conditions");
	var userEnteredText3 = Conditions.value

	return userEnteredText3 ;
}

function redrawTable(newItemDictionary) {
	var tbodyForTasks = document.getElementById("tbodyForTasks");
	var myActions = "<a onclick='deleteItem(" + newItemDictionary["id"] + ")' href='#'>Delete This One</a>";

	var preparedRowHTML = "<tr id='rowForItem_" + newItemDictionary["id"] + "'>";
	preparedRowHTML += "<td class='subtleText'>" + newItemDictionary["id"] + "</td>";
	preparedRowHTML += "<td><em>" + newItemDictionary["date"] + "</em></td>";
	preparedRowHTML += "<td><em>" + newItemDictionary["Minimum_temperature"] + "</em></td>";
	preparedRowHTML += "<td><em>" + newItemDictionary["Maximum_temperature"] + "</em></td>";
	preparedRowHTML += "<td><em>" + newItemDictionary["Conditions"] + "</em></td>";
	preparedRowHTML += "<td>" + myActions + "</td>";
	preparedRowHTML+= "</tr>";

	tbodyForTasks.innerHTML += preparedRowHTML;
}

function deleteItem(rowToDelete) {
	console.log("deleteItem triggered for row = " + rowToDelete);
	document.getElementById("rowForItem_" + rowToDelete).innerHTML = "";
}

function downloadJSON() {
	download("data.json", JSON.stringify(listItems, null, '\t'));
}

function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
  
	element.style.display = 'none';
	document.body.appendChild(element);
  
	element.click();
  
	document.body.removeChild(element);
}