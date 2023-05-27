import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { auth } from '../../firebase.config'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })

    }

  return (
    <div>
        <form onSubmit={signIn}>
            <h1>Please Log In</h1>
            <hr />
            <input type="email" placeholder="Enter your email" 
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder="Enter your password" 
            value={password}
            onChange = {(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default SignIn