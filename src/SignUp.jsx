import {useState} from 'react';

export const SignUp = ({onAdd}) => {
    const [user,setUser] = useState({name:"",surname:"",login:"",password:""})
    const [error,setError] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        if(!user.name.trim()){
            return setError("Please write your name")
        } else if(!user.surname.trim()){
            return setError("Please write your surname")
        } else if(!user.login.trim()){
            return setError("Please write your login")
        } else if(!user.password.trim()){
            return setError("Please write your password")
        }
        onAdd(user);
        setUser({name:"",surname:"",login:"",password:""})
        setError("");
    }
   return (
    <div>
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
                {error && <p style={{color:"red"}}>{error}</p>}
                <input 
                placeholder="name"
                value={user.name}
                onChange={e=>setUser({...user, name: e.target.value})}
                />
                <input 
                placeholder="surname"
                value={user.surname}
                onChange={e=>setUser({...user, surname: e.target.value})}
                />
                <input 
                placeholder="login"
                value={user.login}
                onChange={e=>setUser({...user, login: e.target.value})}
                />
                <input 
                placeholder="password"
                value={user.password}
                onChange={e=>setUser({...user, password: e.target.value})}
                />
                <button style={{backgroundColor:"mediumpurple",color:"#fff"}}>Save</button>
            </form>
 
    </div>
   )
}