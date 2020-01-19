const initialState = {
  techs: null,
  error: null,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_TECHS":
      return {
        ...state,
        techs: action.payload,
        loading: false
      }
    case "ADD_TECH":
      return {
        ...state,
        techs: [...state.techs, action.payload]
      }
    case "DELETE_TECH":
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload)
      }
    case "TECH_ERROR":
      return {
        ...state,
        error: action.payload
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}