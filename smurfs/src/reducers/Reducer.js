import{ GetSmurf } from '../actions/actions';
import{ GetPass } from '../actions/actions';
import{ GetMiss } from '../actions/actions';
import{ AddSmurf } from '../actions/actions';
import{ AddPass } from '../actions/actions';
import{ AddMiss } from '../actions/actions';

const initialState = {
    message:"",
    smurfs: []
};

export const Reducer = (state = initialState, action) => {
    console.log("ACTION", action.type, action.payload);
    switch (action.type) {
        case GetSmurf:
            return { ...state, message: action.payload };
            case GetPass:
                return { message: "", smurfs: action.payload };
                    case GetMiss:
                        console.log(action.payload);
                        return { ...state, message: action.payload };
                    case AddSmurf:
                    return { ...state, message: action.payload };
                         case AddPass:
                            return { message: "smurf added", smurfs: action.payload};
                            case AddMiss:
                                console.log(action.payload);
                                return { ...state, message: action.payload};
                                    default:
                                    return state;
                            
    }
};

