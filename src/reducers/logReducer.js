
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_LOGS":
    case "GET_LOGS":
      return {
        ...state,
        logs: action.payload,
        loading: false
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      }
    case "LOGS_ERROR":
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      }
    case "ADD_LOG":
      return {
        ...state,
        logs: [...state.logs, action.payload]
      }
    case "SET_CURRENT":
      return {
        ...state,
        current: action.payload
      }
    case "CLEAR_CURRENT":
      return {
        ...state,
        current: null
      }
    case "UPDATE_LOG":
      return {
        ...state,
        logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
      }
    case "DELETE_LOG":
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
      }
    default:
      return state;
  }
}