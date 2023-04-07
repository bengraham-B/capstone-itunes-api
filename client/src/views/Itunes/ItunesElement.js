import React from 'react'

/*
 * The user will be able to click the favourite butto,n which will then added their 
 * selected element to localStorage, in which it will be displayed in the Fav.view.js file
 */

export default function ItunesElement(props) {
	const handleFav = (props) => {

		/**
		 *^ The first if-statement will check if the file in local storage exists
		 *^ 	if it does  it will move on to the else statement.
		 *^ If the file in local storage does not exist it will it will then create it
		 *^ 	and move on to the second if statement which will check if the file in
		 *^ 	local stoage exists, and since it does it will execute the code, which will
		 *^ 	then added the selected element to favourites.
		 *^ This if statement block will allow for the create of the file in local storage 
		 *^ 	and for a element to be added straight away, without the user having to 
		 *^		click the favourite button twice.
		 */
		 
		//^ First if-statement
		if(sessionStorage.getItem("favs") === null){
			console.log("First IF")
			
			sessionStorage.setItem("favs", JSON.stringify([]))
			
			//^ Second if-statement
			if(sessionStorage.getItem("favs") !== null){
				console.log("Second IF")

				const sessionStorageArray = JSON.parse(sessionStorage.getItem('favs'))
				console.log("sessionStorageArray:", sessionStorageArray)
	
				sessionStorageArray.push({
					title: props.trackCensoredName,
					kind: props.kind,
					country: props.country,
					genre: props.primaryGenreName,
					price: props.trackPrice,
					url: props.trackViewUrl
				})
				sessionStorage.setItem('favs', JSON.stringify(sessionStorageArray))
			}
		}

		else {

			if(sessionStorage.getItem("favs") !== null){
				const sessionStorageArray = JSON.parse(sessionStorage.getItem('favs'))

				sessionStorageArray.push({
					title: props.trackCensoredName,
					kind: props.kind,
					country: props.country,
					genre: props.primaryGenreName,
					price: props.trackPrice,
					url: props.trackViewUrl
				})
	
				sessionStorage.setItem('favs', JSON.stringify(sessionStorageArray))
			}
		}






	}
  return (
    <div id="INTUNES_ELEMENT">

		<div className="element">

			<div className="text-container">
				<p>
					<h2>{props.trackCensoredName}</h2>
				</p>
				<p>{props.artistName}</p>
				<p>Type: {props.kind}</p>
				<p>Country: {props.country}</p>
				<p>Genre: {props.primaryGenreName}</p>
				<p>Price: ${props.trackPrice}</p>
				<p>
					<a href={props.trackViewUrl}>{props.trackViewUrl}</a>
				</p>
			</div>

			<div className="button-container">
				<button onClick={() => handleFav(props)}>Favourite</button>
			</div>
		</div>

    </div>
  )
}
