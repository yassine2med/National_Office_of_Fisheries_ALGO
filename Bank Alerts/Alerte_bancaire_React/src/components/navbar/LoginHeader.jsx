import React from 'react'
import {Grid, AppBar, Toolbar, Typography } from '@mui/material'


const LoginHeader = () => {

  const stylnavbar={backgroundColor:'#fff' , boxShadow:'none' , borderBottom:'2px solid #e0e0e0'}
  const imgStyle={padding:10,width:250,height:80}
  const txtStyle={color:'#5c143c' } 
  
  return (
    <>
        <AppBar elevation={6} style={stylnavbar}>
            <Toolbar y>
                <Grid container>
              <Grid lg={3} sm={12} md={6}>
              <div className='grid justify-center uppercase mt-4 sm:text-2xl md:text-2xl lg:text-2xl' style={txtStyle}>
                  <img src='https://i.f1g.fr/media/cms/704x/2021/12/21/c516542b1e17cd9ad8287369cb000cf76d7f4fa2d858defc02c735ae10fd82ae.png' style={imgStyle} alt='img_navbar' />
              </div>              
              </Grid>
              <Grid lg={6} sm={12} md={6}>
                <div className='grid justify-center uppercase mt-10 sm:text-2xl sm:mb-8 md:text-2xl lg:text-2xl' style={txtStyle}>
                      <h2>Déclaration Soupçon TRACFIN</h2>
                </div>
              </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
        
    </>
  )
}

export default LoginHeader ;
    