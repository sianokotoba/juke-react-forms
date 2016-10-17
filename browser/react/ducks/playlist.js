'use strict';

const ADD_PLAYLIST = 'ADD_PLAYLIST';
const initialPlaylist = {};

export const addPlaylist = function (playlistTitle) {
  const action = {
    type: ADD_PLAYLIST,
    title: playlistTitle
  };
     console.log("this should be playlistName:", playlistTitle, "this should be action:", action)
  return action;
};

export default function playlistReducer(state = initialPlaylist, action) {
  console.log(arguments)
  switch (action.type) {
    case 'RECEIVE_ALBUMS': return {title: action.title};
    default: return state;
  }
}
