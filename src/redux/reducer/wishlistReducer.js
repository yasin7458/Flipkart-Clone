
import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
} from "../actions/wishlistActions";

function wishlistReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_WISHLIST: {
            let existingProduct = state.find(
                (product) => String(product.id) === String(action.payload.id)
            );

            if (existingProduct) {
                return state;
            }

            return [...state, action.payload];
        }

        case REMOVE_FROM_WISHLIST:
            return state.filter(
                (product) => String(product.id) !== String(action.payload)
            );

        default:
            return state;
    }
}

export default wishlistReducer;
