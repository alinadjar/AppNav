
import { AsyncStorage } from 'react-native';

export const FIREBASEURL = `https://nba-app-b961b.firebaseio.com`;
export const APIKEY = `AIzaSyDjnjWsOjtSobEWkTJXUjH4o6VkqOFT7TA`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]



export const getTokens = (cb) => {

    AsyncStorage.multiGet([
        '@nba_app@token',
        '@nba_app@refreshToken',
        '@nba_app@expireToken',
        '@nba_app@uid'
    ]).then( value => {
        
        cb(value);
    });

}

export const setTokens = (values,cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (60 * 2); // 2 minutes
    //dateNow.getTime() + (3600 * 1000); // The number of seconds in which the ID token expires
 
    AsyncStorage.multiSet([
        ['@nba_app@token',values.token],
        ['@nba_app@refreshToken',values.refToken],
        ['@nba_app@expireToken',expiration.toString()],
        ['@nba_app@uid',values.uid]
    ]).then( response => {
        cb();
    });
}


export const convertFirebase = (data) => {
    const newData = [];

    for(let key in data){
        newData.push({
            ...data[key],
            id: key
        })
    }
    return newData;
}

export const findTeamData = (itemId, teams) => {
    const value = teams.find((team)=>{
        return team.id === itemId
    })
    return value;
}

