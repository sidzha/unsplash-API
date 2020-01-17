import React, { Component } from 'react';
import PhotosList from '../components/photos-list';

import Unsplash, { toJson } from 'unsplash-js';
const unsplash = new Unsplash({
  accessKey: 'c9e8f872c1312cc842bbb43b38b2d941a16b9f70429b62eae55e373220c3cdbd',
  secret: 'c6c34444a4e1ba2cff370ba0220d0e4ac85a7577a731a4a792698fb1663376d8',
  callbackUrl: 'http://localhost:8080'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    const code = location.search.split('code=')[1];

    if (code) {
      console.log(code);
      unsplash.auth
        .userAuthentication(code)
        .then(toJson)
        .then(json => {
          unsplash.auth.setBearerToken(json.access_token);
        });
    } else {
      const authenticationUrl = unsplash.auth.getAuthenticationUrl([
        'public',
        'read_user'
      ]);
      location.assign(authenticationUrl);
    }

    unsplash.photos
      .listPhotos(1, 11, 'latest')
      .then(toJson)
      .then(json => {
        this.setState({
          photos: json
        });
      });
  }

  render() {
    return (
      <div>
        <header>THIS IS HEADER!!!</header>
        <main>
          <PhotosList data={this.state.photos} />
        </main>
      </div>
    );
  }
}

export default App;
