import * as types from '../constants/ActionTypes';

export function updateWorld(world) {
  return {type: types.UPDATE_WORLD, world};
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

export function loadNewWorld(world) {
  return dispatch => {
    setTimeout(() => {
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
      dispatch(updateWorld(newWorld));
    }, 1000);
  };
}

