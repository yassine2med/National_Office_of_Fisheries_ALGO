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
import { set } from 'date-fns';

export default function InformationDeclarationAccordion({style}){
    const [selectValueDeclarant , setSelectValueDeclarant] = useState('');
    const [selectValueDeclaration , setSelectValueDeclaration] = useState('');
    const [checkboxTransmisson , setCheckboxTransmisson] = useState(false);
    const [checkboxPersonneHabilite , setCheckboxPersonneHabilite ] = useState(false);
    const styles = {dividerStyle : { color : themeColors.primary}};

  return (
    <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography variant='h6'style={style.accordionTitle}> Information de déclaration </Typography>
            </AccordionSummary>
        
        <AccordionDetails>
            <div className="relative px-5 flex-auto">
                <form class="gap-3">
                        
                        <Grid container spacing={2} rowSpacing={2}>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Rédacteur" type='text' />
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
                                <InputLabel >Déclarant</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={selectValueDeclarant}
                                    placeholder="Déclarant"
                                    label="Déclarant"
                                    onChange={(e =>setSelectValueDeclarant(e.target.value))}
                                >
                                    
                                    <MenuItem value="987909" >987909</MenuItem>
                                    <MenuItem value="098098">098098</MenuItem>
                                    <MenuItem value="098009">098009</MenuItem>
                                    
                                </Select>
                                </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <DatePickerCustom label='Date de déclaration' type='date' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Référence interne" type='text' disabled/>
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
                                <InputLabel >Déclaration </InputLabel>
                                <Select
                                    className='inline-block'
                                    value={selectValueDeclaration}
                                    placeholder="Déclaration"
                                    label="Déclaration "
                                    required
                                    onChange={(e =>setSelectValueDeclaration(e.target.value))}
                                >
                                    
                                    <MenuItem value="987909" >987909</MenuItem>
                                    <MenuItem value="098098">098098</MenuItem>
                                    <MenuItem value="098009">098009</MenuItem>
                                    
                                </Select>
                                </FormControl>
                        </Grid>

                        {
                            checkboxTransmisson && (
                                <Grid item xs={6} md={4}>
                                    <TextFieldCustom label="Référence de la précédente déclaration" type='text'/>
                                </Grid>
                            )
                        }

                        
                        <Grid item xs={12} md={12}>
                            <div className='ml-2' >
                                <FormControlLabel className='my-3' control={<ThemeProvider theme = { theme }>
                                    <Checkbox checked={checkboxTransmisson} onChange={() => setCheckboxTransmisson(!checkboxTransmisson)}/></ThemeProvider>} 
                                    label="Transmission de document(s) complémentaire(s) à une déclaration antérieure" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <div className='ml-2' >
                                <FormControlLabel className='my-3' control={<ThemeProvider theme = { theme }>
                                    <Checkbox checked={checkboxPersonneHabilite} onChange={() => setCheckboxPersonneHabilite(!checkboxPersonneHabilite)}/></ThemeProvider>}
                                        label="Personne habilitée à être contactée pour information sur ce dossier ( si différente du déclarant ) Contrôle Armoire EMBARGOS" />
                            </div>
                        </Grid>

                        {
                            checkboxPersonneHabilite && (
                            <div className='my-6'>
                                <Grid container spacing={2} rowSpacing={2}>

                                    <Grid item xs={6} md={4}>
                                        <TextFieldCustom label="Nom" type='text'/>
                                    </Grid>

                                    <Grid item xs={6} md={4}>
                                        <TextFieldCustom label="Prénom" type='text'/>
                                    </Grid>

                                    <Grid item xs={6} md={4}>
                                        <TextFieldCustom label="Téléphone" type='text'/>
                                    </Grid>

                                    <Grid item xs={6} md={4}>
                                        <TextFieldCustom label="Fax" type='text'/>
                                    </Grid>

                                    <Grid item xs={6} md={4}>
                                        <TextFieldCustom label="Email" type='text'/>
                                    </Grid>

                                </Grid>
                            </div>
                                 
                            )
                        }
  
                    </Grid>

                </form>
            </div>
        </AccordionDetails>
    </Accordion>
  )
}
