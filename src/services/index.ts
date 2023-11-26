import { ACTION_TYPE } from '@/context/config/reducer';
import { Dispatch } from 'react';

export const get = async (url: string, dispatch?: Dispatch<any>) => {
  try {
    const response = await fetch(url);
    return handlerResponse(response, dispatch);
  } catch (error) {
    console.log('get request fail', error);
    return {
      errCode: 400,
      errMsg: 'Request Failed'
    };
  }
};

export const post = async (
  url: string,
  params: object = {},
  dispatch?: Dispatch<any>
) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    return handlerResponse(response, dispatch);
  } catch (error) {
    console.log('post request fail', error);
    return {
      errCode: 400,
      errMsg: 'Request Failed'
    };
  }
};

const handlerResponse = async (
  response: Response,
  dispatch?: Dispatch<any>
) => {
  let errMsg = 'Request Failed';
  let errCode = 0;
  if (response.status < 200 && response.status >= 300) {
    errCode = response.status;
  }
  const result = await response.json();
  const data = result?.data;

  if (data?.errCode) {
    errCode = data?.errCode;
  }
  if (data?.errMsg) {
    errMsg = data?.errMsg;
  }
  if (errCode) {
    if (dispatch) {
      dispatch({
        type: ACTION_TYPE.SHOW_TOAST,
        payload: {
          text: errMsg,
          type: 'error'
        }
      });
    }
    return {
      errCode,
      errMsg
    };
  }
  return data;
};
