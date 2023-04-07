//Unit Test
test("check status of fetch reqeust", async () => {
	const data = await fetch("https://itunes.apple.com/search?term=james")
	expect(data.status).toBe(200)
})