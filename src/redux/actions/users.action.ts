import axios from "axios";
import {USER, INCIDENT, HTTP_METHOD} from "../constants";
import {resolveHost, stringifyRequest} from "../../util/helper.functions";
import {deleteAuthorized, getAuthorized, postAuthorized, putAuthorized} from "../request.handler";

/**
 *
 * @param dispatch
 * @param getState: f()
 * @param requestData: f()
 * @param method: String - One of GET, POST, PUT, DELETE
 * @param url: String  - Unresolved pathname
 * @param authorised: Boolean - Whether to use token or not
 * @param successAction: String - Function to dispatch if and when the request is successful
 * @param failureAction: String - Function to dispatch if and when the request is unsuccessful
 * @returns {Function}
 */
export function useBoilerplateRequestAuthorised(dispatch,getState,requestData,method,url,successAction,failureAction,token) {
    let request;
    request = method === HTTP_METHOD.GET ? getAuthorized(resolveHost(url), token)
        :     method === HTTP_METHOD.POST ? postAuthorized(resolveHost(url), token, requestData)
            :     method === HTTP_METHOD.PUT ? putAuthorized(resolveHost(url), token, requestData)
                :     method === HTTP_METHOD.DELETE ? deleteAuthorized(resolveHost(url), token, requestData)
                    :     null;
    request && request.then(({ data }) => {
        dispatch({ type: successAction, payload: data });
    }).catch(e => {
        if (e.response) {
            const {status} = e.response;
            if (status === 401) {
                logout()(dispatch,getState);
            }
        }
        dispatch({ type: failureAction, payload: e });
    });
}

/**
 *
 * @param dispatch
 * @param getState
 * @param requestData
 * @param method - One of GET, POST, PUT, DELETE
 * @param url - Unresolved pathname
 * @param successAction
 * @param failureAction
 * @returns {Function}
 */
export function useBoilerplateRequest(dispatch,getState,requestData,method,url,successAction,failureAction) {
    let request;
    request = method === HTTP_METHOD.GET ? axios.get(resolveHost(url))
        :     method === HTTP_METHOD.POST ? axios.post(resolveHost(url), requestData)
        :     method === HTTP_METHOD.PUT ? axios.put(resolveHost(url), requestData)
        :     method === HTTP_METHOD.DELETE ? axios.delete(resolveHost(url), requestData)
        :     null;
    request && request.then(({ data }) => {
        dispatch({ type: successAction, payload: data });
    }).catch(e => {
        dispatch({ type: failureAction, payload: e });
    });
}

export function getUserProfile() {
    return (dispatch, getState) => {
        if (loadUserTokenFromStorage()) {
            const token = getToken();
            useBoilerplateRequestAuthorised(
                dispatch,
                getState,
                {},
                HTTP_METHOD.GET,
                '/user/me',
                USER.GET_MY_PROFILE.SUCCESS,
                USER.GET_MY_PROFILE.FAILURE,
                token
            )
        }
    }
}

export function changeUserField({key,value}) {
    return (dispatch, getState) => {
        dispatch({ type: USER.EDIT_FIELD.SUCCESS, payload: {key,value} });
    };
}

export function signUpUser(user) {
    return (dispatch, getState) => {
        const request = axios.post(resolveHost("/user/register"), user);
        request.then(({ data }) => {
            dispatch({ type: USER.SIGN_UP.SUCCESS, payload: data });
        }).catch(e => {
            dispatch({ type: USER.SIGN_UP.FAILURE, payload: e });
        });
    };
}

export function logout() {
    return (dispatch, getState) => {
        resetUserToken();
        dispatch({type: USER.SIGN_OUT.SUCCESS, payload: {}});
        dispatch({type: INCIDENT.RESET.SUCCESS, payload: {}});
    };
}

export function signIn(credentials) {
    return (dispatch, getState) => {
        resetUserToken();
        getUserProfile();
        const request = axios.post(resolveHost("/login"), credentials);
        request.then(r => {
            dispatch({type: USER.SIGN_IN.SUCCESS, payload: r.data});
        }).catch(e => {
            dispatch({type: USER.SIGN_IN.FAILURE, payload: e.response.data});
        })
    };
}

export function resetUserToken() {
    sessionStorage.removeItem("jwtToken");
}

export function setUserToken(token) {
    sessionStorage.setItem("jwtToken",token);
}

export function loadUserTokenFromStorage() {
    return (dispatch, getState) => {
        let token = sessionStorage.getItem("jwtToken");
        if(!token || token === "") {
            // Return if no token
            dispatch({type: USER.LOGGED_OUT.SUCCESS, payload: token });
            return;
        }
        dispatch({type: USER.SET.TOKEN, payload: token });
        return true;
    };
}

export const getToken = () => {
  return sessionStorage.getItem("jwtToken");
};

export function getIncidents() {
    return (dispatch, getState) => {
        if (loadUserTokenFromStorage()) {
            const state = getState();
            const request = getAuthorized(resolveHost(`/incident?${stringifyRequest(state.incident.filter)}`), getToken());
            request.then(({ data }) => {
                dispatch({ type: INCIDENT.GET.SUCCESS, payload: data });
            }).catch(error => {
                dispatch({ type: INCIDENT.GET.FAILURE, payload: error });
            });
        }
    };
}

export function getUsers() {
    return (dispatch, getState) => {
        if (loadUserTokenFromStorage()) {
            const request = getAuthorized(resolveHost("/user"), getToken());
            request.then(({ data }) => {
                dispatch({ type: USER.GET_LIST.SUCCESS, payload: data });
            }).catch(error => {
                dispatch({ type: USER.GET_LIST.FAILURE, payload: error });
            });
        }
    };
}

export function editUser(newData) {
    return (dispatch, getState) => {
        if (loadUserTokenFromStorage()) {
            const {_id} = newData;
            const request = putAuthorized(resolveHost(`/user/${_id}`), getToken(), newData);
            request.then(({ data }) => {
                dispatch({ type: USER.EDIT_PROFILE.SUCCESS, payload: data });
            }).catch(error => {
                dispatch({ type: USER.EDIT_PROFILE.FAILURE, payload: error });
            });
        }
    };
}
