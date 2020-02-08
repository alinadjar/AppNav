import axios from 'axios';

import { SIGN_IN, SIGN_UP, AUTO_SIGN_IN } from '../types';
import { SIGNIN, SIGNUP, FIREBASEURL, REFRESH } from '../../utils/misc';



export function signUp(data) {

    console.log('Before sending Ajax call');

    const request = axios({
        method: 'POST',
        url: SIGNUP,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        header: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        console.log(response);
        return response.data
    }).catch(e => {
        return false
    });

    console.log(request);

    return {
        type: SIGN_UP,
        payload: request
        // payload: {
        //     email: 'ali@gmail.com',
        //     token: '123'
        // }
    }
}


export function signIn(data) {

    const request = axios({
        method: 'POST',
        url: SIGNIN,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        header: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        console.log(response);
        return response.data
    }).catch(e => {
        return false
    });


    console.log(request);

    return {
        type: SIGN_IN,
        payload: request
    }
}



export const autoSignIn = (refToken) => {

    const request = axios({
        method: "POST",
        url: REFRESH,
        data: "grant_type=refresh_token&refresh_token=" + refToken,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(response => {

        console.log('BBBBBBBBBB');
        console.log(request);
        return response.data
    }).catch(e => {
        return false
    });

    console.log('KKKKKKK');
    console.log(request);

    return {
        type: AUTO_SIGN_IN,
        payload: request
    }
}


