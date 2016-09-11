import * as types from '../constants/ActionTypes';

export function loadNewWorld(world) {
  /* TODO: change to use tunk middleware */
  return {type: types.UPDATE_WORLD, world};
}

