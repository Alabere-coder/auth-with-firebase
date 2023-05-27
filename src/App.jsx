import './App.css'
import Register from './component/auth/Register'
import SignIn from './component/auth/SignIn'
import AuthState from './component/auth/AuthState';

function App() {
  

  return (
    <>
      <SignIn />
      <Register />
      <AuthState />
    </>
  )
}

export default App
