import {
  SET_QUIZ_QUESTIONS,
  SET_QUIZ_RESULT,
  SET_QUIZ_ENDED,
  SET_QUIZ_STARTED,
} from "../actions";

const INIT_STATE = {
  questions: [
    {
      gif: "./assets/img/waterfall.gif",
      question: "Would you like to buy world famous handicraft souvenirs made by indigenous tribal artists of Bastar?",
      type: "leisure",
      is_true: false,
      is_current: true,
    },
    {
      gif: "./assets/img/adventure1.webp",
      question: "Does waterfalls fascinate you?",
      type: "adventure",
      is_true: false,
      is_current: false,
    },
    {
      gif: "./assets/img/adventure2.webp",
      question: "Would you like to pay a visit to Bastar's wonderful sites of cultural heritage and religious temples?",
      type: "religious",
      is_true: false,
      is_current: false,
    },
    {
      gif: "./assets/img/waterfall.gif",
      question: "Would you like to be acquainted with tribal and indigenous living in person?",
      type: "culture",
      is_true: false,
      is_current: false,
    },
    {
      gif: "./assets/img/waterfall.gif",
      question: "Would you like to spent some time with your family at nature's lap, with serenity?",
      type: "leisure",
      is_true: false,
      is_current: false,
    },
    {
      gif: "./assets/img/adventure2.webp",
      question: "Would you love to take part in adventure sports like Rapling, climbing and trekking?",
      type: "adventure",
      is_true: false,
      is_current: false,
    },
    {
      gif: "./assets/img/waterfall.gif",
      question: "Would you like to witness the ancient heritage and archeological marvels of Bastar?",
      type: "religious",
      is_true: false,
      is_current: false,
    },
    {
      gif: "./assets/img/waterfall.gif",
      question: "Would you love to try authentic indigenous tribal cuisine?",
      type: "culture",
      is_true: false,
      is_current: false,
    },
  ],
  percentages: [
    {
      type: "leisure",
      percentages: 0,
    },
    {
      type: "adventure",
      percentages: 0,
    },
    {
      type: "religious",
      percentages: 0,
    },
    {
      type: "culture",
      percentages: 0,
    },
  ],
  quizStarted: false,
  quizAnswered: false,
  quizEnded: false,
};

const exploreReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_QUIZ_QUESTIONS:
      return { ...state, questions: action.payload };
    case SET_QUIZ_STARTED:
      return { ...state, quizStarted: action.payload };
    case SET_QUIZ_RESULT:
      return { ...state, quizAnswered: true, percentages: action.payload };
    case SET_QUIZ_ENDED:
      return { ...state, quizEnded: action.payload };

    default:
      return {
        ...state,
      };
  }
};
export default exploreReducer;