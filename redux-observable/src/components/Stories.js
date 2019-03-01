import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state;
}

class Stories extends Component {
  render() {
    return (
      <pre>
        <code>{JSON.stringify(this.props, null, 2)}</code>
      </pre>
    );
  }
}

export default connect(mapStateToProps)(Stories);
