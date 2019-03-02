import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { clear, LOAD_STORIES } from '../actions';

function loadStoriesEpic(action$) {
  return action$.pipe(
    ofType(LOAD_STORIES),
    switchMap(() => {
      return of(clear());
    })
  );
}

export const rootEpic = combineEpics(loadStoriesEpic);
