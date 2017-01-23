import {
  LOADED_FRUIT,
  FINAL_OBJ,
} from '../actions/';

const fruits = (state = [], action = {}) => {
  const { payload } = action;

  switch (action.type) {
    case LOADED_FRUIT:
      return state.map(fruit => ((fruit.id === payload.id) ? payload : fruit));
    case FINAL_OBJ:
      return state.map(fruit => ({ ...payload, id: fruit.id }));
    default:
      return state;
  }
};

export default fruits;