import { DATA_LOADED } from '../constants/action-types';

export const fetchPhotos = () => {
  return function(dispatch) {
    unsplash.photos
      .listPhotos(1, 11, 'latest')
      .then(toJson)
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
};
