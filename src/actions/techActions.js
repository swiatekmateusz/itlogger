export const getTechs = () => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/techs')
    const data = await res.json()
    dispatch({
      type: "GET_TECHS",
      payload: data
    })
  } catch (error) {
    dispatch({
      type: "TECHS_ERROR",
      payload: error
    })
  }
}

export const deleteTech = id => async dispatch => {
  try {
    await fetch(`/techs/${id}`, { method: "DELETE" })
    dispatch({
      type: "DELETE_TECH",
      payload: id
    })
  } catch (error) {
    dispatch({
      type: "TECHS_ERROR",
      payload: error
    })
  }
}

export const addTech = tech => async dispatch => {
  try {
    const res = await fetch('/techs', { method: "POST", body: JSON.stringify(tech), headers: { 'Content-Type': 'application/json' } })
    const data = await res.json()
    dispatch({
      type: "ADD_TECH",
      payload: data
    })
  } catch (error) {
    dispatch({
      type: "TECHS_ERROR",
      payload: error
    })
  }
}

const setLoading = () => {
  return {
    type: "SET_LOADING"
  }
}