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
export default function AnalyseFraisIndiceBlanchimentAccordion({style}){

    const [selectValuePIFU , setSelectValuePIFU] = useState('');
    const [selectValueSO , setSelectValueSO] = useState('');
    const styles = {dividerStyle : { color : themeColors.primary}};

  return (
    <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography variant='h6'style={style.accordionTitle}> Analyse des frais , indice de blanchiment </Typography>
            </AccordionSummary>
        
            <AccordionDetails>
                <div className="relative px-5 flex-auto">
                    <form class="gap-3">
                            
                        <Grid container spacing={2} rowSpacing={2}>
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
                                placeholder='Analyse des faits'
                                fullWidth multiline minRows={4} 
                                label='Analyse des faits'type='text' onChange={() => {}}/>
                        </Grid>     
                            
                        </Grid>

                    </form>
                </div>
            </AccordionDetails>
    </Accordion>
  )
}
