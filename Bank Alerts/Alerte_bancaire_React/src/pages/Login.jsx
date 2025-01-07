import React from 'react'
import { Grid } from '@mui/material'
import LoginForm from '../components/forms/LoginForm'
import { CookiesProvider } from 'react-cookie'

const Login = () => {

  const styles = {
    image : {paddingTop:100 , paddingLeft:100}
  }

  return (

    <Grid container>
      <Grid item lg={6} sx={12} >
        <img src="http://www.delfinnetsoftware.com/wp-content/uploads/2016/08/ingenieria.png" style={styles.image} alt="logo_login"/>
      </Grid>

      <Grid item lg={6} sx={12}>
        <div className='grid justify-center'>
        <CookiesProvider>
           <LoginForm/>
        </CookiesProvider>
        </div>
      </Grid>
    </Grid>
  )
}

export default Login