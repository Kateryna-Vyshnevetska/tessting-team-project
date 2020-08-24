export const refs = 
	{
	flightList: document.getElementById('flight-list'),
	inpFrom:  document.getElementById('from'),
	selFrom:  document.getElementById('from-select'),
	inpTo:  document.getElementById('to'),
	selTo:  document.getElementById('to-select'),
	btnSearch: document.getElementById('search'),
	form: document.getElementById('js-form'),
	hotelsProp: document.getElementById('hotel-properties'),
	hotelInfo: document.getElementById('hoter-info')
}


export const options = {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "815dc2b79dmsh220887b3577e2bep18fa2djsnac468a3b02b9"
	}
}