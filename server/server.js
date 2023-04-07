const express = require('express')
const helmet = require('helmet')

const app = express()
app.use(express.json())
//^ Calling the helemet function.
app.use(helmet())


const PORT = 5001

let globalSearchTerm
let globalSearchType

//^ This POST request takes the search term and search type and stores it in the globalSearchType and globalSearchTerm variables
//^ 	which will then be used in the iTunes url.
app.post("/post", (req, res) =>{
	globalSearchType = req.body.searchTerm
	globalSearchTerm = req.body.searchType

	console.log("global Term", globalSearchTerm)
	console.log("global Type", globalSearchType)

   	return res.send(
		{
			term: globalSearchTerm,
			type: globalSearchType
		}
	)
})

//& Making API request to itunes
app.get("/itunes", (req, res) =>{
	const url = `https://itunes.apple.com/search?term=${globalSearchTerm}&media=${globalSearchTerm}`
   	fetch(url, {cache: 'no-cache'})
   	.then(response => response.json())
   	.then(data => {
		//^ Sending the array of results back to the frontend based on the term and type the use requested.
		return res.json({data: data})
   })
   .catch(error => console.error(error));


})

app.listen(PORT, () => {console.log(`Running on PORT: ${PORT}`)})