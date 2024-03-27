import React,{useState} from "react";
import { createContext } from "react";

export const likedMovieContext =createContext(null)

export function LikedMovieProvider({children}){
    const [likedMovie,setLikedMovie] = useState([])
    return(
        <likedMovieContext.Provider value={{likedMovie,setLikedMovie}}>
            {children}
        </likedMovieContext.Provider>
    )
}