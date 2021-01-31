const initialState = {
  country: [],
  weather:[]
}

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_COUNTRY":
      return {...state, country: action.data}
      break;
    case "GET_WEATHER":
      return { ...state, weather: action.data }
      break;
    default:
      return state
      break;
  }
}

export default Reducer;