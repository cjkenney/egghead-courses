import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {};
}

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(item => (
            <li>
              {item}
              <button type="button">Load user</button>
            </li>
          ))}
        </ul>
        {this.props.loading && <p>Please wait!</p>}
        {this.props.current && <User {...this.props.current} />}
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(Users);
