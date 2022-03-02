import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from "../application";

export const userActions = {
    login,
    logout,
    register,
   
};

function login(username, password, role) {
    
    return dispatch => {
        dispatch(request({ username }));

        userService.login(...arguments)
            .then(
                user => { 
                    dispatch(success(user));
                    if(role==='STUDENT')
                    window.location.replace ( '/studentdashboard/update_profile')
                    else if(role==='HR')
                    window.location.replace ( '/hrdashboard')
                    else if(role==='ADMIN')
                    window.location.replace ( '/hadmindashboard')
                    else if(role==='COORDINATOR')
                    window.location.replace ( '/hcoordinatordashboard')
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}



    
function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }

}