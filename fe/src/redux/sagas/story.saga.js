import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchStoriesData,
  updateStoryData,
} from "../../services/story.service";
import {
  fetchStoriesCompletedAction,
  fetchStoriesErrorAction,
  updateStoriesCompletedAction,
  updateStoriesErrorAction,
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

function* updateStory(payload) {
  try {
    const response = yield call(updateStoryData, payload.payload);
    yield put(updateStoriesCompletedAction(response));
  } catch (error) {
    //show in toast
    yield put(updateStoriesErrorAction());
  }
}

function* story() {
  yield takeEvery("FETCH_STORIES", fetchStories);
  yield takeEvery("UPDATE_STORY", updateStory);
}

export default story;
