import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { Grid , FormControl , Select , InputLabel } from '@mui/material'; 
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { themeColors } from '../../../../data/variables';
import DatePickerCustom from '../../../DatePickerCustom'; 


export default function PiecesJointesAccordion({style}){
    
  const [selectValue , setSelectValue] = useState('');

  return (
    <div>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant='h6'style={style.accordionTitle}> Pièces jointes</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="relative px-5 flex-auto">
                <form class="gap-3">
                    
                               
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
                                <InputLabel >Type de document</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={selectValue}
                                    placeholder="Type de document"
                                    label="Type de document"
                                    onChange={(e =>setSelectValue(e.target.value))}
                                    disabled
                                >
                                    
                                    <MenuItem value="sans_suite" >Sans suite</MenuItem>
                                    <MenuItem value="tracfin">Tracfin</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
                                    
                                </Select>
                                </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                        <DatePickerCustom label="Date du document" type='date' disabled onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Libellé" type='text' disabled onChange={() => {}}/>
                        </Grid>

                        
                    </Grid>

                       
                        
                </form>
            </div>
        </AccordionDetails>
    </Accordion>
    </div>
  )
}
