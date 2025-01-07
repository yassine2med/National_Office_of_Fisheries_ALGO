import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { Grid , FormControl , Select , InputLabel, Divider } from '@mui/material'; 
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { themeColors } from '../../../../data/variables';
import DatePickerCustom from '../../../DatePickerCustom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../../data/theme';

const styles = {dividerStyle : { color : themeColors.primary}};

export default function PersonneMoralAccordion({style}){
 
  const [persons] = useState([
  
    {
      RaisonSociale : 'zakaria' , EnseigneOuSigle : 'samlali' , NdeMatriculation :'123' , PaysImmatriculation : 'maroc', DateImatriculation : '01/01/2020', IdentifiantTvaUe : '123',
      FormeJuridique :'SARL' , Secteur : 'Agriculture', Activite : 'sans', TypeAdresse : 'adresse fiscale' , TypeVoie : 'Place' , Nvoie : '1' , ComplementNvoie : 'A' ,
      Voie : 'rue', Complement : 'A' , CodePostal : '084984' , Ville : 'casa' , Pays : 'Maroc' , Telephone : '123456789' , Mobile : '06040294' , Fax : '0423423' , Email : 'test.test@gmail.com' , SiteInternet : 'www.com' ,

    },
    {
      RaisonSociale : 'oukach',EnseigneOuSigle: 'mehdi', NdeMatriculation :'123', PaysImmatriculation : 'maroc', DateImatriculation : '01/01/2020', IdentifiantTvaUe : '123',
      FormeJuridique :'SARL' , Secteur : 'Agriculture', Activite : 'sans', TypeAdresse : 'adresse fiscale' , TypeVoie : 'Place' , Nvoie : '1' , ComplementNvoie : 'A' ,
      Voie : 'rue', Complement : 'A' , CodePostal : '084984' , Ville : 'casa' , Pays : 'Maroc' , Telephone : '123456789' , Mobile : '06040294' , Fax : '0423423' , Email : 'test.test@gmail.com' , SiteInternet : 'www.com' ,

    }



  ]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant='h6'style={style.accordionTitle}> Personnes morales  </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="relative px-5 flex-auto">
                <form class="gap-3">
                <ThemeProvider theme={theme}>
                <TabContext value={value}>
                  <Box sx={{ width: '100%' }}>
                      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                        {persons.map((person , index) => (
                          <Tab sx={{width:150}} label={"Personne "+ (index+1)} value={index} />
                        ))}
                        
                      </Tabs>
                  </Box>
                      {persons.map((persons,index) => (
                      <TabPanel value={index}>
                        <div className='font-bold mb-7'>
                          <Divider style={styles.dividerStyle}>Informations sur l'identité de la personne morale</Divider>
                        </div>


                        <div className='w-full border-solid border-2 border-black p-3 rounded-md'>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Raison sociale" value={persons.RaisonSociale} type='text' disabled  />
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Enseigne ou sigle" value={persons.EnseigneOuSigle} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="N° d'immatriculation" value={persons.NdeMatriculation} type='text' disabled onChange={() => {}}/>
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
                                <InputLabel >Pays d'matriculation</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={persons.PaysImmatriculation}
                                    placeholder="Pays d'matriculation"
                                    label="Pays d'matriculation"
                                    disabled
                                >
                                    
                                    <MenuItem value="maroc" >Maroc</MenuItem>
                                    <MenuItem value="France">France</MenuItem>
                                    <MenuItem value="Allemagne">Allemagne</MenuItem>
              
                                </Select>
                            </FormControl>
                            </Grid>

                        <Grid item xs={6} md={4}>
                          <DatePickerCustom label="Date d'immatriculation" value={persons.DateImatriculation} type='date' disabled onChange={() => {}}/>
                        </Grid>
                        
                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Identifiant TVA UE" value={persons.IdentifiantTvaUe} type='text' disabled onChange={() => {}}/>
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
                                <InputLabel >Forme juridique</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={persons.FormeJuridique}
                                    placeholder="Forme juridique"
                                    label="Forme juridique"
                                    disabled
                                >
                                    
                                    <MenuItem value="SARL" >SARL</MenuItem>
                                    <MenuItem value="SA">SA</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
              
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
                                <InputLabel >Secteur</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={persons.Secteur}
                                    placeholder="Secteur"
                                    label="Secteur"
                                    disabled
                                >
                                    
                                    <MenuItem value="Agriculture" >Agriculture</MenuItem>
                                    <MenuItem value="Commerce">Commerce</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
              
                                </Select>
                            </FormControl>
                            </Grid>


                            <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Activité" type='text' disabled onChange={() => {}}/>
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
                                <InputLabel >Type d'adresse</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={persons.TypeAdresse}
                                    placeholder="Type d'adresse"
                                    label="Type d'adresse"
                                    disabled
                                >
                                    
                                    <MenuItem value="adresse fiscale" >adresse fiscale</MenuItem>
                                    <MenuItem value="adresse postale">adresse postal</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
              
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
                                <InputLabel >Type de Voie</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={persons.TypeVoie}
                                    placeholder="Type de Voie"
                                    label="Type de Voie"
                                    disabled
                                >
                                    
                                    <MenuItem value="Place" >Place</MenuItem>
                                    <MenuItem value="Sans">Sans</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
              
                                </Select>
                            </FormControl>
                            </Grid>

                            <Grid item xs={6} md={4}>
                            <TextFieldCustom label="N° voie" value={persons.Nvoie} type='text' disabled onChange={() => {}}/>
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
                                    value={persons.ComplementNvoie}
                                    placeholder="Complément N° Voie"
                                    label="Complément N° Voie"
                                    disabled
                                >
                                    
                                    <MenuItem value="A" >A</MenuItem>
                                    <MenuItem value="Sans">Sans</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
              
                                </Select>
                            </FormControl>
                            </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Voie" type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Complément" value={persons.Complement} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Code postal" value={persons.CodePostal} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Ville" value={persons.Ville} type='text' disabled onChange={() => {}}/>
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
                                    value={persons.Pays}
                                    placeholder="Pays"
                                    label="Pays"
                                    disabled
                                >
                                    
                                    <MenuItem value="Maroc" >Maroc</MenuItem>
                                    <MenuItem value="France">France</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
              
                                </Select>
                            </FormControl>
                            </Grid>

                            <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Téléphone" value={persons.Telephone} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Mobile" value={persons.Mobile} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Fax" value={persons.Fax} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Email" value={persons.Email} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Site internet" value={persons.SiteInternet} type='text' disabled onChange={() => {}}/>
                        </Grid>
                    
                    </Grid>
                    </div>
                    </TabPanel>
                        ))}
      
                </TabContext>
                </ThemeProvider>
                        
                </form>
            </div>
        </AccordionDetails>
    </Accordion>
    </div>
  )
}
