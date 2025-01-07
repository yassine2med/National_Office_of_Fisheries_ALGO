import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';  
import { Grid , TextField, } from '@mui/material'; 
import { useState } from 'react';
import { themeColors } from '../../../../data/variables';


export default function CommantaireDecisionAccordion({style}){
  const [selectValue , setSelectValue] = useState('');

  return (
    <div>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant='h6'style={style.accordionTitle}> Commantaire de la décision</Typography>
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
                                placeholder='Motif de l’examen'
                            fullWidth  multiline minRows={2} label='Renseigner un commentaire ici'type='text' onChange={() => {}}/>
                        </Grid>
     
                        </Grid>
                        
                </form>
            </div>
        </AccordionDetails>
    </Accordion>
    </div>
  )
}
