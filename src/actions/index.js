import axios from 'axios'; // For handling Promise Based Requests.

export const GET_DATA = 'GET_DATA';
export const ADD_DATA = 'ADD_DATA';
export const DEL_DATA = 'DEL_DATA';
export const GET_NARRATIVE = 'GET_NARRATIVE';

export const getRos = () => {
    const ros = axios.get('http://192.168.86.27:5000/ros');
    return {
        type: GET_DATA,
        payload: ros
    };
}

export const getNarrative = () => {
    const narrative = axios.get('http://192.168.86.27:5000/narrativeData');
    return {
        type: GET_NARRATIVE,
        payload: narrative
    };
}