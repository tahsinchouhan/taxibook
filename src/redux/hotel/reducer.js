import {
  GET_BOOK_HOTEL,
  GET_BOOK_HOTEL_SUCCESS,
  GET_BOOK_HOTEL_ERROR,
} from "../actions";

const INIT_STATE = {
  data: [],
  getHotelList: [],
  getStartData:{}
};

const hotelReducer = (state = INIT_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case GET_BOOK_HOTEL:{
      const actionData = action.payload;
      console.log(actionData)
      return { ...state, HotelBookingStartdate: action.payload ,getStartData:action.payload};
    }
    case GET_BOOK_HOTEL_SUCCESS:
      return { ...state, getHotelList: action.payload };
    case GET_BOOK_HOTEL_ERROR:
      return { ...state, error: action.payload };

    default:
        return { ...state}
  }
};
export default hotelReducer;
