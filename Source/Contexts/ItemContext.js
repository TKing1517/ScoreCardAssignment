import react, { useEffect, useReducer } from "react";
import { actionTypes } from "../Helpers/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GameDetails_KEY = "GameDetailsPassword";


const ItemContext = react.createContext();
let gameDetails = [];

let ID;
let counter = 0;
let counterB = 0;
let End = 1;
let PhotoA;
let PhotoB;

const gameDetailsReducer = (GameDetailsState,GameDetailsAction) => {

    switch(GameDetailsAction.type){
        case actionTypes.create:
            return [
                ...GameDetailsState,
                {
                    id: ID = Math.floor(Math.random()*999999),
                    competitonName: GameDetailsAction.payload.competitonName,
                    date: new Date().toUTCString(),
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
                    TeamATotal: GameDetailsAction.payload.TeamATotal,
                    TeamBTotal: GameDetailsAction.payload.TeamBTotal,
                    Scores: []
                }
        ];
        case actionTypes.updateGameDetails:
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
        case actionTypes.delete:
            return GameDetailsState.filter((e) => e.id !==GameDetailsAction.payload.id);
        case actionTypes.loadGameDetails:
            return [
                ...GameDetailsState, {
                    id: GameDetailsAction.payload.id,
                    competitonName: GameDetailsAction.payload.competitonName,
                    date: GameDetailsAction.payload.date,
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
                    TeamATotal: GameDetailsAction.payload.TeamATotal,
                    TeamBTotal: GameDetailsAction.payload.TeamBTotal,
                    Scores: GameDetailsAction.payload.Scores,
                }
            ]
        default:
            return GameDetailsState;
    };
};




export const ItemProvider = ({children}) => {
    const [gameDetailsState, dispatchGD] = useReducer(gameDetailsReducer,gameDetails);


    const createGame = (competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB) => {
        dispatchGD({type: actionTypes.create, payload:{competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB}});
        dispatchGD({type: actionTypes.saveGameDetails})
     
    };
    
    useEffect(() => {
        const loadGameDetails = async () => {
            const storage = await AsyncStorage.getItem(GameDetails_KEY);
            if (storage !== null && gameDetailsState.length === 0) {
                gameDetails = JSON.parse(storage);
                gameDetails.forEach(element => {
                    dispatchGD({type: actionTypes.loadGameDetails, payload: element});
                })
            }
        }
        loadGameDetails();
    },[GameDetails_KEY])

    const createTeamA = (id,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name) => {
        const currentEntry = gameDetailsState.find((e) => e.id===ID);
        let competitonName = currentEntry.competitonName
        let date = currentEntry.date
        let rinkNumber = currentEntry.rinkNumber
        let teamNameA = currentEntry.teamNameA
        let NumberOfPlayersA = currentEntry.NumberOfPlayersA
        let teamNameB = currentEntry.teamNameB
        let NumberOfPlayersB = currentEntry.NumberOfPlayersB
        dispatchGD({type: actionTypes.updateGameDetails, payload:{id,competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,
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
        dispatchGD({type: actionTypes.updateGameDetails, payload:{id,competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,
            NumberOfPlayersB,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name,PlayerB1Name,PlayerB2Name,PlayerB3Name,PlayerB4Name}});
        dispatchGD({type: actionTypes.saveGameDetails})
    };



    const updateTotalA = (id, TeamATotal,Scores,callback) => {
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
        let PlayerB1Name = currentEntry.PlayerB1Name
        let PlayerB2Name = currentEntry.PlayerB2Name
        let PlayerB3Name = currentEntry.PlayerB3Name
        let PlayerB4Name = currentEntry.PlayerB4Name
        if (currentEntry.TeamBTotal !== null){
            let TeamBTotal = currentEntry.TeamBTotal
            dispatchGD({type: actionTypes.updateGameDetails, payload:{id,competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,
                NumberOfPlayersB,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name,PlayerB1Name,PlayerB2Name,
                PlayerB3Name,PlayerB4Name, TeamATotal,TeamBTotal,Scores}});
        } else {
            dispatchGD({type: actionTypes.updateGameDetails, payload:{id,competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,
                NumberOfPlayersB,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name,PlayerB1Name,PlayerB2Name,
                PlayerB3Name,PlayerB4Name, TeamATotal,Scores}});
        }
        
        dispatchGD({type: actionTypes.saveGameDetails})
        if (callback) callback();
    };

    const updateTotalB = (id,TeamBTotal,Scores,callback) => {
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
        let PlayerB1Name = currentEntry.PlayerB1Name
        let PlayerB2Name = currentEntry.PlayerB2Name
        let PlayerB3Name = currentEntry.PlayerB3Name
        let PlayerB4Name = currentEntry.PlayerB4Name
        if (currentEntry.TeamATotal !== null){
            let TeamATotal = currentEntry.TeamATotal
            dispatchGD({type: actionTypes.updateGameDetails, payload:{id,competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,
                NumberOfPlayersB,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name,PlayerB1Name,PlayerB2Name,
                PlayerB3Name,PlayerB4Name, TeamATotal,TeamBTotal,Scores}});
        } else {
            dispatchGD({type: actionTypes.updateGameDetails, payload:{id,competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,
                NumberOfPlayersB,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name,PlayerB1Name,PlayerB2Name,
                PlayerB3Name,PlayerB4Name, TeamBTotal,Scores}});
        }
        dispatchGD({type: actionTypes.saveGameDetails})
        if (callback) callback();
    };

    const deleteDetails= (id, callback) => {
        dispatchGD({type:actionTypes.delete, payload: {id:id}});
        dispatchGD({type:actionTypes.saveGameDetails});
        if (callback) callback();
    }

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

    const NewPhotoA =(NewURI,callback) => {
        console.log(NewURI)
        PhotoA = NewURI;
        console.log("soemthing A: " + PhotoA)
        if (callback) callback();
    }

    const GetPhotoA = () => {
        return(
            PhotoA
        )
    }

    const NewPhotoB =(NewURI,callback) => {
        PhotoB = NewURI
        console.log("soemthing B: " + PhotoB)
        if (callback) callback();
    }

    const GetPhotoB = () => {
        return(
            PhotoB
        )
    }

    const resetValues =(callback) => {
        End = 1;
        counter=0;
        counterB=0;
        if (callback) callback();
    }

    const EditResults =(id,teamATotal,teamBTotal, callback) => {
        const currentEntry = gameDetailsState.find((e) => e.id===id);
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
        let PlayerB1Name = currentEntry.PlayerB1Name
        let PlayerB2Name = currentEntry.PlayerB2Name
        let PlayerB3Name = currentEntry.PlayerB3Name
        let PlayerB4Name = currentEntry.PlayerB4Name
        let TeamATotal = teamATotal
        let TeamBTotal =teamBTotal
        let Scores = currentEntry.Scores
        dispatchGD({type: actionTypes.updateGameDetails, payload:{id,competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,
            NumberOfPlayersB,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name,PlayerB1Name,PlayerB2Name,
            PlayerB3Name,PlayerB4Name,TeamATotal,TeamBTotal,Scores}});
        dispatchGD({type: actionTypes.save});
        if (callback) callback();
    }

    
    return (
        <ItemContext.Provider value={{
            GameDetailsState:gameDetailsState,
            ID,
            counter,
            counterB,
            End,
            PhotoA,
            PhotoB,
            create: createGame,
            createTeamA: createTeamA,
            createTeamB: createTeamB,
            updateTotalA: updateTotalA,
            updateTotalB: updateTotalB,
            incrementCounter: incrementCounter,
            incrementCounterB: incrementCounterB,
            incrementEnd: incrementEnd,
            deleteDetails: deleteDetails,
            EditResults: EditResults,
            resetValues:resetValues,
            NewPhotoA:NewPhotoA,
            NewPhotoB:NewPhotoB,
            GetPhotoA:GetPhotoA,
            GetPhotoB:GetPhotoB,
            }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;