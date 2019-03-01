import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStories, clear } from '../actions/index';

function mapStateToProps(state) {
  return state;
}

class Stories extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.loadStories}>
          Load Top 3 Stories
        </button>
        <button type="button" onClick={this.props.clear}>
          Clear
        </button>
        <StoryList {...this.props} />
      </div>
    );
  }
}

function StoryList(props) {
  if (props.items.length === 0) {
    return null;
  }
  return (
    <div>
      {props.items.map(item => (
        <Story {...item} key={item.id} />
      ))}
    </div>
  );
}

function Story(props) {
  return <p>{props.title}</p>;
}

function mapDispatch(dispatch) {
  return {
    loadStories: () => dispatch(loadStories()),
    clear: () => dispatch(clear())
  };
}

export default connect(
  mapStateToProps,
  mapDispatch
)(Stories);
