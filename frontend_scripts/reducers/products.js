const initialState = {
    products: [],
    selected: []
    // isLoading: true
}

const productApp = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SELECTED":
            return {
                ...state, selected: [...state.selected, action.data] 
            }
        case "REMOVE_SELECTED":
            return {
                ...state, selected: state.selected.filter(productId => productId !== action.data)
            }

        case "INITIALIZE":
            return { ...state, products: action.data };
        default:
            return state
    }
}

export default productApp