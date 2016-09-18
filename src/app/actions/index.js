import * as types from '../constants/ActionTypes';

export function updateWorld() {
  return {type: types.UPDATE_WORLD};
}

export function run() {
  return {type: types.RUN};
}

export function pause() {
  return {type: types.PAUSE};
}

export function clear() {
  return {type: types.CLEAR};
}

export function changeSize(size) {
  return {type: types.CHANGE_SIZE,
       payload: size};
}

export function changeSpeed(speed) {
  return {type: types.CHANGE_SPEED,
       payload: speed};
}

export function addPoint(x, y) {
  return {type: types.ADD_POINT,
       payload: {x, y}};
}
export function delayUpdateWorld(setRunning) {
  return (dispatch, getState) => {
    const state = getState();
    if (setRunning === true) {
      dispatch(run());
    }
    setTimeout(() => {
      dispatch(updateWorld());
    }, state.status.speed);
  };
}

