// fetch is used for making HTTP requests to fetch resources
//		(JSON style data, images, files, etc)
// 		Simplifies asynchronous data fetching in JS and is used
//		to interact with APIs to retrieve and send data asynchronously
//		fetch(url, {options})

//Example, to get the data for pikachu from pokeapi:
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
	.then(response => {
		
		if(!response.ok){
			throw new Error("Could not fetch this resource");
		}
		return response.json();
		
		
	})
	.then(data => console.log(data.name))
	.catch(error => console.error(error));
*/
/*
Some operations act as 'promises' that they will provide a value.
This is why fetch and the .json() functions are paired with await.

*/

async function fetchData() {
	try{
		const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
	
		if(!response.ok){
			throw new Error("Could not find this pokemon");
		}

		const data = await response.json();
		const pokeSprite = data.sprites.front_default;
		const imgElement = document.getElementById("pokeSprite");

		imgElement.src = pokeSprite;
		imgElement.style.display = "block";
	
	}
	catch(error){
		console.error(error);
	}
}