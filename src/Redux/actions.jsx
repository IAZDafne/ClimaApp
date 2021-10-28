import axios from "axios";
export const GET_CITY = 'GET_CITY';
export const REMOVE = 'REMOVE';
export const GET_MEDELLIN ='GET_MEDELLIN'


const api = 'https://api.openweathermap.org/data/2.5';
const Key = '5b5c1615acb882ca6ca8f35b71fb9d15';

//

export const getCity = (city) => {
    return async(dispatch) => {
        const res = await axios.get(`${api}/weather?q=${city}&appid=${Key}`);
        dispatch({
            type: GET_CITY,
            payload: res.data
        })
    }
}
export const getMedellin=(city)=>{
    return async(dispatch) => {
        const res = await axios.get(`${api}/weather?q=${city}&appid=${Key}`);
        dispatch({
            type: GET_MEDELLIN,
            payload: res.data
        })
    }
}

export const remove = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE,
            payload: id
        })
    }
}


