import {
  GET_BOOK_HOTEL,
  GET_BOOK_HOTEL_SUCCESS,
  GET_BOOK_HOTEL_ERROR,
  SET_BOOK_HOTEL,
  SET_BOOK_HOTEL_SUCCESS,
  SET_BOOK_HOTEL_ERROR,
  SET_INTEREST_PREHOME,
  SET_INTEREST_PREHOME_SUCCESS,
  SET_DESTINATION_PREHOME_SUCCESS,
} from "../actions";

const INIT_STATE = {
  data: [],
  getHotelList: [],
  getStartData: {},
  checkoutData: {},
  prehomeInterest: {},
  getPrehomeInterest: {},
  getPrehomeDestination: {},
  isLoading: true,
};

const hotelReducer = (state = INIT_STATE, action) => {
  console.log("data action",action)
  switch (action.type) {
    case GET_BOOK_HOTEL: {
      const actionData = action.payload;
      return {
        ...state,
        HotelBookingStartdate: action.payload,
        getStartData: action.payload,
        isLoading: true,
      };
    }
    case GET_BOOK_HOTEL_SUCCESS:
      return { ...state, getHotelList: action.payload, isLoading: false,data:action.payload.data };

      
    case GET_BOOK_HOTEL_ERROR:
      return { ...state, error: action.payload };

    case SET_BOOK_HOTEL: {
      const actionData = action.payload;
      console.log(actionData);
      return { ...state, Setdata: action.payload };
    }
    case SET_BOOK_HOTEL_SUCCESS:
      return { ...state, checkoutData: action.payload };
      
    case SET_BOOK_HOTEL_ERROR:
      return { ...state, error: action.payload };

    case SET_INTEREST_PREHOME:
      return { ...state, prehomeInterest: action.payload };

    case SET_INTEREST_PREHOME_SUCCESS:
      return { ...state, getPrehomeInterest: action.payload };
    case SET_DESTINATION_PREHOME_SUCCESS:
      return { ...state, getPrehomeDestination: action.payload };

    default:
      return { ...state };
  }
};
export default hotelReducer;
