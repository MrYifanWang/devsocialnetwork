import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

//register user
export const registerUser = (userData, history) => dispatch => {
	axios
		.post('api/users/register', userData)
		.then(res => history.push('/login'))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

//login user
export const loginUser = userData => dispatch => {
	axios
		.post('api/users/login', userData)
		.then(res => {
			//save to local storage
			const { token } = res.data;
			//set token local storage
			localStorage.setItem('jwtToken', token);
			//set token auth header
			setAuthToken(token);
			//decode user data
			const decode = jwt_decode(token);
			//set current user
			dispatch(setCurrentUser(decode));
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

//set login user
export const setCurrentUser = decode => {
	return {
		type: SET_CURRENT_USER,
		payload: decode
	};
};

//logout
export const logoutUser = userData => dispatch => {
	//remove token in loacl storage
	localStorage.removeItem('jwtToken');
	//remove auth header
	setAuthToken(false);
	//set current user to {}
	dispatch(setCurrentUser({}));
};
