import axios from 'axios';

export const getAllHotell = (data) => {
    const name = data.name || ''
    const city = data.city || ''
    return {
        type: 'GET_HOTELS',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.34:8282/v1/hotel?name=${name}&city=${city}`
        })
    }
}

export const hotelDetail = (id) => {
    return {
        type: 'GET_HOTEL_DETAIL',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.34:8282/v1/hotel/${id}`,
        })
    }
}