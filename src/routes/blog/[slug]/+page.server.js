
/** @type {import('./$types').PageServerLoad} */
export async function load({query = 'Asunción'}) {
  const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4d93c138f0msh28a9fa52de81912p1397e2jsn70ba6d1fd186',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		FETCH_OPTIONS
	);
	const data = await response.json();
  
	const { location, current } = data;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
	const { code, text } = condition;
  
	return {
		country,
		localtime,
		humidity,
		locationName: name,
		feelslike: feelslike_c,
		isDay: is_day,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDir: wind_dir,
		conditionCode: code,
		conditionText: text
	};
};
