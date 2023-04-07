import React, {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'

//^ This is the component in which the user's favourites will be dislayed.
import FavItem from './FavItem'

export default function Fav() {
	//^ Gets the state of refreshCount which will be used in teh useEffect()'s dependany array, 
	//^ 	so when it chages it will rerender the compoent.
	const Redux = useSelector((state) => state.refreshCount)

	//^ This React state variable store the user's favourites from sessionStorage and then display it to the screen.
	const [favs, setFavs] = useState(<p className="no-favs-yet">No Favourites Yet...</p>)

	useEffect(() =>{
		//^ making sure that 'favs' in session storage exists.
		if(sessionStorage.getItem('favs') !== null){
			const array = JSON.parse(sessionStorage.getItem('favs'))
			
			setFavs(array.map((item, i) => {
				return (
					<FavItem
						key={i}
						id={i}
						trackCensoredName={item.title}
						artistName={item.kind}
						kind={item.kind}
						country={item.country}
						trackPrice={item.price}
						primaryGenreName={item.genre}
						trackViewUrl={item.url}
					/>)
			}))

		}
	},[Redux])
	//^ The refreshCount state in the dependancy array from Redux.

  return (
	<div id="FAV_VIEW">
		<div className="fav-items-container">
			{/* Dislaying the state to the screen. */}
			{favs}
		</div>
	</div>
  )
}
