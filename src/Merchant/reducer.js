import {
  MERCHANT_FETCH_START,
  MERCHANT_FETCH_SUCCESS,
  MERCHANT_FETCH_FAILED
} from './actions';

const initialState = {
  data: [],
  status: {
    busy: false,
    success: false,
    error: false,
  },
};

export default function merchantReducer(state = initialState, action) {
  switch (action.type) {
    case MERCHANT_FETCH_START: {
      return {
        ...state,
        status: {
          busy: true,
          success: false,
          error: false,
        },
      };
    }

    case MERCHANT_FETCH_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        status: {
          busy: false,
          success: true,
          error: false,
        },
      };
    }

    case MERCHANT_FETCH_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        status: {
          busy: false,
          success: false,
          error: true,
        },
      }
    }

    default: {
      return state;
    }
  }
}
