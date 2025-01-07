import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { Grid , FormControl , Select , InputLabel, TextField, Divider ,Checkbox ,FormControlLabel } from '@mui/material'; 
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { themeColors } from '../../../../data/variables';
import DatePickerCustom from '../../../DatePickerCustom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../../data/theme';
export default function SyntheseAccordion({style}){

    const [selectValuePIFU , setSelectValuePIFU] = useState('');
    const [selectValueSO , setSelectValueSO] = useState('');
    const [checkboxHeureDate , setCheckboxHeureDate] = useState(false);

    const styles = {dividerStyle : { color : themeColors.primary}};

  return (
    <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography variant='h6'style={style.accordionTitle}> Synthèse </Typography>
            </AccordionSummary>
        
        <AccordionDetails>
            <div className="relative px-5 flex-auto">
                <form class="gap-3">
                        
                        <Grid container spacing={2} rowSpacing={2}>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Motif de la Statut des opérations" type='text' />
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <DatePickerCustom label='Date de début des faits considérés' type='date' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <DatePickerCustom label='Date de fin des faits considérés' type='date' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Montant total en jeu" type='text' />
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
                                <InputLabel >Principal instrument financier utilisé</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={selectValuePIFU}
                                    placeholder="Principal instrument financier utilisé"
                                    label="Principal instrument financier utilisé"
                                    onChange={(e =>setSelectValuePIFU(e.target.value))}
                                >
                                    
                                    <MenuItem value="987909" >987909</MenuItem>
                                    <MenuItem value="098098">098098</MenuItem>
                                    <MenuItem value="098009">098009</MenuItem>
                                    
                                </Select>
                                </FormControl>
                        </Grid>



                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Nombre d'opérations" type='text'/>
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
                                <InputLabel >Statut des opérations </InputLabel>
                                <Select
                                    className='inline-block'
                                    value={selectValueSO}
                                    placeholder="Statut des opérations"
                                    label="Statut des opérations "
                                    required
                                    onChange={(e =>setSelectValueSO(e.target.value))}
                                >
                                    
                                    <MenuItem value="987909" >987909</MenuItem>
                                    <MenuItem value="098098">098098</MenuItem>
                                    <MenuItem value="098009">098009</MenuItem>
                                    
                                </Select>
                                </FormControl>
                        </Grid>
                       {
                            checkboxHeureDate && (
                            <Grid item xs={6} md={6}>
                                <DatePickerCustom label='Date et heure' type='datetime-local' onChange={() => {}}/>
                            </Grid>
                            )
                       } 

                       
                        
                        <Grid item xs={12} md={12}>
                            <div className='ml-2' >
                                <FormControlLabel className='my-3' control={<ThemeProvider theme = { theme }>
                                    <Checkbox value={checkboxHeureDate} onChange={() => setCheckboxHeureDate(!checkboxHeureDate)} /></ThemeProvider>} 
                                    label="Dans le cas où une partie des opérations ne seraient pas encore exécutées, précisez la date et l'heure d'exécution" />
                            </div>
                        </Grid>
                
                    </Grid>

                </form>
            </div>
        </AccordionDetails>
    </Accordion>
  )
}
