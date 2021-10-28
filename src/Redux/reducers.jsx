
import { GET_CITY, REMOVE,GET_MEDELLIN } from "./actions";

const inicialState = {
    city : [],
    copyCity:{},
}

function RootReducer(state = inicialState, action){
    switch (action.type){
        
        case GET_CITY:
            return {
                ...state,
                city: [...state.city, action.payload],
               
            }
        case REMOVE:
            return {
                ...state,
                city: state.city.filter(e => e.id !== action.payload)
            }
        case GET_MEDELLIN:
            return{
                ...state,
                copyCity: action.payload
            }
     
        default:
            return state
    }
}

export default RootReducer;