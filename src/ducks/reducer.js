const initialState = {
  bag: []
};

const ADD_TO_BAG = "ADD_TO_BAG";
const ADD_ALL_TO_BAG = "ADD_ALL_TO_BAG";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BAG:
      return Object.assign({}, state, { bag: action.payload });

    case ADD_ALL_TO_BAG:
      return Object.assign({}, state, { bag: action.payload });

    default:
      return state;
  }
}

export function addToBag(product) {
  console.log(product);
  return {
    type: ADD_TO_BAG,
    payload: product
  };
}

export function addAllToBag(product) {
  return {
    type: ADD_ALL_TO_BAG,
    payload: product
  };
}
