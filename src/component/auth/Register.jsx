import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { auth } from '../../firebase.config'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })

    }

  return (
    <div>
        <form onSubmit={register}>
            <h2>ALABERE</h2>
            <h1>Register with us</h1>
            <hr />
            <input type="email" placeholder="Enter your email" 
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder="Enter your password" 
            value={password}
            onChange = {(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default Register