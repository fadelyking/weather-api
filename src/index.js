import "./styles.css";
import { loadDOM, displayCountryName, displayCountryTemp, displayCountryCondition } from "./dom";

loadDOM();

const searchResult = document.querySelector("input");
const searchBtn = document.querySelector("button");
let search = "London";

async function getWeatherAPI(location) {
	try {
		console.log(location);
		const response = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=77b8d312462b4c16ad3150224230110&q=${location}&aqi=no`,
			{
				mode: "cors",
			}
		);
		const result = await response.json();
		console.log(result);
		displayCountryName(result.location.country);
		displayCountryTemp(result.current.temp_c);
		displayCountryCondition(result.current.condition.text);
	} catch {
		throw console.error("No Network");
	}
}

searchBtn.addEventListener("click", () => {
	search = searchResult.value;
	getWeatherAPI(`${search}`);
});
