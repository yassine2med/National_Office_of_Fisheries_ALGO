import React from 'react'
import TextFieldCustom from '../TextFieldCustom';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Grid from '@mui/material/Grid';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import FaxOutlinedIcon from '@mui/icons-material/FaxOutlined';
import ButtonCustom from '../ButtonCustom';
import Typography from '@mui/material/Typography';


const ModifierUtilisateurForm = () => {

  return (

    <>
            <div className="border-0 rounded-lg shadow-lg mt-8  relative flex flex-col bg-white outline-none focus:outline-none">
                <div className="grid place-items-center p-5 border-b border-solid border-slate-200 rounded-t ">
                    <Typography variant="h5" style={{color:'#7f1d1d'}} className='font-bold capitalize'component="h5" >Modifier utilisateur</Typography>
                </div>  
                <div className="relative p-6 flex-auto">
                
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
                            
                          </Grid>
                          
                      </form>
                </div>
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                      <ButtonCustom variant='contained' color='#7f1d1d' text='Confirmer' icon={null} handleSubmit={() => {}}/>
                </div>
          </div>
            </>
  )
}

export default ModifierUtilisateurForm