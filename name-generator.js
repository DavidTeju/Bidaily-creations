function generateName() {
	$.getJSON("names.json", function (data) {
		const firstArray = data["first-name"];
		const lastArray = data["last-name"];

		const firstName =
			firstArray[Math.round(Math.random() * (firstArray.length - 1))];
		const lastName =
			lastArray[Math.round(Math.random() * (lastArray.length - 1))];

		document.getElementById("name-box").innerHTML = firstName + " " + lastName;
	});
}
