import axios from 'axios';

const URL_GET_PRODUCTOS = `http://${window.location.host}/productos/lista`;


export const initializeProducts = () => async (dispatch) => {
  // Hacemos un fetch a los datos que provengan de axios
  const { data, status } = await axios.get(URL_GET_PRODUCTOS);
  if (status === 200) dispatch({ type: 'INITIALIZE', data });
};


export const addSelected = (id) => ({
  type: 'ADD_SELECTED',
  data: id,
});

export const removeSelected = (id) => ({
  type: 'REMOVE_SELECTED',
  data: id,
});
