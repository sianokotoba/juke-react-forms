import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

  render () {
    return (
      <form className="form-group">
        <input className="form-control" name="post" type="text" onChange={this.props.handleChange} />
      </form>
    )
  }
}

function FormDecorator (InnerComponent) {

  return class StatefulForm extends Component {

    constructor (props) {
      super(props);
      this.state = {
        input: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange (evt) {
      this.setState({ input: evt.target.value });
      console.log("INPUT:", this.state.input);
    }

    render () {
      return (
        <InnerComponent
          handleChange={this.handleChange} />
      )
    }
  }
}

// const mapStateToProps = (state) => ({

// });

// const mapDispatchToProps = function (dispatch) {

//   return {
//     handleSubmit: function (formInput) {
//       const newStory = {
//         id: formInput,
//         title: formInput
//       }
//       const action = addStory(newStory);
//       dispatch(action);
//     }
//   }
// }

const CompleteForm = FormDecorator(Form);
// const connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CompleteForm);


export default CompleteForm;
