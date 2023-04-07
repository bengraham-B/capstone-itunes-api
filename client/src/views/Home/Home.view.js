import React from 'react'
import { Link} from 'react-router-dom'

export default function Home() {
  return (
    <div id="Home_VIEW">
		<div className="container">

			<div className="text-container">
				<h1>
					This allows you to search on iTunes and Apple Books using their API.
				</h1>
			</div>
			<div className="buttons-container">
				{/* Links on the home page to 'Itunes.view.js and Fav.view.js */}
				<Link to="/itunes">
					<button>Search</button>
				</Link>
				<Link to="/favs">
					<button>Favourites</button>
				</Link>
			</div>
		</div>
    </div>
  )
}
