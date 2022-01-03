import {
  SET_QUIZ_QUESTIONS,
  SET_QUIZ_RESULT,
  SET_QUIZ_ENDED,
  SET_QUIZ_STARTED,
} from "../actions";

export const setQuestions = (value) => ({
  type: SET_QUIZ_QUESTIONS,
  payload: value,
});

export const setPercentages = (value) => ({
  type: SET_QUIZ_RESULT,
  payload: value,
});

export const setQuizStarted = (value) => ({
  type: SET_QUIZ_STARTED,
  payload: value,
});

export const setQuizEnded = (value) => ({
  type: SET_QUIZ_ENDED,
  payload: value,
});
