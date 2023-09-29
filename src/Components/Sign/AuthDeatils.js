import React, { useEffect, useState} from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
const AuthDeatils = () => {

    const [authUser , setAuthUser] = useState(null);

    useEffect(() => {
        const listen= onAuthStateChanged(auth , (user)=>{
            if(user){
                setAuthUser(user)
            } else{
               setAuthUser(null);
            }
        });
        return ()=>{
            listen();
        }
    },[]);

    const signout = async () =>{
        try{
         const user=await signOut(auth);
         console.log('hogaya sign out');
        } catch(error){
          console.log(error.message);
        }
      };  

  return (
    <div>
     { authUser ? <><p>{`sign in hogaya as ${authUser.email}`}</p> <button onClick={signout}>Sign Out</button> </> : <p>Sign out kar lo</p> }
    </div>
  )
}

export default AuthDeatils
