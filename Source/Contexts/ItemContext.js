import react from "react";


const ItemContext = react.createContext();

export const ItemProvider = ({children}) => {

    return (
        <ItemContext.Provider value={{}}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;