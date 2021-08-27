const reducer = (state,action) => {

    if(action.obj === '1' && action.act === '+'){
        return {...state, a: state.a + 10 }
    }else if (action.obj === '1' && action.act === '-') {
        return {...state, a: state.a - 2}
    }else {
        return state
    }

}
export default reducer;