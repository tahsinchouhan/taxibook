import { GET_BOOK_HOTEL,
    GET_BOOK_HOTEL_SUCCESS,
    GET_BOOK_HOTEL_ERROR
} from '../actions';

export const getBookHotel =(values)=>{
   return{ type:GET_BOOK_HOTEL,
    payload:values
}
};

export const getBookHotelSuccess =(values)=>{
    return{
    type:GET_BOOK_HOTEL_SUCCESS,
    payload:values
}
};
export const getBookHotelError =(values)=>({
    type:GET_BOOK_HOTEL_ERROR,
    payload:values
})