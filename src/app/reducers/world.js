import {UPDATE_WORLD} from '../constants/ActionTypes';

function getArray(x, y, func) {
  return [...Array(y)].map(() => [...Array(x)].map(() => func()));
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
// Cell -> [1, false] means [alive, new bron = flase]
const initialState = getArray(75, 75, () => [Math.floor(Math.random() * 2), true]);

export default function world(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WORLD: {
      const xSize = state[0].length;
      const ySize = state.length;
      const newWorld = state.map((u, y, world) => u.map((v, x) => {
        const sum9 = world[mod(y - 1, ySize)][mod(x - 1, xSize)][0] +
                     world[mod(y - 1, ySize)][x][0] +
                     world[mod(y - 1, ySize)][mod(x + 1, xSize)][0] +
                     world[y][mod(x - 1, xSize)][0] +
                     world[y][x][0] +
                     world[y][mod(x + 1, xSize)][0] +
                     world[mod(y + 1, ySize)][mod(x - 1, xSize)][0] +
                     world[mod(y + 1, ySize)][x][0] +
                     world[mod(y + 1, ySize)][mod(x + 1, xSize)][0]
                     ;
        let newValue;
        switch (sum9) {
          case 3:
            newValue = [1, world[y][x][0] !== 1];
            break;
          case 4:
            newValue = [v[0], false];
            break;
          default:
            newValue = [0, false];
        }
        return newValue;
      }));
      return newWorld;
    }
    default:
      return state;
  }
}
