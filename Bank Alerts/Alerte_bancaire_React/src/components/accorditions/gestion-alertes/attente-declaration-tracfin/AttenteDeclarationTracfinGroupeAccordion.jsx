import React from 'react'
import ClientAccordion from '../traitements-alertes/ClientAccordion'
import PieceThematiqueAccordion from '../traitements-alertes/PieceThematiqueAccordion'
import Grid from '@material-ui/core/Grid'
import SuivieDesDemandeInformationAccordion from '../traitements-alertes/SuivieDesDemandeInformationAccordion'
import DetailsOperationsAccordion from '../traitements-alertes/DetailsOperationsAccordion'
import AnalyseAccordion from '../alertes-analysees/AnalyseAccordion'
import { themeColors } from '../../../../data/variables'
import DetailsPersonneMoraleAccordion from '../alertes-analysees/DetailsPersonneMoraleAccordion'
import DetailsPersonnePhysiqueAccordion from '../alertes-analysees/DetailsPersonnePhysiqueAccordion'
import CommentaireDecisionAccordion from '../alertes-analysees/CommentaireDecisionAccordion'
import InformationDeclarationAccordion from './InformationDeclarationAccordion'
import SyntheseAccordion from './SynteseAccordion'
import AnalyseFraisIndiceBlanchimentAccordion from './AnalyseFraisIndiceBlanchimentAccordion'
import PieceJointesAccordion from './PieceJointesAccordion'
import PersonneMoralAccordion from './PersonneMoralAccordion'
export default function AlerteAnalyseGroupeAccordions(){
  const styles = {
    accordionTitle : {
        color: themeColors.primary,
        fontSize: '1.1rem',
    }
 } 

  return (
    <Grid container spacing={2} rowSpacing={2}>
        <Grid item xs={12} md={12}>
        <InformationDeclarationAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <SyntheseAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <AnalyseFraisIndiceBlanchimentAccordion style={styles} />
        </Grid> 

        <Grid item xs={12} md={12}>
            <PieceThematiqueAccordion style={styles} />
        </Grid> 

        <Grid item xs={12} md={12}>
            <PieceJointesAccordion style={styles} />
        </Grid> 

        <Grid item xs={12} md={12}>
            <PersonneMoralAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
          <AnalyseAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <CommentaireDecisionAccordion style={styles} />
        </Grid> 
    </Grid>
  )
}

