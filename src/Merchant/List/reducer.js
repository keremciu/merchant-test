import {
  MERCHANT_LIST_FETCH_START,
  MERCHANT_LIST_FETCH_SUCCESS,
  MERCHANT_LIST_FETCH_FAILED,
  MERCHANT_DELETE_START,
  MERCHANT_DELETE_SUCCESS,
  MERCHANT_DELETE_FAILED
} from './actions';

const initialState = {
  data: [],
  status: {
    busy: false,
    success: false,
    error: false,
  },
};

export default function merchantListReducer(state = initialState, action) {
  switch (action.type) {
    case MERCHANT_DELETE_START:
    case MERCHANT_LIST_FETCH_START: {
      return {
        ...state,
        status: {
          busy: true,
          success: false,
          error: false,
        },
      };
    }

    case MERCHANT_DELETE_SUCCESS: {
      return {
        ...state,
        data: [
          ...state.data.filter(merchant => merchant.id !== action.payload.id)
        ],
        status: {
          busy: false,
          success: true,
          error: false,
        },
      };
    }

    case MERCHANT_LIST_FETCH_SUCCESS: {
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

    case MERCHANT_DELETE_FAILED:
    case MERCHANT_LIST_FETCH_FAILED: {
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
