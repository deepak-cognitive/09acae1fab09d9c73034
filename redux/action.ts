import axios from 'axios';
import { Dispatch } from 'redux';

const showCountryDetails = (country: string) => (dispatch: Dispatch) => {
  axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((res: any) => {
      console.log("action", res);
      dispatch({
        type: "GET_COUNTRY",
        data: res.data[0]
      })
  })
}

export default showCountryDetails;

export const showCapitalWeather = (capital: string) => (dispatch: Dispatch) => {
  const ApiKey = '5ec520a602ee50ef315ca50af33681da';
  axios.get(`http://api.weatherstack.com/current?access_key=${ApiKey}&query=${capital}`)
    .then((res: any) => {
      console.log("weather", res);
      dispatch({
        type: 'GET_WEATHER',
        data: res.data.current
    })
  })
}