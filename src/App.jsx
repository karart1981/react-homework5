import { useState } from 'react';
import { SignUp } from './SignUp';
import './App.css'

function App() {
  const [users, setUsers] = useState([
    {id:101, name:"Artur", surname: "Simonyan", login: "artsim@gmail.com"},
    {id:102, name:"Lusine", surname: "Pogkosyan", login: "lusinpogkos@gmail.com"},
    {id:103, name:"Artak", surname: "Minasyan", login: "artminas@gmail.com"},
    {id:104, name:"Karen", surname: "Qaramyan", login: "karqaram@gmail.com"},
    {id:105, name:"Armine", surname: "Petrosyan", login: "armpetros@gmail.com"},
  ])
  const handleAdd = obj =>{
    setUsers([...users, {...obj, id:Date.now()}])
  }

  return (
    <>
      <SignUp onAdd={handleAdd}/>
    </>
  )
}

export default App
