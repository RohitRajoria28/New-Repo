import PropTypes from 'prop-types'
import React, { Component } from 'react'

 class ClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    // birth the component
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate(state,prop) {
    // on update or cliking
    document.title = `You clicked ${this.state.count} times`;
  }

  
  // you are calling the render funtion and after updating your state
  // state update-> rerender -> componnetDIdUpdate
  
  componentWillUnmount(){
      
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default ClassComponents;