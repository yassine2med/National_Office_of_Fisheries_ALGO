import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import DatePickerCustom from '../../../DatePickerCustom';
import { Grid ,Accordion , AccordionDetails , AccordionSummary , Typography } from '@mui/material';


export default function MiseJourDossierAccordion({style}){
  return (
    <div>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant='h6'style={style.accordionTitle}> Mise à jour de dossier</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="relative px-5 flex-auto">
                <form class="gap-3">
                    
                               
                        <Grid container spacing={2}>

                        <Grid item xs={6} md={6}>
                            <TextFieldCustom label="Votre référence Tracfin" type='text' />
                        </Grid>

                        <Grid item xs={6} md={6}>
                        <DatePickerCustom label="Date d'envoi de la déclaration" type='date' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={6}>
                        <DatePickerCustom label="Date enregistrement par TRACFIN" type='date' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={6}>
                            <TextFieldCustom label="N° d'enregistrement de la déclaration" type='text' onChange={() => {}}/>
                        </Grid>

                        
                    </Grid>

                       
                        
                </form>
            </div>
        </AccordionDetails>
    </Accordion>
    </div>
  )
}
