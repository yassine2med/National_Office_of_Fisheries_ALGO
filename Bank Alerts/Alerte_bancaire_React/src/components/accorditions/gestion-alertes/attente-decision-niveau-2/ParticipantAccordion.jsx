import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid , FormControl , InputLabel , Select } from '@mui/material'; 
import { MenuItem } from '@material-ui/core';
import { useState } from 'react';
import { themeColors } from '../../../../data/variables';
export default function CommentaireDecisionAccordion({style}){

    const [selectValue , setSelectValue] = useState('');
    
  return (
    <div>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant='h6'style={style.accordionTitle}> Participant </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="relative px-5 flex-auto">
                <form class="gap-3">
                
                        <Grid item xs={12} md={12}>
                        <FormControl fullWidth
                            sx={{
                                "& .MuiInputLabel-root": {color: 'black'},
                                '& label.Mui-focused': { color: themeColors.primary},
                                "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "black" },
                                "&:hover fieldset": { borderColor: themeColors.primary },
                                "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                }}}>
                                <InputLabel >Participant</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={selectValue}
                                    placeholder='Participant'
                                    label="Participant"
                                    onChange={(e =>setSelectValue(e.target.value))}
                                >
                                    
                                    <MenuItem value={10}>user 1</MenuItem>
                                    <MenuItem value={20}>user 2</MenuItem>
                                    <MenuItem value={30}>user 3</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        </Grid>                        
                </form>
            </div>
        </AccordionDetails>
    </Accordion>
    </div>
  )
}
