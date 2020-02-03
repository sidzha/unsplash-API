import { DATA_LOADED } from './constants/action-types';

const initialState = {
  photos: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED:
      return {
        ...state,
        photos: [...state.photos, action.payload]
      };
  }
  return state;
}

export default rootReducer;
