import {
   POST_CATEGORY,
   FETCH_ALL_CATEGORIES,
   GET_SINGLE_CATEGORY,
   UPDATE_CATEGORY,
   DELETE_CATEGORY
  } from '../ActionTypes/ActionTypes';
  import {Dispatch} from 'redux';
  
  interface Props {
    title?: string;
    id?: string;
    attributes: Attribute[]
  }

  interface Attribute {
    name: string, 
    removal: boolean, 
    type: string
  }

  export const postCategory = (payload: Props) => (dispatch: Dispatch) => {
    console.log(payload, 'reach here?')
    dispatch({
      type: POST_CATEGORY,
      payload: payload,
    });
  };
  
  export const fetchAllCategories = () => (dispatch: Dispatch) => {
    dispatch({
      type: FETCH_ALL_CATEGORIES,
    });
  };
  
  export const fetchCategoryById = (id: string) => (dispatch: Dispatch) => {
    dispatch({
      type: GET_SINGLE_CATEGORY,
      payload: id,
    });
  };

  export const updateCategoryById = (id: string) => (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_CATEGORY,
      payload: id,
    });
  };
  
  export const deleteCategoryById = (id: string) => (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    });
  };
 
  