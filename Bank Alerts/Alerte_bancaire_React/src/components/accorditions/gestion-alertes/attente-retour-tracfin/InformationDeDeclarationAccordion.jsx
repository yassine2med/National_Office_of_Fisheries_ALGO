import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { Grid , FormControl ,FormControlLabel, Select , InputLabel, Checkbox } from '@mui/material'; 
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { themeColors } from '../../../../data/variables';
import DatePickerCustom from '../../../DatePickerCustom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  


export default function InformationDeDeclarationAccordion({style}){
    
  const [selectValue , setSelectValue] = useState('');

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

  return (
    <div>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant='h6'style={style.accordionTitle}>Information de déclaration</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="relative px-5 flex-auto">
                <form class="gap-3">
                    
                               
                        <Grid container spacing={2}>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Rédacteur" type='text' disabled />
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Déclarant" type='text' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <DatePickerCustom label="Date de déclaration" type='date' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Référence interne" type='text' disabled onChange={() => {}}/>
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
                                <InputLabel >Déclaration</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={selectValue}
                                    placeholder="Déclaration"
                                    label="Déclaration"
                                    onChange={(e =>setSelectValue(e.target.value))}
                                    disabled
                                >
                                    
                                    <MenuItem value="sans_suite" >Sans suite</MenuItem>
                                    <MenuItem value="tracfin">Tracfin</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
                                    
                                </Select>
                                </FormControl>
                        </Grid>

                 <Grid item xs={12} md={12} >
                  <div className='ml-2'>
                     <FormControlLabel className='' control={<MuiThemeProvider theme = { theme }><Checkbox/></MuiThemeProvider>} label="  Transmission de document(s) complémentaire(s) à une déclaration antérieure" />
                  </div>                          
                 </Grid>

                 <Grid item xs={12} md={12} >
                  <div className='ml-2'>
                     <FormControlLabel className='' control={<MuiThemeProvider theme = { theme }><Checkbox/></MuiThemeProvider>} label="  Personne habilitée à être contactée pour information sur ce dossier ( si différente du déclarant )" />
                  </div>                          
                 </Grid>
                        
                    </Grid>

                       
                        
                </form>
            </div>
        </AccordionDetails>
    </Accordion>
    </div>
  )
}
