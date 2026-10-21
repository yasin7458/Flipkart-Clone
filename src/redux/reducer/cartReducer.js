
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY
} from "../actions/cartActions";

function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART: {
            let existingProduct = state.find(
                (product) => String(product.id) === String(action.payload.id)
            );

            if (existingProduct) {
                return state.map((product) => {
                    if (String(product.id) === String(action.payload.id)) {
                        return {
                            id: product.id,
                            name: product.name,
                            category: product.category,
                            price: product.price,
                            originalPrice: product.originalPrice,
                            rating: product.rating,
                            reviews: product.reviews,
                            image: product.image,
                            quantity: product.quantity + 1
                        };
                    }

                    return product;
                });
            }

            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    category: action.payload.category,
                    price: action.payload.price,
                    originalPrice: action.payload.originalPrice,
                    rating: action.payload.rating,
                    reviews: action.payload.reviews,
                    image: action.payload.image,
                    quantity: 1
                }
            ];
        }

        case REMOVE_FROM_CART:
            return state.filter(
                (product) => String(product.id) !== String(action.payload)
            );

        case UPDATE_CART_QUANTITY:
            return state.map((product) => {
                if (String(product.id) === String(action.payload.id)) {
                    return {
                        id: product.id,
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        rating: product.rating,
                        reviews: product.reviews,
                        image: product.image,
                        quantity: action.payload.quantity
                    };
                }

                return product;
            });

        default:
            return state;
    }
}

export default cartReducer;
