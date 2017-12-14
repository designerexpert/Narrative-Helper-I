import axios from 'axios'; // For handling Promise Based Requests.

export const GET_DATA = 'GET_DATA';
export const ADD_DATA = 'ADD_DATA';
export const DEL_DATA = 'DEL_DATA';

export const getData = () => {
    const getRos = axios.get('http://localhost:5000/ros');
    console.log(axios.get('http://localhost:5000/ros'))
    console.log(getRos);
    return {
        type: GET_DATA,
        payload: getRos
    };
}