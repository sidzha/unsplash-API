import { DATA_LOADED } from '../constants/action-types';

export const fetchPhotos = () => {
  return function(dispatch, _getState, unsplash, toJson) {
    unsplash.photos
      .listPhotos(1, 11, 'latest')
      .then(toJson)
      .then(json => {
        console.log(json);
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
};
