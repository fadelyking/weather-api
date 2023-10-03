function loadDOM() {
	const body = document.querySelector("body");
	const container = document.createElement("div");
	container.classList.toggle("container");
	const inputField = document.createElement("input");
	const submitButton = document.createElement("button");
	submitButton.textContent = "Search";
	const card = document.createElement("div");
	card.classList.toggle("card");
	const cardHeader = document.createElement("div");
	cardHeader.classList.toggle("card-header");
	const cardBody = document.createElement("div");
	cardBody.classList.toggle("card-body");
	const cardTemp = document.createElement("div");
	cardTemp.classList.toggle("card-temp");
	const cardCondition = document.createElement("div");
	cardCondition.classList.toggle("card-condition");

	body.appendChild(container);
	container.appendChild(inputField);
	container.appendChild(submitButton);
	body.appendChild(card);
	card.appendChild(cardHeader);
	card.appendChild(cardBody);
	cardBody.appendChild(cardTemp);
	cardBody.appendChild(cardCondition);
}

function displayCountryName(name) {
	const cardHeader = document.querySelector(".card-header");
	cardHeader.textContent = `Country: ${name}`;
}

function displayCountryTemp(temp) {
	const cardTemp = document.querySelector(".card-temp");
	cardTemp.textContent = `Temperature: ${temp}`;
}

function displayCountryCondition(condition) {
	const cardCondition = document.querySelector(".card-condition");
	cardCondition.textContent = `Condition: ${condition}`;
}
export { loadDOM, displayCountryName, displayCountryTemp, displayCountryCondition };
