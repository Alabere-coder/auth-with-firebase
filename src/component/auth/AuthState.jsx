import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase.config';
import { useState, useEffect } from "react";

const AuthState = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });

        return () => {
            listen()
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successfully')
        })
    }

    
  return (
    <div>{ authUser ? <><p>{`Signed In successfully ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>You have Signed Out</p> }</div>
  )
}

export default AuthState