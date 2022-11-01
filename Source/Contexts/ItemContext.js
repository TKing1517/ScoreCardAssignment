import react, { useEffect, useReducer } from "react";
import { actionTypes } from "../Helpers/actionTypes";

const ItemContext = react.createContext();
let gameDetails = [];
let PlayersA = [];
let PlayersB = [];
let ID = '';
let counter = 0;
let End = 0;
let TeamATotal = [];
let TeamBTotal = []; 
const gameDetailsReducer = (GameDetailsState,GameDetailsAction) => {
    ID = Math.floor(Math.random()*999999)
    switch(GameDetailsAction.type){
        case actionTypes.create:
            return [
                ...GameDetailsState,
                {
                    id: ID,
                    competitonName: GameDetailsAction.payload.competitonName,
                    date: new Date(),
                    rinkNumber: GameDetailsAction.payload.rinkNumber,
                    teamNameA: GameDetailsAction.payload.teamNameA,
                    NumberOfPlayersA: GameDetailsAction.payload.NumberOfPlayersA,

                    teamNameB: GameDetailsAction.payload.teamNameB,
                    NumberOfPlayersB: GameDetailsAction.payload.NumberOfPlayersB
                    
                }
        ];
        default:
            return GameDetailsState;
    };
};

const PlayersAReducer = (PlayersAState,PlayersAAction) => {
    switch(PlayersAAction.type){
        case actionTypes.createTeamA:
            return [
                ...PlayersAState,
                {
                    id: ID,
                    PlayerA1Name: PlayersAAction.payload.PlayerA1Name,
                    PlayerA2Name: PlayersAAction.payload.PlayerA2Name,
                    PlayerA3Name: PlayersAAction.payload.PlayerA3Name,
                    PlayerA4Name: PlayersAAction.payload.PlayerA4Name,

                }
        ];
        default:
            return PlayersAState;
    };
};

const PlayersBReducer = (PlayersBState,PlayersBAction) => {
    switch(PlayersBAction.type){
        case actionTypes.createTeamB:
            return [
                ...PlayersBState,
                {
                    id: ID,
                    PlayerB1Name: PlayersBAction.payload.PlayerB1Name,
                    PlayerB2Name: PlayersBAction.payload.PlayerB2Name,
                    PlayerB3Name: PlayersBAction.payload.PlayerB3Name,
                    PlayerB4Name: PlayersBAction.payload.PlayerB4Name,

                }
        ];
        default:
            return PlayersBState;
    };
};

const TeamATotalReducer = (TeamATotalState,TeamATotalAction) => {
    switch(TeamATotalAction.type){
        case actionTypes.createTotalA:
            return [
                ...TeamATotalState,
                {
                    id: ID,
                    TeamATotal: TeamATotalAction.payload.TeamATotal,
                }
        ];
        case actionTypes.updateTotalA:
            return TeamATotalState.map((e) => {
                if (e.id === TeamATotalAction.payload.id){
                    return TeamATotalAction.payload;                    
                } else {
                    return e;
                }
            });
        default:
            return TeamATotalState;
    };
};

export const ItemProvider = ({children}) => {
    const [gameDetailsState, dispatchGD] = useReducer(gameDetailsReducer,gameDetails);
    const [PlayersAState, dispatchPA] = useReducer(PlayersAReducer,PlayersA);
    const [PlayersBState, dispatchPB] = useReducer(PlayersBReducer,PlayersB);
    const [TeamATotalState,dispatchTA] = useReducer(TeamATotalReducer,TeamATotal);

    const createGame = (competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB) => {
        dispatchGD({type: actionTypes.create, payload:{competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB}});
     
    };

    const createTeamA = (PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name) => {
        dispatchPA({type: actionTypes.createTeamA, payload:{PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name}});
     
    };

    const createTeamB = (PlayerB1Name,PlayerB2Name,PlayerB3Name,PlayerB4Name) => {
        dispatchPB({type: actionTypes.createTeamB, payload:{PlayerB1Name,PlayerB2Name,PlayerB3Name,PlayerB4Name}});
     
    };

    const createTotalA = (TeamATotal) => {
        dispatchTA({type: actionTypes.createTotalA, payload:{TeamATotal}});
     
    };

    const updateTotalA = (id, TeamATotal,callback) => {
        dispatchTA({type: actionTypes.updateTotalA, payload:{id, TeamATotal}});
        if (callback) callback();
    };

    const incrementCounter =() => {
        counter = counter + 1;
    }
    return (
        <ItemContext.Provider value={{
            GameDetailsState:gameDetailsState,
            PlayersAState: PlayersAState,
            PlayersBState: PlayersBState,
            TeamATotalState: TeamATotalState,
            ID,
            counter,
            TeamATotal,
            create: createGame,
            createTeamA: createTeamA,
            createTeamB: createTeamB,
            createTotalA: createTotalA,
            updateTotalA: updateTotalA,
            incrementCounter: incrementCounter,
            }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;