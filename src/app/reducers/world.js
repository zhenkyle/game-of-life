import {UPDATE_WORLD} from '../constants/ActionTypes';

function getArray(x, y, func) {
  return [...Array(y)].map(() => [...Array(x)].map(() => func()));
}

const initialState = getArray(75, 75, () => Math.floor(Math.random() * 2));

export default function world(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WORLD:
      return [
        ...action.world
      ];

    default:
      return state;
  }
}
