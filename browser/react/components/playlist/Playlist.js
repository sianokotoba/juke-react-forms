'use strict';

import React from 'react';

export default class Playlist extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input : ""
    }
    this.onSubmission = this.onSubmission.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onSubmission(event){
    event.preventDefault();
    //console.log(this.state.input);
    this.props.handleSubmit(this.state.input);
  }

  handleChange(event){
    this.setState({input: event.target.value})
  }

  render(){
    return (
      <div>
          <h3>New Playlist</h3>
            <form className="form-group" onSubmit={this.onSubmission}>
              <div className="row">
                <div className="col-xs-2">
                  <label htmlFor="post">Title</label>
                </div>
                <div className="col-xs-10">
                  <input className="form-control" name="post" type="text" onChange={this.handleChange}/>
                </div>
                <div className="col-xs-2"/>
                <div className="col-xs-10">
                  <button type="submit" name="create-playlist" className="btn btn-default">
                    <span>Create Playlist</span>
                  </button>
                </div>
              </div>
            </form>
      </div>
    );
  }
}