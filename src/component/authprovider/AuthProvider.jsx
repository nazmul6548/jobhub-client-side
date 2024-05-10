import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email, password) => {
        setLoader(true)
       return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(()=>{
        const unsubscrive =onAuthStateChanged(auth, (user) => {
            // if (user) {
            setUser(user)
            // console.log(user);
            setLoader(false)
             
            // }
          });
          return () => unsubscrive();
       },[])


    const allvalue = {user,loader,createUser,login}
    return (
        <div>
        <AuthContext.Provider value={allvalue}>
         {children}
        </AuthContext.Provider>
        {/* <ToastContainer></ToastContainer> */}
     </div>
    );
};

export default AuthProvider;