import {UPDATE_WORLD} from '../constants/ActionTypes';

function getArray(x, y, func) {
  return [...Array(y)].map(() => [...Array(x)].map(() => func()));
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

const initialState = getArray(75, 75, () => Math.floor(Math.random() * 2));

export default function world(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WORLD: {
      const world = state.world;
      const xSize = world[0].length;
      const ySize = world.length;
      const newWorld = world.map((u, y) => u.map((v, x) => {
        const sum9 = world[mod(y - 1, ySize)][mod(x - 1, xSize)] +
                     world[mod(y - 1, ySize)][x] +
                     world[mod(y - 1, ySize)][mod(x + 1, xSize)] +
                     world[y][mod(x - 1, xSize)] +
                     world[y][x] +
                     world[y][mod(x + 1, xSize)] +
                     world[mod(y + 1, ySize)][mod(x - 1, xSize)] +
                     world[mod(y + 1, ySize)][x] +
                     world[mod(y + 1, ySize)][mod(x + 1, xSize)]
                     ;
        let newValue;
        switch (sum9) {
          case 3:
            newValue = 1;
            break;
          case 4:
            newValue = v;
            break;
          default:
            newValue = 0;
        }
        return newValue;
      }));
      return newWorld;
    }
    default:
      return state;
  }
}
