const reducer = (state,{obj,act}) => {

    switch(obj + act) {

        case '1+':
            return {...state , a: state.a + 10}

        case '1-':
            return {...state, a: state.a - 2}

        default:
            return {...state}
    }


}
export default reducer;


//if(action.obj === '1' && action.act === '+'){
//         return {...state, a: state.a + 10 }
//     }else if (action.obj === '1' && action.act === '-') {
//         return {...state, a: state.a - 2}
//     }else {
//         return state
//     }