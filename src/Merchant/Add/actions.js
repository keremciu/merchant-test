export const MERCHANT_ADD_START = 'MERCHANT_ADD_START';
export const MERCHANT_ADD_SUCCESS = 'MERCHANT_ADD_SUCCESS';
export const MERCHANT_ADD_FAILED = 'MERCHANT_ADD_FAILED';

export function createAddMerchant(data, callback) {
  const url =`${process.env.API_BASE}merchants/`;

  return function (dispatch) {
    dispatch({
      type: MERCHANT_ADD_START,
      payload: {
        data,
      },
    });

    fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data }),
      })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: MERCHANT_ADD_SUCCESS,
          payload: {
            data
          }
        })
        if (callback) {
          callback();
        }
      })
      .catch(error => {
        dispatch({
          type: MERCHANT_ADD_FAILED,
          payload: {
            error
          }
        })
      })
  }
}