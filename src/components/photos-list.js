import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../store/actions/index';

import PhotoItem from './photo-item';

const PhotosList = ({ photos }) => {
  let items = photos.map(photo => <PhotoItem key={photo.id} photo={photo} />);

  return <ul className="grid">{items}</ul>;
};

class PhotosListContainer extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    const { photos } = this.props;

    return <PhotosList photos={photos} />;
  }
}

const mapStateToProps = state => {
  return { photos: state.photos };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosListContainer);
