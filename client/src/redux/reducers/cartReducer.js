import * as actionType from '../constants/cartConstant';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:

            const item = action.payload;

            const exist = state.cartItems.find(products => products.id === item.id);

            if(exist) return;
            return { ...state, cartItems: [...state.cartItems, item] };
        default:
            return state;
    }
};