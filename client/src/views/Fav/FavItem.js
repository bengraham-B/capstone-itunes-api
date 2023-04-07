import React from "react";
import {useDispatch} from 'react-redux'
import { refreshReducer } from '../../store/refresh'

export default function FavItem(props) {
	const dispatch = useDispatch()

    const handleDelete =() => {
		//^ Every time this funtion is run, the refreshCount in Redux will increment by one, so in the useEffect()'s
		//^ 	dependancy array in Fav.view.js, it will rerender the compnent whith the item the user deleted removed,
		//^ 	which will allow the user to get delete intems in real time.
        dispatch(refreshReducer())
        const sessionStorageArray = JSON.parse(sessionStorage.getItem('favs'))
        sessionStorageArray.splice(props.id, 1) //^ Using the splice method to remove the item from the user's favourite array.
		//^ setting the new array bakc to sessionStroage without the item the user has just deleted
        sessionStorage.setItem('favs', JSON.stringify(sessionStorageArray))
    }
  return (
    <div id="FAV_ELEMENT">
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
          <button onClick={() => handleDelete(props)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
