import { useReducer, useCallback } from 'react';

// This function sets the current state of our request
function httpReducer(state, action) {

  // If the payload is to send, set our current state api state to sending
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }

  // If our api call is successful, then retrive the response and output it
  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    };
  }

  // If our api call fails, then retreive the error message from the payload
  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    };
  }

  // If nothing else, return what we had before.
  return state;
}

function useHttp(requestFunction, startWithPending = false) {

  // We're using a reducer here, this allows us to set our current state regarding the API call
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  
  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          errorMessage: error.message || 'Something went wrong!',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
