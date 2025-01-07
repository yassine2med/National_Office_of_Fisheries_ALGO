import React , {useState} from 'react'
import {Paper,Button,FormControlLabel,Checkbox , Alert , AlertTitle} from '@mui/material' 
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import {themeColors} from '../../data/variables'
import TextFieldCustom from '../TextFieldCustom'
import {Navigate} from 'react-router-dom';
import { useContextState } from '../../contexts/ContextProvider'
import { useCookies } from "react-cookie";


const LoginForm= () => {

  const [user , setUser] = useState({username:'',pass:'',remember:false})
  const [checked , setChecked] = React.useState(false)
  const {setConnected , setCurrentUser , currentUser} = useContextState(); 
  const [cookie, setCookie] = useCookies(["user"]);
  const [userc , setUserc] = useState(currentUser)
  const [messageError , setMessageError] = useState('')


  const styles = {
    paper: { padding:20,margin:'20px auto',width:500,height:370,color:'#4F1537' },
    paperError : { padding:20,margin:'20px auto',width:500,height:80,color:'#4F1537',backgroundColor:'#FFEBEB' },
    input: {marginBottom:20,marginTop:10},
    button: { color:'#fff',backgroundColor:themeColors.primary ,marginTop:20,height:55},
    checkbox: {color : themeColors.primary}
  } 



  const signIn = () => {
    //here you can add the axios service to login the user and check if credentials are correct , i used only static data for this example
    if(user.username == "delubac" && user.pass == "delubac"){

        setConnected(true)
        setCookie('user', user)
        setCurrentUser({username : user.username , pass : 'delubac' , remember : user.remember})

        //modify the currentUser state in the context to the user that is logged in
        setUserc(currentUser)

        cookie.user == userc ? console.log("true") : console.log("false")

        //add user to localstorage
        localStorage.setItem('user',JSON.stringify(user))

        // currentUser.remember ? localStorage.setItem('user',JSON.stringify(currentUser)) : localStorage.removeItem('user')
    }
    else{
      setConnected(false)
      setMessageError('Username ou mot de passe incorrect')
    }
  }

  const handleChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleCheckbox = () => {
    setChecked(!checked)
    setUser({...user,remember:checked})
  }


  
  return (
    <>
      <div className='grid place-items-center m-20'>
        {
          messageError !== '' ? (
            <Paper style={styles.paperError}>
                <Alert severity="error" ><AlertTitle>{messageError}</AlertTitle></Alert>
            </Paper>
          ) : null
        }
          <Paper elevation={6} style={styles.paper} >
                <h1 className='grid justify-center sm:justify-center font-bold text-2xl mb-9'> Se Connecter </h1>
                <div className='grid gap-3'>
                  <TextFieldCustom style={styles.input} label='Username' name="username" color="primary" textColor="white" handleChange={(e) => handleChange(e)} icon={<PersonIcon />}/>
                  <TextFieldCustom style={styles.input} type="password" name="pass" label='Password' color="primary" handleChange={(e) => handleChange(e)} textColor="white" icon={<LockIcon />}/>
                  <FormControlLabel control={<Checkbox name="remember" onChange={() => handleCheckbox()} style={styles.checkbox}/>} label="Se souvenir de moi" />
                </div>
                <Button type='submit' variant="contained" style={styles.button} onClick={() => signIn()}  fullWidth>Se connecter</Button>
            </Paper>
      </div>
      
    </>
  )
}

export default LoginForm