import  { icons, colors } from './data'
import { randomChoice, randomTime } from './random'

export const LOADED_FRUIT = 'fruit/loadfruit';
export const FINAL_OBJ = 'final/finalObj';

const finalIcon = {
  icon: 'paper-plane',
  color: '#cd4436',
};

export const finalObj = () => ({
  type: FINAL_OBJ,
  payload: finalIcon,
});

export const fillFruit = fruit => ({
  type: LOADED_FRUIT,
  payload: fruit,
});

const loadFruit = ({ id }) => new Promise((resolve) => {
  setTimeout(() => resolve({
    id,
    icon: randomChoice(icons, icons.lenght),
    color: randomChoice(colors, colors.lenght),
  }),
  randomTime(8));
}, () => console.log("error in item with id: ", id));

const fillPromises = (fruits, dispatch) => {
  const allPromises = fruits
                      .map(fruit => loadFruit(fruit)
                        .then(value => dispatch(fillFruit(value))));
  return allPromises;
}

export const loadFruits = () => (dispatch, getState) => {
  const { fruits } = getState();

  return Promise.all(fillPromises(fruits, dispatch))
    .then(() => dispatch(finalObj()))
    .catch((error) => console.log('Err: ', error));
};

export default {
	loadFruit,
};
