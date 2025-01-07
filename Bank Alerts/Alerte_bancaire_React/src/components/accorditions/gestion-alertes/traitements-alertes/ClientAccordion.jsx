import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { Grid } from '@mui/material'; 
import { colorCollections } from '@syncfusion/ej2/treemap';
import DatePickerCustom from '../../../DatePickerCustom';

export default function ClientAccordion({style}) {

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6'style={style.accordionTitle} >Client</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="relative px-5 flex-auto ">
                <form class="gap-3">
                    <Grid container spacing={2} rowSpacing={2}>

                      <Grid item xs={6} md={4}>
                        <TextFieldCustom label='Nom du client' type='text' onChange={() => {}}/>
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <TextFieldCustom label='Code client' type='text' onChange={() => {}}/>
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <TextFieldCustom label='Numéro du compte' type='text' onChange={() => {}}/>
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <TextFieldCustom label='Gestionnaire' type='text' onChange={() => {}}/>
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <DatePickerCustom label='Date ouverture de compte' type='date' onChange={() => {}}/>
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <TextFieldCustom label='Catégorie de client' type='text' onChange={() => {}}/>
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <TextFieldCustom label='Code APE' type='number' onChange={() => {}}/>
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <TextFieldCustom label='Libellé APE' type='number' onChange={() => {}}/>
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <DatePickerCustom label="Date d'intégration" type='date' onChange={() => {}}/> 
                      </Grid>

                      <Grid item xs={6} md={6}>
                        <TextFieldCustom label='Référence Tracfin' type='text' onChange={() => {}}/>
                      </Grid>

                      <Grid item xs={6} md={6}>
                        <TextFieldCustom label='Réquisition' type='text' onChange={() => {}}/>
                      </Grid>
                      
                    </Grid>
                </form>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
