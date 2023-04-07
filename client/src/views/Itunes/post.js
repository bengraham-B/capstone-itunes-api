/* 
	^ Function which will be used to pass data from the frontend to the backend and is called in
	^ the handleSearch() function which will be run when the user clicks the search button.
*/ 	
export function POSTData (url,data) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())

}

