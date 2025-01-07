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
import { themeColors } from '../../data/variables';

import { Dialog , DialogTitle } from '@mui/material';

export default function AjouterUtilisateurModal({isOpen ,  toggle, handleSubmitClick}) {
  
  const styles = {
    title: {
      color : themeColors.primary,
      fontSize : '1.5rem',
      
    }
  }

  return (
    <Dialog  onClose={toggle} open={isOpen} fullWidth>
      <Grid container spacing={1} >
        <Grid item xs={12} md={12} lg={12}>
          <div className='flex justify-center'>
            <DialogTitle style={styles.title}>Modifier utilisateur</DialogTitle>
          </div>
            <Grid container spacing={2} >

                <div className='grid gap-5 ml-6 my-5' >
                  <div className="relative p-6 flex-auto">
                
                <form class="w-full max-w-lg  gap-3">
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
                        <ButtonCustom variant='contained' color='primary' text='Confirmer' icon={null} handleSubmit={() => {}}/>
                    </div>
                </div>
            
              </Grid>
            </Grid>

        </Grid>
    </Dialog>
  );
}
