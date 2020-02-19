import axios from 'axios'

const URL_GET_PRODUCTOS = `http://${location.host}/productos/lista`;


export const initializeProducts = () => {
    return async (dispatch) => {
        // Hacemos un fetch a los datos que provengan de axios
        let {data, status} = await axios.get(URL_GET_PRODUCTOS);
        status == 200 && dispatch({type: "INITIALIZE", data});
    }
}


export const addSelected = (id) => {
    return {
        type: "ADD_SELECTED",
        data: id
    }
}

export const removeSelected = (id) => {
    return {
        type: "REMOVE_SELECTED",
        data: id
    }
}