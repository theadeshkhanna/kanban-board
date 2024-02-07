import { call, put, takeEvery } from "redux-saga/effects";
import { fetchStoriesData } from "../../services/story.service";
import {
  fetchStoriesCompletedAction,
  fetchStoriesErrorAction,
} from "../actions/story.action";

function* fetchStories() {
  try {
    const response = yield call(fetchStoriesData);
    yield put(fetchStoriesCompletedAction(response));
  } catch (error) {
    //show in toast
    yield put(fetchStoriesErrorAction());
  }
}

function* story() {
  yield takeEvery("FETCH_STORIES", fetchStories);
}

export default story;
