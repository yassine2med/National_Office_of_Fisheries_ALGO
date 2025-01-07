import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { Grid , FormControl ,FormControlLabel, Select , TextField , InputLabel, Checkbox ,Divider } from '@mui/material'; 
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { themeColors } from '../../../../data/variables';
import DatePickerCustom from '../../../DatePickerCustom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { ThemeProvider } from '@mui/material/styles';
// import { theme } from '../../../../data/theme';


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

export default function PersonneMoralAccordion({style}){
 
  const [persons] = useState([
  
    {
      NomDeNaissance : 'zakaria' , DateDeNaissance : '1997/11/11' , Prenom : 'samlali', Nomusuel : 'zakaria', LieuDeNaissance : 'rabat',
      PaysDeNaissance :'Maroc' , Sex : 'Homme', Nationnalite : 'Maroc', AutreNationnalite : 'Maroc' , SituationFamiliale : 'Celibataire' , ActiviteProfessionel1 : 'sans' , ActiviteProfessionel2 : 'sans' ,
      SecteurProfessionel : 'sans', TypeAdresse : 'Adresse fiscale' , TypeVoie : 'rue' , Nvoie : 'sans' , ComplementNvoie : 'sans' , Voie : 'rue' , Complement : 'sans' , CodePostal : '123455' , Ville : 'Rabat',
      Pays :'Maroc', TelephoneFix :'124324', TelephoneMobile :'1243432',TelephoneProfessionel :'112984' , Email : 'test.test@gmail.com'

    },
    {
        NomDeNaissance : 'mehdi' , DateDeNaissance : '2000/02/22' , Prenom : 'oukach', Nomusuel : 'oukach', LieuDeNaissance : 'rabat',
        PaysDeNaissance :'Maroc' , Sex : 'Homme', Nationnalite : 'Maroc', AutreNationnalite : 'Maroc' , SituationFamiliale : 'Celibataire' , ActiviteProfessionel1 : 'sans' , ActiviteProfessionel2 : 'sans' ,
        SecteurProfessionel : 'sans', TypeAdresse : 'Adresse fiscale' , TypeVoie : 'rue' , Nvoie : 'sans' , ComplementNvoie : 'sans' , Voie : 'rue' , Complement : 'sans' , CodePostal : '123455' , Ville : 'Rabat',
        Pays :'Maroc', TelephoneFix :'124324', TelephoneMobile :'1243432',TelephoneProfessionel :'112984' , Email : 'test.test@gmail.com'
  
      },



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
            <Typography variant='h6'style={style.accordionTitle}> Personnes physiques </Typography>
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
                          <Divider style={styles.dividerStyle}>Etat civil de la personne physique</Divider>
                        </div>

                        <div className='w-full border-solid border-2 border-black p-3 rounded-md'>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Nom de naissance" value={persons.NomDeNaissance} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <DatePickerCustom label="Date de naissance" value={persons.DateDeNaissance} type='date' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Prénom" value={persons.Prenom} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={6}>
                            <TextFieldCustom label="Nom usuel (A préciser si différent du Nom de naissance)" value={persons.Nomusuel} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={6}>
                            <TextFieldCustom label="Lieu de naissance" value={persons.LieuDeNaissance} type='text' disabled onChange={() => {}}/>
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
                                <InputLabel >Pays de naissance</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={persons.PaysDeNaissance}
                                    placeholder="Pays de naissance"
                                    label="Pays de naissance"
                                    disabled
                                >
                                    
                                    <MenuItem value="sans_suite" >Maroc</MenuItem>
                                    <MenuItem value="tracfin">France</MenuItem>
                                    <MenuItem value="autre">Allemagne</MenuItem>
              
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
                                <InputLabel >Sex</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={persons.Sex}
                                    placeholder="Sex"
                                    label="Sex"
                                    disabled
                                >
                                    
                                    <MenuItem value="sans_suite" >Homme</MenuItem>
                                    <MenuItem value="tracfin">Femme</MenuItem>
              
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
                                <InputLabel >Nationalité</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={persons.Nationnalite}
                                    placeholder="Nationalité"
                                    label="Nationalité"
                                    disabled
                                >
                                    
                                    <MenuItem value="sans_suite" >Maroc</MenuItem>
                                    <MenuItem value="tracfin">France</MenuItem>
                                    <MenuItem value="autre">Allemagne</MenuItem>
              
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
                                <InputLabel >Autre nationalité</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={persons.AutreNationnalite}
                                    placeholder="Autre nationalité"
                                    label="Autre nationalité"
                                    disabled
                                >
                                    
                                    <MenuItem value="sans_suite" >Algerie</MenuItem>
                                    <MenuItem value="tracfin">Espagne</MenuItem>
                                    <MenuItem value="autre">Belgique</MenuItem>
              
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
                                    value={persons.SituationFamiliale}
                                    placeholder="Situation familiale"
                                    label="Situation familiale"
                                    disabled
                                >
                                    
                                    <MenuItem value="sans_suite" >Marié(e)</MenuItem>
                                    <MenuItem value="tracfin">Devorcé(e)</MenuItem>
                                    <MenuItem value="autre">Celibataire</MenuItem>
              
                                </Select>
                            </FormControl>
                            </Grid>

                            <Grid item xs={6} md={4}>
                        <TextFieldCustom label="Acitivité professionnel 1" value={persons.ActiviteProfessionel1} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <TextFieldCustom label="Activité professionnel 2" value={persons.ActiviteProfessionel2} type='text' disabled onChange={() => {}}/>
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
                                    value={persons.SecteurProfessionel}
                                    placeholder="Secteur professionnel"
                                    label="Secteur professionnel"
                                    disabled
                                >
                                    <MenuItem value="sans_suite" >Sans suite</MenuItem>
                                    <MenuItem value="tracfin">Tracfin</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
              
                                </Select>
                            </FormControl>
                            </Grid>

                        <Grid item xs={12}>
                          <FormControlLabel className='my-3' control={<MuiThemeProvider theme = { theme }><Checkbox/></MuiThemeProvider>} label="Il s'agit d'une personne politiquement exposée" />
                        </Grid>
                        </Grid>
                   </div>

                        <div className='font-bold my-7'>
                          <Divider style={styles.dividerStyle}>Coordonnées de la personne physique</Divider>
                        </div>

                <div className='w-full border-solid border-2 border-black p-3 rounded-md'>           
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
                                    value={persons.TypeAdresse}
                                    placeholder="Type d'adresse"
                                    label="Type d'adresse"
                                    disabled
                                >
                                    
                                    <MenuItem value="sans_suite" >Adresse fiscale</MenuItem>
                                    <MenuItem value="tracfin">Tracfin</MenuItem>
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
                                <InputLabel >Type de voie</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={persons.TypeVoie}
                                    placeholder="Type de voie"
                                    label="Type de voie"
                                    disabled
                                >
                                    
                                    <MenuItem value="sans_suite" >Rue</MenuItem>
                                    <MenuItem value="tracfin">Tracfin</MenuItem>
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
                                    
                                    <MenuItem value="sans_suite" >Rue</MenuItem>
                                    <MenuItem value="tracfin">Tracfin</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
              
                                </Select>
                            </FormControl>
                            </Grid>

                            <Grid item xs={6} md={4}>
                        <TextFieldCustom label="Voie" value={persons.Voie} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <TextFieldCustom label="Complément" value={persons.Complement} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <TextFieldCustom label="Code postal" value={persons.CodePostal} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <TextFieldCustom label="ville" value={persons.Ville} type='text' disabled onChange={() => {}}/>
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
                                    
                                    <MenuItem value="sans_suite" >Maroc</MenuItem>
                                    <MenuItem value="tracfin">France</MenuItem>
                                    <MenuItem value="autre">Allemagne</MenuItem>
              
                                </Select>
                            </FormControl>
                            </Grid>

                            <Grid item xs={6} md={4}>
                        <TextFieldCustom label="Téléphone fixe" value={persons.TelephoneFix} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <TextFieldCustom label="Téléphone mobile" value={persons.TelephoneMobile} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <TextFieldCustom label="Téléphone professionnel" value={persons.TelephoneProfessionel} type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <TextFieldCustom label="Email" value={persons.Email} type='text' disabled onChange={() => {}}/>
                        
                     </Grid>
                    </Grid>

                </div>


                        <div className='font-bold my-7'>
                          <Divider style={styles.dividerStyle}>Surface financière connue</Divider>
                        </div>

                    <div className='w-full border-solid border-2 border-black p-3 rounded-md'>
                        <Grid container spacing={2}>
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
                                placeholder=''
                            fullWidth  multiline minRows={2} label='Surface :'type='text' disabled onChange={() => {}}/>
                        </Grid>
                    </Grid>
                    </div>

                    <div className='font-bold my-7'>
                          <Divider style={styles.dividerStyle}>Caractéristiques de la relation client</Divider>
                        </div>

                <div className='w-full border-solid border-2 border-black p-3 rounded-md'>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={12}>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <div className='className=font-bold mx-7'>
                                De quel type de relation s'agit-il ? 
                                </div>

                                <FormControlLabel value="Occasionnelle" control={<Radio />} label="Occasionnelle" />
                                <FormControlLabel value="Habituelle" control={<Radio />} label="Habituelle" />
                            </RadioGroup>
                            </FormControl>
                            </Grid>

                        <Grid item xs={12}>
                          <FormControlLabel className='my-3' control={<MuiThemeProvider theme = { theme }><Checkbox/></MuiThemeProvider>} label="Relation client terminée" />
                        </Grid>

                            <TextField
                             sx={{
                                "& .MuiInputLabel-root": {color: 'black'},
                                '& label.Mui-focused': { color: themeColors.primary},
                                "& .MuiOutlinedInput-root": {
                                  "& > fieldset": { borderColor: "black" },
                                  "&:hover fieldset": { borderColor: themeColors.primary },
                                  "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                }}}
                                placeholder=''
                            fullWidth  multiline minRows={2} label='Eléments clés de la relation :'type='text' disabled onChange={() => {}}/>
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
