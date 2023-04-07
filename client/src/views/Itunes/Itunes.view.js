import React, {useState} from 'react'


//^  Importing ItunesElement Component which will be used to 
//^  display the search data, as it will be passed down 
// ^ as props.
import ItunesElement from './ItunesElement'

//^ The POSTData() function is being imported from a post.js. It is placed in that folder for testing purposes.
const {POSTData} = require('./post')

export default function Itunes() {
	const [searchTermChange, setSearchTermChange] = useState()
	const [radioBtn, setRadioButton] = useState()
	const [dsiplaySearchResults, setDisplaySearchResults] = useState([])

	


	const handleSearch = () => {
		//^ Using an onChange to get the value from id="search-input" 
		POSTData('/post', {searchTerm: searchTermChange, searchType: radioBtn})
		
		//^ Makes request to backend to recieve the data from the API call.
		fetch('/itunes')
			.then(response => response.json())
			.then((data) => {
				setDisplaySearchResults(
					//^ There is only one element in the array which is being returned from the backend.
					data.data.results.map((item) =>{
						return(
							<div key={item.id}>
								<ItunesElement 
									trackName={item.id}
									trackCensoredName={item.trackCensoredName}
									artistName={item.artistName}
									kind={item.kind}
									country={item.country}
									trackPrice={item.trackPrice}
									primaryGenreName={item.primaryGenreName}
									trackViewUrl={item.trackViewUrl}
								/>
							</div>
						)
					})

				)
			}
		)
	}
	return (
		<div id="ITUNES_VIEW">
			<div className="search-container">
				<input id="search-input" type="text" onChange={(e) => setSearchTermChange(e.target.value)}/>
				<button onClick={handleSearch}>Search</button>
			</div>
			{/* 
				(1) The Radio buttons will give the user the option of which media type they want to search for 
				(2)	The 'property', in the radio buttons allow the user to change the type of media they 
					are searching for without having to refresh the page.
				(3) The onChange() will be used to take the 'value' from the radio button and will pass it into state 'setRadioButton()', 
					this state will be used to send the user choose of media to the backend.
			 */}

			<div className="radio-button-container">
				{/* ((1)https://www.pluralsight.com) */}
				<div className="radio-btn-wrapper">
					<input type="radio"  value="all" name="radio" id="radio-movie"  onChange={(e) => setRadioButton(e.target.value)}/>
					<label htmlFor="radio-movie">All</label>
				</div>
				
				<div className="radio-btn-wrapper">
					<input type="radio" value="ebook"name="radio"  id="radio-audio-book" onChange={(e) => setRadioButton(e.target.value)}/>
					<label htmlFor="radio-audio-book">eBook</label>
				</div>

				<div className="radio-btn-wrapper">
					<input type="radio" value="podcast" name="radio" id="radio-song" onChange={(e) => setRadioButton(e.target.value)}/>
					<label htmlFor="radio-song">Podcast</label>
				</div>

				<div className="radio-btn-wrapper">
					<input type="radio" value="software" name="radio" id="radio-tv-episiode" onChange={(e) => setRadioButton(e.target.value)}/>
					<label htmlFor="radio-episiode">Software</label>
				</div>

				<div className="radio-btn-wrapper">
					<input type="radio" value="movie" name="radio" id="radio-movies" onChange={(e) => setRadioButton(e.target.value)}/>
					<label htmlFor="radio-movies">Movies</label>
				</div>

				

			</div>
			
			<div className="display-search-results-container">
				{dsiplaySearchResults}
			</div>
		</div>
	)
}

/*
 * Resources Used 
 * (1) https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs : Information regarding using radio buttons in React
*/

// export default {POSTData}