import {USER} from "../constants";
import {setUserToken} from "../actions/users.action";

const initialState = {
    userProfile: {},
    authToken: "",
    isLoggedIn: false
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER.SIGN_IN.SUCCESS:
            const response = action.payload;
            setUserToken(response.token);
            return Object.assign({}, state, {
                authToken: response.token,
                isLoggedIn: true
            });
        case USER.SIGN_IN.FAILURE:
            return Object.assign({}, state, {
                error: {error: action.payload, occurredOn: new Date()}
            });
        case USER.SIGN_OUT.SUCCESS:
            return Object.assign({}, initialState, {});
        case USER.SET.TOKEN: {
            const token = action.payload;
            return Object.assign({}, state, {
                authToken: token,
                isLoggedIn: true
            });
        }
        default:
            return state
    }
}

export default userReducer;