export const MERCHANT_FETCH_START = 'MERCHANT_FETCH_START';
export const MERCHANT_FETCH_SUCCESS = 'MERCHANT_FETCH_SUCCESS';
export const MERCHANT_FETCH_FAILED = 'MERCHANT_FETCH_FAILED';

export function createFetchMerchants() {
  const url =`${process.env.API_BASE}merchants?page=1`;

  return function (dispatch) {
    dispatch({
      type: MERCHANT_FETCH_START,
      payload: {},
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