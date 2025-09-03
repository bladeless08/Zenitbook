import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
  const [{}, dispatch] = useStateValue();

    const signIn = () => {
        // Sign in logic here
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
            console.log(result.user)
        })
        .catch(error => alert(error.message))
    };
  return (
    <div className='login'>
        <div className='login__logo'>

        <img src="https://wallpapers-clan.com/wp-content/uploads/2025/08/zenitsu-peeking-through-hole-desktop-wallpaper-preview.jpg" alt="Zenitbook Logo"/>
        </div>

        <div className='login__text'>
        <img src="https://images.cooltext.com/5738432.png" alt="Text Logo"/>
        </div>
        
        <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login