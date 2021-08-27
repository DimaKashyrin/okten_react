const reducer = (state,{obj,act}) => {

    switch (obj + act){

        case 'a'+'+':
            return {...state, a: state.a + 5 }
        case 'a'+'-':
            return {...state, a: state.a - 5 }

        case 'b'+'+':
            return {...state, b: state.b + 10 }
        case 'b'+'-':
            return {...state, b: state.b - 10 }

        case 'c'+'+':
            return {...state, c: state.c + 20 }
        case 'c'+'-':
            return {...state, c: state.c - 20 }

        default:
            return {...state}

    }
}
export default reducer;