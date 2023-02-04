import {
  POST_CATEGORY,
  FETCH_ALL_CATEGORIES,
  GET_SINGLE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from '../../Actions/ActionTypes/ActionTypes';

const initialState = {
  setLanguage: 'en',
  activeUser: null,
  errorMessage: '',
  all_categories: [],
  single_category: null
};

interface ActionProps {
  payload: unknown;
  type: string;
}
const UserReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case POST_CATEGORY:
      return {
        ...state,
        all_categories: [...state.all_categories, action.payload],
      };
    case FETCH_ALL_CATEGORIES:
      return {
        ...state,
        activeUser: action.payload,
      };
    case GET_SINGLE_CATEGORY:
      return {
        ...state,
        single_category:  state.all_categories.find((cat:any) => cat.id === action.payload )  ,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        hasCard: action.payload,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        hasCard: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
