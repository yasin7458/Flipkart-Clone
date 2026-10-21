
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const addToWishlist = (product) => ({
    type: ADD_TO_WISHLIST,
    payload: product
});

export const removeFromWishlist = (id) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: id
});
