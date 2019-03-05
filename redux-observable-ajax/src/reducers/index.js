const initialState = {
  users: ['shakyshane', 'sindresorhus', 'substack'],
  current: null,
  loading: false
};

export function storiesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default storiesReducer;
