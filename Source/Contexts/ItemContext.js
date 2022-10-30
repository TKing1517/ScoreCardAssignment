import react, { useEffect, useReducer } from "react";
import { actionTypes } from "../Helpers/actionTypes";

const ItemContext = react.createContext();
let gameDetails = []

const reducer = (state,action) => {
    switch(action.type){
        case actionTypes.create:
            return [
                ...state,
                {
                    id: Math.floor(Math.random()*99999),
                    competitonName: action.payload.competitonName,
                    date: action.payload.date,
                    rinkNumber: action.payload.rinkNumber,
                    teamNameA: action.payload.teamNameA,
                    NumberOfPlayersA: action.payload.NumberOfPlayersA,
                    teamNameB: action.payload.teamNameB,
                    NumberOfPlayersB: action.payload.NumberOfPlayersB
                }
        ];
        default:
            return state;
    };
};
export const ItemProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,gameDetails);

    const createGame = (competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB) => {
        dispatch({type: actionTypes.create, payload:{competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB}});
     
    };

    return (
        <ItemContext.Provider value={{
            state:state,
            create: createGame,
            }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;