import axios from 'axios'
export const GetSmurf = "GetSmurf";
export const GetPass = "GetPass";
export const GetMiss = "GetMiss";
export const AddSmurf = "AddSmurf";
export const AddPass = "AddPAss";
export const AddMiss = "AddMiss";

export const fetchSmurf = () => dispatch => {
    dispatch({ type: GetSmurf, payload: "Building our village"});
    axios 
    .get("http://localhost:3333/smurfs")
    .then(res => {
            // console.log("RES", res.data);
        dispatch({ type: GetPass, payload: res.data});
    })

    .catch(err => {
        dispatch({
            type:GetMiss,
            payload: err
        });
    });
};

        export const addSmurf = smurf => dispatch => {
            dispatch ({type: AddSmurf, payload: " Woot New Smurf"});
            console.log("adds", smurf);
            axios
             .post ("http://localhost:3333/smurfs",  smurf)
             .then(res => {
                 console.log("RES", res.data);
                 dispatch({ type: AddPass, payload: res.data});
             })
             .catch(err => {
                 console.log(err);
                 dispatch({
                     type:AddMiss,
                     payload:err
                 });
             });
     };
