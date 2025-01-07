import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useState , useEffect} from 'react';
import { Grid, TextField , Card , CardContent, DialogContent } from '@mui/material';
import TextFieldCustom from '../TextFieldCustom';
import ButtonCustom from '../ButtonCustom';
import { demandeModele } from '../../data/demande-modele';
import { relanceModele } from '../../data/relance-modele';
import { themeColors } from '../../data/variables';

export default function DemandeModal({isOpen ,  toggle, handleSubmitClick ,type }) {
  
  const [descriptionValue , setDescriptionValue] = useState('');
  const fillDescription = (e) => { console.log(e.target.value); setDescriptionValue(e.target.value) }
  const [modeles , setModeles] = useState([]);

  useEffect(() => {
      if(type == 'initial-demande')  setModeles(demandeModele);
      if(type == 'relance-demande') setModeles(relanceModele);
    }
    ,[]);

  const styles = {
    title: {
      color : themeColors.primary,
      fontSize : '1.5rem',
      
    }
  }

  return (
    <Dialog  onClose={toggle} open={isOpen} fullWidth maxWidth='lg'>
      <Grid container spacing={1} >
        <Grid item xs={12} md={7} lg={7}>
          {
            type == 'initial-demande' ?
            <DialogTitle style={styles.title}>Demande d'information complémentaires</DialogTitle>
            :
            <DialogTitle style={styles.title}>Relance de demande d'information complémentaires</DialogTitle>
          }
            <Grid container spacing={2} >
              <Grid item xs={12} md={12} lg={12}>

                <div className='grid gap-5 ml-6 my-10' >
                  <Grid item xs={12} md={12}>
                    <TextFieldCustom  label='Email' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextFieldCustom label='Destinataire' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextFieldCustom label='Objet' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextFieldCustom  type='file' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                        sx={{
                            "& .MuiInputLabel-root": {color: 'black'},
                            '& label.Mui-focused': { color: themeColors.primary},
                            "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "black" },
                            "&:hover fieldset": { borderColor: themeColors.primary },
                            "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                          }}}
                        placeholder='Description'
                        fullWidth multiline minRows={7} 
                        label='Description' 
                        type='text'
                        onChange={fillDescription}
                        value={descriptionValue}/>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className='flex flex-nowrap gap-3'>
                      <ButtonCustom text='Envoyer' variant='contained' color = 'success' size="large" Externalstyle={{height:55}} textColor="white"/>
                      <ButtonCustom text='Annuler' handleSubmit={toggle} variant='contained' color='danger' Externalstyle={{height:55}} textColor="white"/>
                    </div>
                    </Grid>
                </div>
            
              </Grid>
            </Grid>

        </Grid>

        <Grid item xs={12} md={5} lg={5}>
          <div className='grid justify-center'>
            <DialogTitle style={styles.title}>Modèles de demandes</DialogTitle>
          </div>
          <div className='grid gap-3 ml-6 my-6' style={{ borderLeft: '1px solid black', padding: '0.5em' }}>
          {modeles.map((snap) => (
            <Card sx={{ minWidth: 275 }}  style={{backgroundColor:'#e6e6ff'}}>
              <CardContent >
              <Grid item xs={12} md={12}>
                    <TextField
                         defaultValue={snap}
                         sx={{
                          "& .MuiInputLabel-root": {color: 'black' },                          
                          "& .MuiOutlinedInput-root": {
                          "& > fieldset": {border : '0px'},},
                      }}

                        InputLabelProps={{ shrink: true }}
                        fullWidth  multiline minRows={7} type='text' onClick={(e) => fillDescription(e)} disabled onChange={() => {}}/>
                  </Grid>
             
              </CardContent>
            </Card>
            ))}
          </div>
        </Grid>

      </Grid> 

    </Dialog>
  );
}

DemandeModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
