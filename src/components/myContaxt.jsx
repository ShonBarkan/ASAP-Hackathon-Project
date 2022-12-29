import React, {useState} from "react";
import { createContext } from "react";

export const NumToAdd= createContext()

const NumMaker = (props) => {
    const {children}= props
    const [numbers , setNumbers]=useState([])
    const [tshova , setTshova]=useState(false)

    return ( <div>
    <NumToAdd.Provider value={{numbers,tshova,whatToprint}}>
        {children}
    </NumToAdd.Provider> <br />
    </div>);
}
 
export default NumMaker;
