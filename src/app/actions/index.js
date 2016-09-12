import * as types from '../constants/ActionTypes';

export function updateWorld() {
  return {type: types.UPDATE_WORLD};
}

export function delayUpdateWorld() {
  return dispatch => {
    setTimeout(() => {
      dispatch(updateWorld());
    }, 1000);
  };
}

