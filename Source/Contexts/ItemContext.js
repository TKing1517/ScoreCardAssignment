import react, { useEffect, useReducer } from "react";
import { actionTypes } from "../Helpers/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GameDetails_KEY = "GameDetailsPassword";
const PlayersA_KEY = "PlayersAPassword";
const PlayersB_KEY = "PlayersBPassword";
const TeamATotal_KEY = "TeamATotalPassword";
const TeamBTotal_KEY = "TeamBTotalPassword";
const Scores_KEY = "ScoresPassword";

const ItemContext = react.createContext();
let gameDetails = [];
let PlayersA = [];
let PlayersB = [];
let ID = Math.floor(Math.random()*999999);
let counter = 0;
let counterB = 0;
let End = 1;
let TeamATotal = [];
let TeamBTotal = []; 
let Scores = [];
const gameDetailsReducer = (GameDetailsState,GameDetailsAction,TeamNamesAction) => {

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
                    NumberOfPlayersB: GameDetailsAction.payload.NumberOfPlayersB,
                    PlayerA1Name: GameDetailsAction.payload.PlayerA1Name,
                    PlayerA2Name: GameDetailsAction.payload.PlayerA2Name,
                    PlayerA3Name: GameDetailsAction.payload.PlayerA3Name,
                    PlayerA4Name: GameDetailsAction.payload.PlayerA4Name,
                    PlayerB1Name: GameDetailsAction.payload.PlayerB1Name,
                    PlayerB2Name: GameDetailsAction.payload.PlayerB2Name,
                    PlayerB3Name: GameDetailsAction.payload.PlayerB3Name,
                    PlayerB4Name: GameDetailsAction.payload.PlayerB4Name,
                    
                }
        ];
        case actionTypes.updatePlayerNames:
            return GameDetailsState.map((e) => {
                if (e.id === GameDetailsAction.payload.id){
                    return GameDetailsAction.payload;                    
                } else {
                    return e;
                }
            });
        case actionTypes.saveGameDetails:
            try{
                AsyncStorage.setItem(GameDetails_KEY, JSON.stringify(GameDetailsState));
            } catch(e) {
                console.log(e);
            } finally {
                return GameDetailsState;
            }
        default:
            return GameDetailsState;
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
        case actionTypes.saveGameDetails:
            try{
                AsyncStorage.setItem(TeamATotal_KEY, JSON.stringify(TeamATotalState));
            } catch(e) {
                console.log(e);
            } finally {
                return TeamATotalState;
            }
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
        case actionTypes.saveGameDetails:
            try{
                AsyncStorage.setItem(TeamBTotal_KEY, JSON.stringify(TeamBTotalState));
            } catch(e) {
                console.log(e);
            } finally {
                return TeamBTotalState;
            }
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
        case actionTypes.saveGameDetails:
            try{
                AsyncStorage.setItem(Scores_KEY, JSON.stringify(ScoresState));
            } catch(e) {
                console.log(e);
            } finally {
                return ScoresState;
            }
        default:
            return ScoresState;
    };
};


export const ItemProvider = ({children}) => {
    const [gameDetailsState, dispatchGD] = useReducer(gameDetailsReducer,gameDetails);

    const [TeamATotalState,dispatchTA] = useReducer(TeamATotalReducer,TeamATotal);
    const [TeamBTotalState,dispatchTB] = useReducer(TeamBTotalReducer,TeamBTotal);
    const [ScoresState, dispatchSE] = useReducer(ScoresReducer,Scores);

    const createGame = (competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB) => {
        dispatchGD({type: actionTypes.create, payload:{competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB}});
        dispatchGD({type: actionTypes.saveGameDetails})
     
    };

    const createTeamA = (id,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name) => {
        const currentEntry = gameDetailsState.find((e) => e.id===ID);
        let competitonName = currentEntry.competitonName
        let date = currentEntry.date
        let rinkNumber = currentEntry.rinkNumber
        let teamNameA = currentEntry.teamNameA
        let NumberOfPlayersA = currentEntry.NumberOfPlayersA
        let teamNameB = currentEntry.teamNameB
        let NumberOfPlayersB = currentEntry.NumberOfPlayersB
        dispatchGD({type: actionTypes.updatePlayerNames, payload:{id,competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,
            teamNameB,NumberOfPlayersB,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name}});
        dispatchGD({type: actionTypes.saveGameDetails})
    };

    const createTeamB = (id,PlayerB1Name,PlayerB2Name,PlayerB3Name,PlayerB4Name) => {
        const currentEntry = gameDetailsState.find((e) => e.id===ID);
        let competitonName = currentEntry.competitonName
        let date = currentEntry.date
        let rinkNumber = currentEntry.rinkNumber
        let teamNameA = currentEntry.teamNameA
        let NumberOfPlayersA = currentEntry.NumberOfPlayersA
        let teamNameB = currentEntry.teamNameB
        let NumberOfPlayersB = currentEntry.NumberOfPlayersB
        let PlayerA1Name = currentEntry.PlayerA1Name
        let PlayerA2Name = currentEntry.PlayerA2Name
        let PlayerA3Name = currentEntry.PlayerA3Name
        let PlayerA4Name = currentEntry.PlayerA4Name
        dispatchGD({type: actionTypes.updatePlayerNames, payload:{id,competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,
            NumberOfPlayersB,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name,PlayerB1Name,PlayerB2Name,PlayerB3Name,PlayerB4Name}});
        dispatchGD({type: actionTypes.saveGameDetails})
    };

    const createTotalA = (TeamATotal,callback) => {
        dispatchTA({type: actionTypes.createTotalA, payload:{TeamATotal}});
        dispatchTA({type: actionTypes.saveGameDetails})
        if (callback) callback();
    };

    const updateTotalA = (id, TeamATotal,callback) => {
        dispatchTA({type: actionTypes.updateTotalA, payload:{id, TeamATotal}});
        dispatchTA({type: actionTypes.saveGameDetails})
        if (callback) callback();
    };

    const createTotalB = (TeamBTotal,callback) => {
        dispatchTB({type: actionTypes.createTotalB, payload:{TeamBTotal}});
        dispatchTB({type: actionTypes.saveGameDetails})
        if (callback) callback();
    };

    const updateTotalB = (id, TeamBTotal,callback) => {
        dispatchTB({type: actionTypes.updateTotalB, payload:{id, TeamBTotal}});
        dispatchTB({type: actionTypes.saveGameDetails})
        if (callback) callback();
    };

    const createScores = (ScoreEnd1,callback) => {
        dispatchSE({type: actionTypes.createScores, payload:{ScoreEnd1}});
        dispatchSE({type: actionTypes.saveGameDetails})
        if (callback) callback();
    };

    const updateScores = (id,ScoreEnd1,ScoreEnd2,ScoreEnd3,ScoreEnd4,ScoreEnd5,ScoreEnd6,ScoreEnd7,ScoreEnd8,ScoreEnd9,ScoreEnd10,
        ScoreEnd11,ScoreEnd12,ScoreEnd13,ScoreEnd14,ScoreEnd15,ScoreEnd16,ScoreEnd17,ScoreEnd18,ScoreEnd19,ScoreEnd20,ScoreEnd21,ScoreEnd22,ScoreEnd23,
        ScoreEnd24,ScoreEnd25,ScoreEnd26,ScoreEnd27,ScoreEnd28,ScoreEnd29,ScoreEnd30,callback) => {
            dispatchSE({type: actionTypes.updateScores, payload:{id,ScoreEnd1,ScoreEnd2,ScoreEnd3,ScoreEnd4,ScoreEnd5,ScoreEnd6,ScoreEnd7,ScoreEnd8,ScoreEnd9,ScoreEnd10,
            ScoreEnd11,ScoreEnd12,ScoreEnd13,ScoreEnd14,ScoreEnd15,ScoreEnd16,ScoreEnd17,ScoreEnd18,ScoreEnd19,ScoreEnd20,ScoreEnd21,ScoreEnd22,ScoreEnd23,
            ScoreEnd24,ScoreEnd25,ScoreEnd26,ScoreEnd27,ScoreEnd28,ScoreEnd29,ScoreEnd30}});
        dispatchSE({type: actionTypes.saveGameDetails})
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