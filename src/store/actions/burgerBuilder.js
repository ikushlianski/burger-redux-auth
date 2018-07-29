// here we create action creators for building a burger
import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const addIngredient = (nameOfIngredient) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: nameOfIngredient
  };
}

export const removeIngredient = (nameOfIngredient) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: nameOfIngredient
  };
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
}

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: ingredients
  }
}

export const initIngredients = () => {
  return dispatch => {
    //execute async code and dispatch it when I'm done
    axios.get( 'https://burger-builder-5ea11.firebaseio.com/ingredients.json' )
    .then( response => {
      dispatch(setIngredients(response.data))
    } )
    .catch( error => {
      dispatch(fetchIngredientsFailed());
    });
  }
}