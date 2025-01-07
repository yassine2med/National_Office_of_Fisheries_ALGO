import React, { createContext , useContext , useState } from "react";

const StateContext = createContext();

const initialState = {
    messages : false,
    settings : false,
    userProfile : false,
    notifications : false,
    isSideBarOpen : false,
    isSideBarActive : false, 
}

export const ContextProvider = ({children}) => {
    
    const [activeMenu , setActiveMenu] = useState(true);
    const [isClicked , setIsClicked] = useState(initialState);
    const [screenSize , setScreenSize] = useState(undefined);
    const [isModalOpen , setModalOpen] = useState(false);
    const [connected , setConnected] = useState(false);

    const [currentUser , setCurrentUser] = useState({username :"delubac" , password : "delubac" , remember : false});

    const handleClick = (e) => {
        setIsClicked({[e] : true })
    }
            return (
        <StateContext.Provider 
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            screenSize,
            setScreenSize,
            handleClick,
            isModalOpen,
            setModalOpen,
            connected,
            setConnected, 
            currentUser,
            setCurrentUser,

        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useContextState = () => useContext(StateContext);