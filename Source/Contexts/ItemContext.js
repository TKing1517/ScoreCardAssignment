import react, { useEffect, useReducer } from "react";
import { actionTypes } from "../Helpers/actionTypes";

const ItemContext = react.createContext();
let gameDetails = [];
let PlayersA = [];
let PlayersB = [];
let ID = '';
let counter = 0;
let counterB = 0;
let End = 1;
let TeamATotal = [];
let TeamBTotal = []; 
let Scores = [];
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

const TeamBTotalReducer = (TeamBTotalState,TeamBTotalAction) => {
    switch(TeamBTotalAction.type){
        case actionTypes.createTotalB:
            return [
                ...TeamBTotalState,
                {
                    id: ID,
                    TeamBTotal: TeamBTotalAction.payload.TeamBTotal,
                }
        ];
        case actionTypes.updateTotalB:
            return TeamBTotalState.map((e) => {
                if (e.id === TeamBTotalAction.payload.id){
                    return TeamBTotalAction.payload;                    
                } else {
                    return e;
                }
            });
        default:
            return TeamBTotalState;
    };
};

const ScoresReducer = (ScoresState,ScoresAction) => {
    switch(ScoresAction.type){
        case actionTypes.createScores:
            return [
                ...ScoresState,
                {
                    id: ID,
                    ScoreEnd1: ScoresAction.payload.ScoreEnd1,
                    ScoreEnd2: ScoresAction.payload.ScoreEnd2,
                    ScoreEnd3: ScoresAction.payload.ScoreEnd3,
                    ScoreEnd4: ScoresAction.payload.ScoreEnd4,
                    ScoreEnd5: ScoresAction.payload.ScoreEnd5,
                    ScoreEnd6: ScoresAction.payload.ScoreEnd6,
                    ScoreEnd7: ScoresAction.payload.ScoreEnd7,
                    ScoreEnd8: ScoresAction.payload.ScoreEnd8,
                    ScoreEnd9: ScoresAction.payload.ScoreEnd9,
                    ScoreEnd10: ScoresAction.payload.ScoreEnd10,
                    ScoreEnd11: ScoresAction.payload.ScoreEnd11,
                    ScoreEnd12: ScoresAction.payload.ScoreEnd12,
                    ScoreEnd13: ScoresAction.payload.ScoreEnd13,
                    ScoreEnd14: ScoresAction.payload.ScoreEnd14,
                    ScoreEnd15: ScoresAction.payload.ScoreEnd15,
                    ScoreEnd16: ScoresAction.payload.ScoreEnd16,
                    ScoreEnd17: ScoresAction.payload.ScoreEnd17,
                    ScoreEnd18: ScoresAction.payload.ScoreEnd18,
                    ScoreEnd19: ScoresAction.payload.ScoreEnd19,
                    ScoreEnd20: ScoresAction.payload.ScoreEnd20,
                    ScoreEnd21: ScoresAction.payload.ScoreEnd21,
                    ScoreEnd22: ScoresAction.payload.ScoreEnd22,
                    ScoreEnd23: ScoresAction.payload.ScoreEnd23,
                    ScoreEnd24: ScoresAction.payload.ScoreEnd24,
                    ScoreEnd25: ScoresAction.payload.ScoreEnd25,
                    ScoreEnd26: ScoresAction.payload.ScoreEnd26,
                    ScoreEnd27: ScoresAction.payload.ScoreEnd27,
                    ScoreEnd28: ScoresAction.payload.ScoreEnd28,
                    ScoreEnd29: ScoresAction.payload.ScoreEnd29,
                    ScoreEnd30: ScoresAction.payload.ScoreEnd30,
                }
        ];
        case actionTypes.updateScores:
            return ScoresState.map((e) => {
                if (e.id === ScoresAction.payload.id){
                    return ScoresAction.payload;                    
                } else {
                    return e;
                }
            });
        default:
            return ScoresState;
    };
};


export const ItemProvider = ({children}) => {
    const [gameDetailsState, dispatchGD] = useReducer(gameDetailsReducer,gameDetails);
    const [PlayersAState, dispatchPA] = useReducer(PlayersAReducer,PlayersA);
    const [PlayersBState, dispatchPB] = useReducer(PlayersBReducer,PlayersB);
    const [TeamATotalState,dispatchTA] = useReducer(TeamATotalReducer,TeamATotal);
    const [TeamBTotalState,dispatchTB] = useReducer(TeamBTotalReducer,TeamBTotal);
    const [ScoresState, dispatchSE] = useReducer(ScoresReducer,Scores);

    const createGame = (competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB) => {
        dispatchGD({type: actionTypes.create, payload:{competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB}});
     
    };

    const createTeamA = (PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name) => {
        dispatchPA({type: actionTypes.createTeamA, payload:{PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name}});
     
    };

    const createTeamB = (PlayerB1Name,PlayerB2Name,PlayerB3Name,PlayerB4Name) => {
        dispatchPB({type: actionTypes.createTeamB, payload:{PlayerB1Name,PlayerB2Name,PlayerB3Name,PlayerB4Name}});
     
    };

    const createTotalA = (TeamATotal,callback) => {
        dispatchTA({type: actionTypes.createTotalA, payload:{TeamATotal}});
        if (callback) callback();
    };

    const updateTotalA = (id, TeamATotal,callback) => {
        dispatchTA({type: actionTypes.updateTotalA, payload:{id, TeamATotal}});
        if (callback) callback();
    };

    const createTotalB = (TeamBTotal,callback) => {
        dispatchTB({type: actionTypes.createTotalB, payload:{TeamBTotal}});
        if (callback) callback();
    };

    const updateTotalB = (id, TeamBTotal,callback) => {
        dispatchTB({type: actionTypes.updateTotalB, payload:{id, TeamBTotal}});
        if (callback) callback();
    };

    const createScores = (ScoreEnd1,ScoreEnd2,ScoreEnd3,ScoreEnd4,ScoreEnd5,ScoreEnd6,ScoreEnd7,ScoreEnd8,ScoreEnd9,ScoreEnd10,
        ScoreEnd11,ScoreEnd12,ScoreEnd13,ScoreEnd14,ScoreEnd15,ScoreEnd16,ScoreEnd17,ScoreEnd18,ScoreEnd19,ScoreEnd20,ScoreEnd21,ScoreEnd22,ScoreEnd23,
        ScoreEnd24,ScoreEnd25,ScoreEnd26,ScoreEnd27,ScoreEnd28,ScoreEnd29,ScoreEnd30,callback) => {
            dispatchSE({type: actionTypes.createScores, payload:{ScoreEnd1,ScoreEnd2,ScoreEnd3,ScoreEnd4,ScoreEnd5,ScoreEnd6,ScoreEnd7,ScoreEnd8,ScoreEnd9,ScoreEnd10,
            ScoreEnd11,ScoreEnd12,ScoreEnd13,ScoreEnd14,ScoreEnd15,ScoreEnd16,ScoreEnd17,ScoreEnd18,ScoreEnd19,ScoreEnd20,ScoreEnd21,ScoreEnd22,ScoreEnd23,
            ScoreEnd24,ScoreEnd25,ScoreEnd26,ScoreEnd27,ScoreEnd28,ScoreEnd29,ScoreEnd30}});
        if (callback) callback();
    };

    const updateScores = (id,ScoreEnd1,ScoreEnd2,ScoreEnd3,ScoreEnd4,ScoreEnd5,ScoreEnd6,ScoreEnd7,ScoreEnd8,ScoreEnd9,ScoreEnd10,
        ScoreEnd11,ScoreEnd12,ScoreEnd13,ScoreEnd14,ScoreEnd15,ScoreEnd16,ScoreEnd17,ScoreEnd18,ScoreEnd19,ScoreEnd20,ScoreEnd21,ScoreEnd22,ScoreEnd23,
        ScoreEnd24,ScoreEnd25,ScoreEnd26,ScoreEnd27,ScoreEnd28,ScoreEnd29,ScoreEnd30,callback) => {
            dispatchSE({type: actionTypes.updateScores, payload:{id,ScoreEnd1,ScoreEnd2,ScoreEnd3,ScoreEnd4,ScoreEnd5,ScoreEnd6,ScoreEnd7,ScoreEnd8,ScoreEnd9,ScoreEnd10,
            ScoreEnd11,ScoreEnd12,ScoreEnd13,ScoreEnd14,ScoreEnd15,ScoreEnd16,ScoreEnd17,ScoreEnd18,ScoreEnd19,ScoreEnd20,ScoreEnd21,ScoreEnd22,ScoreEnd23,
            ScoreEnd24,ScoreEnd25,ScoreEnd26,ScoreEnd27,ScoreEnd28,ScoreEnd29,ScoreEnd30}});
        if (callback) callback();
    };

    const incrementCounter =() => {
        counter = counter + 1;
    }

    const incrementCounterB =() => {
        counterB = counterB + 1;
    }

    const incrementEnd =(callback) => {
        End = End + 1;
        if (callback) callback();
    }
    return (
        <ItemContext.Provider value={{
            GameDetailsState:gameDetailsState,
            PlayersAState: PlayersAState,
            PlayersBState: PlayersBState,
            TeamATotalState: TeamATotalState,
            TeamBTotalState: TeamBTotalState,
            ScoresState: ScoresState,
            ID,
            counter,
            counterB,
            TeamATotal,
            End,
            create: createGame,
            createTeamA: createTeamA,
            createTeamB: createTeamB,
            createTotalA: createTotalA,
            updateTotalA: updateTotalA,
            createTotalB: createTotalB,
            updateTotalB: updateTotalB,
            createScores: createScores,
            updateScores: updateScores,
            incrementCounter: incrementCounter,
            incrementCounterB: incrementCounterB,
            incrementEnd: incrementEnd,
            }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;