import { LOAD_STORIES, CLEAR_STORIES } from '../actions/index';

const stories = [
  {
    by: 'asdfasdf',
    id: 14967192,
    title:
      'Uber and Lyft Said to Offer Drivers a Chance to Participate in I.P.O.s',
    url:
      'https://www.nytimes.com/2019/02/28/technology/uber-lyft-drivers-ipos.html'
  },
  {
    by: 'tommy guy',
    id: 1497222,
    title: 'Limiting Your Digital Footprints in a Surveillance State',
    url:
      'https://www.nytimes.com/2019/02/27/technology/personaltech/digital-footprint-surveillance.html'
  },
  {
    by: 'dude',
    id: 14967345,
    title: 'The Discount Cable and Charger Brands You Can Trust',
    url:
      'https://www.nytimes.com/2019/02/25/smarter-living/the-discount-cable-and-charger-brands-you-can-trust.html'
  }
];

const initialState = {
  items: [1, 2, 3]
};

export function storiesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STORIES:
      return {
        items: stories.slice()
      };
    case CLEAR_STORIES:
      return {
        items: []
      };
    default:
      return state;
  }
}

export default storiesReducer;
