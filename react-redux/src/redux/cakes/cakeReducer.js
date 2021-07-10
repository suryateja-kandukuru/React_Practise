import { BUY_CAKE } from './cakeActions'
const initalState = {
    noOfCakes: 10
}

// The reducer function will update the store based on the type of action

 const cakeReduer = (state = initalState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            noOfCakes : state.noOfCakes - 1
        }

        default: return state
    }
}

export default cakeReduer