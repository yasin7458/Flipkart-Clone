
import { LOGIN_SUCCESS, LOGOUT } from "../actions/authActions";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated: localStorage.getItem("user") !== null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                user: action.payload,
                isAuthenticated: true
            };

        case LOGOUT:
            return {
                user: null,
                isAuthenticated: false
            };

        default:
            return state;
    }
}

export default authReducer;
