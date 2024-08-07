import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProviderr'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Kunj Antala</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
