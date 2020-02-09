
import { GET_NEWS } from '../types';

import Axios from 'axios';
import { FIREBASEURL } from '../../utils/misc';


export function getNews() {

    const request = Axios.request({
        method: 'GET',
        url: `${FIREBASEURL}/news.json`
    }).then(response => {

        console.log(response.data);

        let articles = [];

        for (let key in response.data) {

            articles.push({
                ...response.data[key],
                id: key
            });

            return articles;
        }
    }).catch(e => {
        return false
    });

    return {
        type: GET_NEWS,
        payload: request
    }
}