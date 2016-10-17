'use strict';

import { connect } from 'react-redux';
import Playlist from './Playlist';
import addPlaylist from '../../ducks/playlist';

const mapStateToProps = function (state) {
  return {
    
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (playlistName) => {
      dispatch(addPlaylist(playlistName))
    }
  };
};

const statefulComponentCreator = connect(null, mapDispatchToProps);
const PlaylistContainer = statefulComponentCreator(Playlist);
export default PlaylistContainer;