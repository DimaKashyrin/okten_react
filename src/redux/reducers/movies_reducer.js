import {LOAD_GENRES, LOAD_MOVIES} from "../actions/actions";

let initialState = {movies:[],genres:[]};
const reducer = (state = initialState,action) => {
  switch (action.type){
    case LOAD_MOVIES:
      console.log(action.payload)
      return {...state,movies: [...action.payload]}
    case LOAD_GENRES:
      console.log(action.payload)
      return {...state,genres: [...action.payload]}
    default:
      return state
  }

}
export {reducer}