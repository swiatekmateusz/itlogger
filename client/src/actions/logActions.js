export const getLogs = () => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/logs')
    console.log(res);
    const data = await res.json()
    console.log(data);
    dispatch({
      type: "GET_LOGS",
      payload: data
    })

  } catch (error) {
    console.log(error);
    dispatch({
      type: "LOGS_ERROR",
      payload: error
    })
  }
}

export const searchLogs = q => async dispatch => {
  try {
    setLoading()
    const res = await fetch(`/logs?q=${q}`)
    const data = await res.json()
    dispatch({
      type: "SEARCH_LOGS",
      payload: data
    })

  } catch (error) {
    dispatch({
      type: "LOGS_ERROR",
      payload: error
    })
  }
}


export const addLog = log => async dispatch => {
  try {
    const res = await fetch('/logs', { method: "POST", body: JSON.stringify(log), headers: { 'Content-Type': 'application/json' } })
    const data = await res.json()
    dispatch({
      type: "ADD_LOG",
      payload: data
    })
  } catch (error) {
    dispatch({
      type: "LOGS_ERROR",
      payload: error
    })
  }
}

export const setCurrent = log => {
  return {
    type: "SET_CURRENT",
    payload: log
  }
}

export const clearCurrent = () => {
  return {
    type: "CLEAR_CURRENT"
  }
}

export const updateLog = log => async dispatch => {
  try {
    await fetch(`/logs/${log.id}`, { method: "PUT", body: JSON.stringify(log), headers: { 'Content-Type': 'application/json' } })
    dispatch({
      type: "UPDATE_LOG",
      payload: log
    })
  } catch (error) {
    dispatch({
      type: "LOGS_ERROR",
      payload: error
    })
  }
}

export const deleteLog = id => async dispatch => {
  try {
    await fetch(`/logs/${id}`, { method: "DELETE" })
    dispatch({
      type: "DELETE_LOG",
      payload: id
    })
  } catch (error) {
    dispatch({
      type: "LOGS_ERROR",
      payload: error
    })
  }
}

export const setLoading = () => {
  return {
    type: "SET_LOADING"
  }
}