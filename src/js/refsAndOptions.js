export const refs = 
	{
	flightList: document.getElementById('flight-list'),
	inpFrom:  document.getElementById('from'),
	selFrom:  document.getElementById('from-select'),
	inpTo:  document.getElementById('to'),
	selTo:  document.getElementById('to-select'),
	btnSearch: document.getElementById('search'),
	form: document.getElementById('js-form')
}


export const options = {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "adb3faaf6fmshd013b9156cce1e2p13bfa5jsn787da1a58e9b"
	}
}