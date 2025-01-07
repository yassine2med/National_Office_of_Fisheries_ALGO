import React from 'react'
import ClientAccordion from './ClientAccordion'
import PieceThematiqueAccordion from './PieceThematiqueAccordion'
import Grid from '@material-ui/core/Grid'
import SuivieDesDemandeInformationAccordion from './SuivieDesDemandeInformationAccordion'
import DetailsOperationsAccordion from './DetailsOperationsAccordion'
import AnalyseAccordion from './AnalyseAccordion'
import { themeColors } from '../../../../data/variables';

export default function TraitementAlerteGroupeAccordions(){
  const styles = {
    accordionTitle : {
        color: themeColors.primary,
        fontSize: '1.1rem',
    }
 } 

  return (
    <Grid container spacing={2} rowSpacing={2}>
        <Grid item xs={12} md={12}>
            <ClientAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <PieceThematiqueAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <SuivieDesDemandeInformationAccordion style={styles} />
        </Grid> 

        <Grid item xs={12} md={12}>
          <DetailsOperationsAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
          <AnalyseAccordion style={styles} />
        </Grid>
    </Grid>
  )
}

