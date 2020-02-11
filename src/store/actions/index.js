import { DATA_LOADED } from '../constants/action-types';

export const fetchPhotos = (unsplash, toJson) => {
  return function(dispatch) {
    console.log(unsplash); //undefined
    unsplash.photos
      .listPhotos(1, 11, 'latest')
      .then(toJson)
      .then(json => {
        console.log(json);
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
};
