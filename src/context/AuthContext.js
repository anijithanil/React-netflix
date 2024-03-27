import {createContext, useState} from 'react'
import React from 'react'
import { db } from '../Firebase/config'
import {doc,setDoc} from 'firebase/firestore'

export const AuthContext = createContext(null)
export function Context({children}){
    const [user,setUser] = useState(null)
    return(
    <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
    )
}