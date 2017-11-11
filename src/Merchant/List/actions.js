export const MERCHANT_LIST_FETCH_START = 'MERCHANT_LIST_FETCH_START';
export const MERCHANT_LIST_FETCH_SUCCESS = 'MERCHANT_LIST_FETCH_SUCCESS';
export const MERCHANT_LIST_FETCH_FAILED = 'MERCHANT_LIST_FETCH_FAILED';

export function createFetchMerchants() {
  const url =`${process.env.API_BASE}merchants?page=1`;

  return function (dispatch) {
    dispatch({
      type: MERCHANT_LIST_FETCH_START,
      payload: {},
    });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: MERCHANT_LIST_FETCH_SUCCESS,
          payload: {
            data
          }
        })
      })
      .catch(error => {
        dispatch({
          type: MERCHANT_LIST_FETCH_FAILED,
          payload: {
            error
          }
        })
      })
  }
}

export const MERCHANT_DELETE_START = 'MERCHANT_DELETE_START';
export const MERCHANT_DELETE_SUCCESS = 'MERCHANT_DELETE_SUCCESS';
export const MERCHANT_DELETE_FAILED = 'MERCHANT_DELETE_FAILED';

export function createDeleteMerchant(id, callback) {
  const url =`${process.env.API_BASE}merchants/${id}`;

  return function (dispatch) {
    dispatch({
      type: MERCHANT_DELETE_START,
      payload: {
        id,
      },
    });

    fetch(url, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: MERCHANT_DELETE_SUCCESS,
          payload: {
            id,
          }
        })
        if (callback) {
          callback();
        }
      })
      .catch(error => {
        dispatch({
          type: MERCHANT_DELETE_FAILED,
          payload: {
            error
          }
        })
      })
  }
}