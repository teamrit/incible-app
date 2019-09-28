import {USER} from "../constants";
import {setUserToken} from "../actions/users.action";
import {ServerError} from "../../util/interfaces";

export interface UserReducerInterface {
  userProfile: object,
  authToken: string,
  isLoggedIn: boolean,
  users: [],
  user: object,
  error: ServerError
}

const initialState  = {
    userProfile: {},
    authToken: "",
    isLoggedIn: false,
    users: [],
    user: {},
    error: {}
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        // Authorization Cases
        case USER.SIGN_IN.SUCCESS:
            const response = action.payload;
            setUserToken(response.token);
            return Object.assign({}, state, {
                authToken: response.token,
                user: response.user,
                isLoggedIn: true
            });
        case USER.SIGN_UP.SUCCESS:
            return Object.assign({}, state, {
                authToken: response.token,
                isLoggedIn: true
            });
      case USER.SIGN_UP.FAILURE:
        return Object.assign({}, state, {
          error: action.payload
        });
        case USER.GET_MY_PROFILE.SUCCESS:
            return Object.assign({}, state, {
                userProfile: action.payload
            });
        case USER.GET_MY_PROFILE.FAILURE:
            return Object.assign({}, state, {
                error: action.payload
            });
        case USER.SIGN_IN.FAILURE:
            return Object.assign({}, state, {
                error: action.payload
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
        case USER.EDIT_FIELD.SUCCESS: {
            const {key,value} = action.payload;
            return Object.assign({}, state, {
                userProfile: {...state.userProfile, [key]:value}
            });
        }
        // User as a data
        case USER.GET_LIST.SUCCESS:
            return Object.assign({}, state, {
                users: action.payload
            });

        default:
            return state
    }
}

export default userReducer;
