const initialState = {
    hotels: [],
    hotel:[]
}

const hotel = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_HOTELS_PENDING':
            return {
                ...state
            }
        case 'GET_HOTELS_REJECTED':
            return {
                ...state
            }
        case 'GET_HOTELS_FULFILLED':
            return {
                ...state,
                hotels: action.payload.data.result
            }
        case 'GET_SEARCHHOTEL_PENDING':
            return {
                ...state
            }
        case 'GET_SEARCHHOTEL_REJECTED':
            return {
                ...state
            }
        case 'GET_SEARCHHOTEL_FULFILLED':
            // console.log(action.payload)
            return {
                hotels: action.payload.data.result
            }
        case 'GET_HOTEL_DETAIL_PENDING':
            return {
                ...state
            }
        case 'GET_HOTEL_DETAIL_REJECTED':
            return {
                ...state
            }
        case 'GET_HOTEL_DETAIL_FULFILLED':
            // console.log("here",action.payload.data)
            return {
                ...state,
                hotel: action.payload.data.result
            }
        default:
            return state;
    }

}

export default hotel;