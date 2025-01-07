import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { themeColors } from '../../../../data/variables';
import DatePickerCustom from '../../../DatePickerCustom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
import { Grid , FormControl , Select , InputLabel, TextField, Accordion , AccordionDetails , AccordionSummary , Typography ,FormControlLabel , Checkbox, Divider } from '@mui/material';

const styles = {dividerStyle : { color : themeColors.primary}};
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

export default function DetailsPersonneMoraleAccordion({style}){
  const [selectValue , setSelectValue] = useState('');

  return (
    <div>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant='h6'style={style.accordionTitle}> Détails personne physique </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="relative px-5 flex-auto">
                <form class="gap-3">
                   

                    <Grid container spacing={2}>    
                            <Grid item xs={12} md={12}>
                               <div className='font-bold mb-7'>
                                 <Divider style={styles.dividerStyle}>Identification</Divider>
                               </div>
                                </Grid>
                            </Grid>

                        <Grid container spacing={2}>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Nom de naissance" type='text' />
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='Prenom' type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <DatePickerCustom label="Date d'immatriculation" type='date' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Lieux de naissance" type='text' onChange={() => {}}/>
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
                                value={selectValue}
                                placeholder='Nationalité'
                                label="Nationalité"
                                onChange={(e =>setSelectValue(e.target.value))}
                            >
                                
                                <MenuItem value={10} >Maroc</MenuItem>
                                <MenuItem value={20}>France</MenuItem>
                                <MenuItem value={30}>Canada</MenuItem>
                                <MenuItem value={40}>Allemagne</MenuItem>
                                
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
                                value={selectValue}
                                placeholder='Situation familiale'
                                label="Situation familiale"
                                onChange={(e =>setSelectValue(e.target.value))}
                            >
                                
                                <MenuItem value={10} >Celebataire</MenuItem>
                                <MenuItem value={20}>Marié(e)</MenuItem>
                                <MenuItem value={30}>Divorcé(e)</MenuItem>
                                
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
                                value={selectValue}
                                placeholder='Pays de destination des fonds'
                                label="Pays de destination des fonds"
                                onChange={(e =>setSelectValue(e.target.value))}
                            >
                                
                                <MenuItem value={10} >Droit</MenuItem>
                                <MenuItem value={20}>Envirennement</MenuItem>
                                <MenuItem value={30}>Création</MenuItem>
                                <MenuItem value={40}>Immobilier</MenuItem>
                                
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


                              <div className='font-bold my-7'>
                                   <Divider style={styles.dividerStyle}>Adresse</Divider>
                              </div>
                            
                        
                        <Grid container spacing={2}>
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
                            <InputLabel >Type d'adresse</InputLabel>
                            <Select
                                className='inline-block'
                                value={selectValue}
                                placeholder='Pays de destination des fonds'
                                label="Pays de destination des fonds"
                                onChange={(e =>setSelectValue(e.target.value))}
                            >
                                
                                <MenuItem value={10} >Adresse domicile</MenuItem>
                                <MenuItem value={20}>Adresse fiscale</MenuItem>
                                <MenuItem value={30}>Adresse postale</MenuItem>
                                
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
                            <InputLabel >Type de voie</InputLabel>
                            <Select
                                className='inline-block'
                                value={selectValue}
                                placeholder='Pays de destination des fonds'
                                label="Pays de destination des fonds"
                                onChange={(e =>setSelectValue(e.target.value))}
                            >
                                
                                <MenuItem value={10} >Alée</MenuItem>
                                <MenuItem value={20}>Avenue</MenuItem>
                                <MenuItem value={30}>Bois</MenuItem>
                                
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='N° de voie' type='text' onChange={() => {}}/>
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
                            <InputLabel >Complément N° Voie</InputLabel>
                            <Select
                                className='inline-block'
                                value={selectValue}
                                placeholder='Complément N° Voie'
                                label="Complément N° Voie"
                                onChange={(e =>setSelectValue(e.target.value))}
                            >
                                
                                <MenuItem value={10} >Bis</MenuItem>
                                <MenuItem value={20}>Ter</MenuItem>
                                <MenuItem value={30}>Quater</MenuItem>
                                
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='voie' type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='Complément' type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='Code postale' type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='Ville' type='text' onChange={() => {}}/>
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
                            <InputLabel >Pays</InputLabel>
                            <Select
                                className='inline-block'
                                value={selectValue}
                                placeholder='Pays'
                                label="Pays"
                                onChange={(e =>setSelectValue(e.target.value))}
                            >
                                
                                <MenuItem value={10} >Maroc</MenuItem>
                                <MenuItem value={20}>France</MenuItem>
                                <MenuItem value={30}>Canada</MenuItem>
                                <MenuItem value={40}>Allemagne</MenuItem>
                                
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='Teléphone' type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='Mobile' type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='Fax' type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='Email' type='text' onChange={() => {}}/>
                        </Grid>
                        </Grid>

                        
                               <div className='font-bold my-7'>
                              <Divider style={styles.dividerStyle}>Observations</Divider>
                               </div>
                            

                    <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Chiffre d'affaires" type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Origine de la relation" type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Lien avec d’autres clients" type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Contrôle Worldcheck" type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={8}>
                            <TextFieldCustom label="Pays Principaux flux" type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={12}>
                        <FormControlLabel className='my-3' control={<MuiThemeProvider theme = { theme }><Checkbox/></MuiThemeProvider>} label="Il s'agit d'une personne politiquement exposée" />
                        </Grid>
                    </Grid>

                        
                </form>
            </div>
        </AccordionDetails>
    </Accordion>
    </div>
  )
}