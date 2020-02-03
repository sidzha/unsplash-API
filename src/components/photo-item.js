import React from 'react';

const PhotoItem = ({ photo }) => {
  return (
    <li key={photo.id} className="grid__item card">
      <div className="card__body">
        <img src={photo.urls.regular} alt=""></img>
      </div>
      <div className="card__footer media">
        <img
          src={photo.user.profile_image.small}
          alt=""
          className="media__obj"
        />
      </div>
      <div className="media__body">
        <a href={photo.user.portfolio_url}>{photo.user.name}</a>
      </div>
    </li>
  );
};

export default PhotoItem;
