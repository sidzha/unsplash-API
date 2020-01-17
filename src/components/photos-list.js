import React from 'react';
import PhotoItem from './photo-item';

const PhotosList = ({ data }) => {
  let items = data.map(photo => <PhotoItem key={photo.id} photo={photo} />);

  return <ul className="grid">{items}</ul>;
};

export default PhotosList;
