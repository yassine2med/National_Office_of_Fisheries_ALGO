import React from 'react'
import { RiUser3Fill} from 'react-icons/ri'
import {MdAdminPanelSettings} from 'react-icons/md'
import TextFieldCustom from '../TextFieldCustom';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Grid from '@mui/material/Grid';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import FaxOutlinedIcon from '@mui/icons-material/FaxOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import ButtonCustom from '../ButtonCustom';
import Typography from '@mui/material/Typography';
import { themeColors } from '../../data/variables'
import { Card } from '@material-ui/core';

const AjouterUtilisateurForm = () => {
  const [isAdmin , setIsAdmin] = React.useState(true);
  const styles = {
    title: {color : themeColors.primary,fontSize : '1.5rem'}, 
    button : {height: '60px'}
  }
  return (

    <>
<Card className='flex flex-col justify-center items-center mt-10'>
<Grid container spacing={1} >
        <Grid item xs={12} md={12} lg={12}>
          <div className='flex justify-center mt-5'>
            <Typography style={styles.title}>Ajouter nouveau utilisateur</Typography>
          </div>
            <Grid container spacing={2} >

                <div className='grid gap-5 ml-6 my-10' >

                  <div className="relative p-6 flex-auto">

                      <div className="grid grid-cols-2 gap-3 mb-3 ">
                      <ButtonCustom variant='contained' color='light' textColor='primary' text='Admin' icon={<MdAdminPanelSettings/>} handleSubmit={() => {}}/>
                      <ButtonCustom variant='contained' color='light' textColor='primary' text='DSF' icon={<RiUser3Fill/>} handleSubmit={() => {}}/>
                      </div>

                      <hr/>
                        <form class="w-full max-w-lg mt-4 gap-3">
                          <Grid container spacing={2} rowSpacing={1}>

                            <Grid item xs={12} md={6}>
                              <TextFieldCustom  icon={<PersonOutlinedIcon />} label='Nom' type='text' onChange={() => {}}/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <TextFieldCustom  icon={<PersonOutlinedIcon />} label='Prénom' type='text' onChange={() => {}}/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <TextFieldCustom  icon={<LabelOutlinedIcon />} label='' type='text' onChange={() => {}}/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <TextFieldCustom  icon={<BusinessCenterOutlinedIcon />} label='Fonction' type='text' onChange={() => {}}/>
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <TextFieldCustom  icon={<PhotoCameraFrontOutlinedIcon />} label='' type='text' onChange={() => {}}/>
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <TextFieldCustom  icon={<AlternateEmailOutlinedIcon/>} label='Email' type='email' onChange={() => {}}/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <TextFieldCustom  icon={<PhoneEnabledOutlinedIcon/>} label='Télèphone' type='number' onChange={() => {}}/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <TextFieldCustom  icon={<FaxOutlinedIcon />} label='Fax' type='number' onChange={() => {}}/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <TextFieldCustom  icon={<HttpsOutlinedIcon/>} label='Mot de passe ' type='password' onChange={() => {}}/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <TextFieldCustom  icon={<HttpsOutlinedIcon/>} label='Confimer mot de passe' type='password' onChange={() => {}}/>
                            </Grid>

                          </Grid>
                          
                      </form>

                    </div>

                    <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                        <ButtonCustom variant='contained'Externalstyle={styles.button} color='primary' text='Confirmer' icon={null} handleSubmit={() => {}}/>
                    </div>
                </div>
            
              </Grid>
            </Grid>

        </Grid>
        </Card>
            </>
  )
}

export default AjouterUtilisateurForm