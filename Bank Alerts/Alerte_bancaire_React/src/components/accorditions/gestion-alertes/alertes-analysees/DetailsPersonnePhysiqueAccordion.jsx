import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { Grid } from '@mui/material'; 
import DatePickerCustom from '../../../DatePickerCustom';
import { themeColors } from '../../../../data/variables';
import { FormControl , InputLabel , Select , TextField , Divider ,FormControlLabel , Checkbox } from '@mui/material';
import { MenuItem } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import ChipCustom  from './ChipCustom';

export default function DetailsPersonnePhysiqueAccordion({style}) {

  const [selectValueSecteur , setSelectValueSecteur] = useState('');
  const [selectValueTypeAdresse , setSelectValueTypeAdresse] = useState('');
  const [selectValueTypeVoie , setSelectValueTypeVoie] = useState('');
  const [selectValueSecteurAdresse , setSelectValueSecteurAdresse] = useState('');
  const [selectValueNationalite , setSelectValueNationalite] = useState('');
  const [selectValueSituationFamiliale , setSelectValueSituationFamiliale] = useState('');
  const [selectValuePays , setSelectValuePays] = useState('');



  const theme = createMuiTheme({
    palette: {
       primary: {
          main: themeColors.primary,
       },
       secondary: {
         main: themeColors.secondary,
       },
    },
    typography: { 
       useNextVariants: true
    }
   });

  const styles = {dividerStyle : { color : themeColors.primary}};

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6'style={style.accordionTitle} > Détails personne physique </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="relative px-5 flex-auto ">

        {/* Identification */}

          <div id='identification '>
            <div className='font-bold mb-7'>
            <Divider style={styles.dividerStyle}>Identification</Divider>
            </div>
            <form class="gap-3">
                <Grid container spacing={2} rowSpacing={2}>

                  <Grid item xs={6} md={4}>
                    <TextFieldCustom label='Nom de naissance' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={4}>
                    <TextFieldCustom label='Prénom' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={4}>
                    <DatePickerCustom label="Date de naissance" type='date' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={4}>
                    <TextFieldCustom label="Lieu de naissance" type='text' onChange={() => {}}/>
                  </Grid>


                  <Grid item xs={6} md={4}>
                    <FormControl fullWidth
                    sx={{
                        "& .MuiInputLabel-root": {color: 'black'},
                        '& label.Mui-focused': { color: themeColors.primary},
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "black" },
                          "&:hover fieldset": { borderColor: themeColors.primary },
                          "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                        }}}>
                        <InputLabel >Nationalité</InputLabel>
                        <Select
                            className='inline-block'
                            value={selectValueNationalite}
                            placeholder='Nationalité'
                            label="Nationalité"
                            onChange={(e =>setSelectValueNationalite(e.target.value))}
                        >
                            
                            <MenuItem value={10}>EURL</MenuItem>
                            <MenuItem value={20}>EURL 1</MenuItem>
                            <MenuItem value={30}>EURL 2</MenuItem>
                            
                        </Select>
                        </FormControl>
                  </Grid>



                  <Grid item xs={6} md={4}>
                    <FormControl fullWidth
                    sx={{
                        "& .MuiInputLabel-root": {color: 'black'},
                        '& label.Mui-focused': { color: themeColors.primary},
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "black" },
                          "&:hover fieldset": { borderColor: themeColors.primary },
                          "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                        }}}>
                        <InputLabel >Situation familiale</InputLabel>
                        <Select
                            className='inline-block'
                            value={selectValueSituationFamiliale}
                            placeholder='Situation familiale'
                            label="Situation familiale"
                            onChange={(e =>setSelectValueSituationFamiliale(e.target.value))}
                        >
                            
                            <MenuItem value={10} >EURL</MenuItem>
                            <MenuItem value={20}>EURL 1</MenuItem>
                            <MenuItem value={30}>EURL 2</MenuItem>
                            
                        </Select>
                        </FormControl>
                  </Grid>

                  <Grid item xs={6} md={4}>
                    <FormControl fullWidth
                    sx={{
                        "& .MuiInputLabel-root": {color: 'black'},
                        '& label.Mui-focused': { color: themeColors.primary},
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "black" },
                          "&:hover fieldset": { borderColor: themeColors.primary },
                          "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                        }}}>
                        <InputLabel >Secteur professionnel</InputLabel>
                        <Select
                            className='inline-block'
                            value={selectValueSecteur}
                            placeholder='Secteur professionnel'
                            label="Secteur professionnel"
                            onChange={(e =>setSelectValueSecteur(e.target.value))}
                        >
                            
                            <MenuItem value={10} >EURL</MenuItem>
                            <MenuItem value={20}>EURL 1</MenuItem>
                            <MenuItem value={30}>EURL 2</MenuItem>
                            
                        </Select>
                        </FormControl>
                  </Grid>               

                  <Grid item xs={6} md={4}>
                    <TextFieldCustom label='Activité professionnelle 1' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={4}>
                    <TextFieldCustom label='Activité professionnelle 2' type='text' onChange={() => {}}/>
                  </Grid>

                  </Grid>
            </form>
          </div>
        
        {/* Adresse */}

          <div id='adresse'>
            <div className='font-bold mt-20 mb-7'>
            <Divider style={styles.dividerStyle}>Adresse</Divider>
            </div>
            <form class="gap-3">
                <Grid container spacing={2} rowSpacing={2}>

                  <Grid item xs={6} md={3}>
                    <FormControl fullWidth
                    sx={{
                        "& .MuiInputLabel-root": {color: 'black'},
                        '& label.Mui-focused': { color: themeColors.primary},
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "black" },
                          "&:hover fieldset": { borderColor: themeColors.primary },
                          "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                        }}}>
                        <InputLabel >Type d'adresse</InputLabel>
                        <Select
                            className='inline-block'
                            value={selectValueTypeAdresse}
                            placeholder="Type d'adresse"
                            label="Type d'adresse"
                            onChange={(e =>setSelectValueTypeAdresse(e.target.value))}
                        >
                            
                            <MenuItem value={10} >Adresse 1</MenuItem>
                            <MenuItem value={20}> Adresse 2</MenuItem>
                            <MenuItem value={30}>Adresse 3</MenuItem>
                            
                        </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6} md={3}>
                    <FormControl fullWidth
                    sx={{
                        "& .MuiInputLabel-root": {color: 'black'},
                        '& label.Mui-focused': { color: themeColors.primary},
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "black" },
                          "&:hover fieldset": { borderColor: themeColors.primary },
                          "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                        }}}>
                        <InputLabel >Type de Voie</InputLabel>
                        <Select
                            className='inline-block'
                            value={selectValueTypeVoie}
                            placeholder='Type de Voie'
                            label="Type de Voie"
                            onChange={(e =>setSelectValueTypeVoie(e.target.value))}
                        >
                            
                            <MenuItem value={10} >Boulvard</MenuItem>
                            <MenuItem value={20}>Boulvard 1</MenuItem>
                            <MenuItem value={30}>Boulvard 2</MenuItem>
                            
                        </Select>
                        </FormControl>
                  </Grid>

                  <Grid item xs={6} md={3}>
                    <TextFieldCustom label='N° voie' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={3}>
                    <FormControl fullWidth
                    sx={{
                        "& .MuiInputLabel-root": {color: 'black'},
                        '& label.Mui-focused': { color: themeColors.primary},
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "black" },
                          "&:hover fieldset": { borderColor: themeColors.primary },
                          "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                        }}}>
                        <InputLabel >Secteur</InputLabel>
                        <Select
                            className='inline-block'
                            value={selectValueSecteurAdresse}
                            placeholder='Secteur'
                            label="Secteur"
                            onChange={(e =>setSelectValueSecteurAdresse(e.target.value))}
                        >
                            
                            <MenuItem value={10} >Boulvard</MenuItem>
                            <MenuItem value={20}>Boulvard 1</MenuItem>
                            <MenuItem value={30}>Boulvard 2</MenuItem>
                            
                        </Select>
                        </FormControl>
                  </Grid>
                  
                  <Grid item xs={6} md={4}>
                    <TextFieldCustom label='Voie' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={4}>
                    <TextFieldCustom label='Complément' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={4}>
                    <TextFieldCustom label='Code postal' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <TextFieldCustom label='Ville' type='text' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <FormControl fullWidth
                    sx={{
                        "& .MuiInputLabel-root": {color: 'black'},
                        '& label.Mui-focused': { color: themeColors.primary},
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "black" },
                          "&:hover fieldset": { borderColor: themeColors.primary },
                          "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                        }}}>
                        <InputLabel >Pays</InputLabel>
                        <Select
                            className='inline-block'
                            value={selectValuePays}
                            placeholder='Pays'
                            label="Pays"
                            onChange={(e =>setSelectValuePays(e.target.value))}
                        >
                            
                            <MenuItem value={10} >France</MenuItem>
                            <MenuItem value={20}>Canada</MenuItem>
                            <MenuItem value={30}>Maroc</MenuItem>
                            
                        </Select>
                        </FormControl>
                  </Grid>
                  
                  <Grid item xs={6} md={3}>
                    <TextFieldCustom label='Téléphone' type='number' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={3}>
                    <TextFieldCustom label='Mobile' type='number' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={3}>
                    <TextFieldCustom label='Fax' type='number' onChange={() => {}}/>
                  </Grid>

                  <Grid item xs={6} md={3}>
                    <TextFieldCustom label='Email' type='email' onChange={() => {}}/>
                  </Grid>
                  </Grid>
            </form>
          </div>

        {/* Observation */}

          <div id='observation'>
            <div className='font-bold mt-20 mb-7'>
            <Divider style={styles.dividerStyle}>Observation</Divider>
            </div>
            <form class="gap-3">
              <Grid container spacing={2} rowSpacing={2}>
                <Grid item xs={6} md={4}>
                
                  <TextFieldCustom label="Revenu" type='text' onChange={() => {}}/>
                </Grid>
                
                <Grid item xs={6} md={4}>
                  <TextFieldCustom label='Origine de la relation' type='text' onChange={() => {}}/>
                </Grid>

                <Grid item xs={6} md={4}>
                  <TextFieldCustom label='Lien avec d’autres clients' type='text' onChange={() => {}}/>
                </Grid>

                <Grid item xs={6} md={4}>
                  <TextFieldCustom label='Contrôle Worldcheck' type='text' onChange={() => {}}/>
                </Grid>

                <Grid item xs={8} md={8}>
                  <ChipCustom/>
                </Grid>

                <Grid item xs={12} md={12} >
                  <div className='ml-2'>
                    <FormControlLabel className='my-3' control={<MuiThemeProvider theme = { theme }><Checkbox/></MuiThemeProvider>} label="  Il s'agit d'une personne politiquement exposée" />
                  </div>                          
                </Grid>

                </Grid>
          </form>
          </div>

        </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
