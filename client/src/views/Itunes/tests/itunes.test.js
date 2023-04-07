//^ Doing a unit test on the POSTData function from Itunes.view.js
const { POSTData } = require('../post')

test('testing post equest in client', ()=> {
    expect(POSTData("http://localhost:3001/post", {searchTerm: "James", searchType: "song"}))
})

