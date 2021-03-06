'use strict';

import React from 'react';
import { Link } from 'react-router';
import CompleteForm from '../../ducks/filter';

export default function (props) {
  const artists = props.artists;

  return (
    <div>
      <h3>Artists</h3>
      <div className="list-group">
        <CompleteForm />
        {
          artists.map(artist => (
            <div className="list-group-item" key={ artist.id }>
              <Link to={`/artists/${artist.id}`}>
                { artist.name }
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
