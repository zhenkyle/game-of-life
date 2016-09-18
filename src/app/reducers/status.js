import {UPDATE_WORLD, CHANGE_SIZE, CHANGE_SPEED, CLEAR, PAUSE, RUN} from '../constants/ActionTypes';
import {FAST} from '../constants/SpeedTypes';

const initialState = {
  generations: 0, // 0 1 2 3 ...
  boardSize: [70, 50], // 50x30 70x50 100x80
  speed: FAST, // slow medium fast
  appStatus: "running" // running, paused
};

export default function status(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WORLD: {
      return {...state, generations: state.generations + 1};
    }
    case CHANGE_SPEED: {
      return {...state, speed: action.payload};
    }
    case CHANGE_SIZE: {
      return {...state, boardSize: action.payload, appStatus: "paused", generations: 0};
    }
    case RUN: {
      return {...state, appStatus: "running"};
    }
    case CLEAR: {
      return {...state, appStatus: "paused", generations: 0};
    }
    case PAUSE: {
      return {...state, appStatus: "paused"};
    }
    default:
      return state;
  }
}
