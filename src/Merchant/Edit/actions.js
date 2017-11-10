import Snackbar from 'Components/Snackbar'

export const MERCHANT_FETCH_START = 'MERCHANT_FETCH_START';
export const MERCHANT_FETCH_SUCCESS = 'MERCHANT_FETCH_SUCCESS';
export const MERCHANT_FETCH_FAILED = 'MERCHANT_FETCH_FAILED';

export function createFetchMerchant(id) {
  const url =`${process.env.API_BASE}merchants/${id}`;

  return function (dispatch) {
    dispatch({
      type: MERCHANT_FETCH_START,
      payload: {
        id,
      },
    });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: MERCHANT_FETCH_SUCCESS,
          payload: {
            data
          }
        })
      })
      .catch(error => {
        dispatch({
          type: MERCHANT_FETCH_FAILED,
          payload: {
            error
          }
        })
      })
  }
}

export const MERCHANT_EDIT_START = 'MERCHANT_EDIT_START';
export const MERCHANT_EDIT_SUCCESS = 'MERCHANT_EDIT_SUCCESS';
export const MERCHANT_EDIT_FAILED = 'MERCHANT_EDIT_FAILED';

export function createEditMerchant(id, data, callback) {
  const url =`${process.env.API_BASE}merchants/${id}`;

  return function (dispatch) {
    dispatch({
      type: MERCHANT_EDIT_START,
      payload: {
        id,
        data,
      },
    });

    fetch(url, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data }),
      })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: MERCHANT_EDIT_SUCCESS,
          payload: {
            data
          }
        })
        Snackbar({
          message: `The data of ${data.firstname} ${data.lastname} merchant has changed.`
        })
        if (callback) {
          callback();
        }
      })
      .catch(error => {
        dispatch({
          type: MERCHANT_EDIT_FAILED,
          payload: {
            error
          }
        })
      })
  }
}