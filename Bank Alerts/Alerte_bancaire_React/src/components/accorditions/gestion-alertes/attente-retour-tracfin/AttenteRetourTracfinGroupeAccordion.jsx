import React from 'react'
// import ClientAccordion from '../traitements-alertes/ClientAccordion'
// import PieceThematiqueAccordion from '../traitements-alertes/PieceThematiqueAccordion'
import Grid from '@material-ui/core/Grid'
// import SuivieDesDemandeInformationAccordion from '../traitements-alertes/SuivieDesDemandeInformationAccordion'
// import DetailsOperationsAccordion from '../traitements-alertes/DetailsOperationsAccordion'
// import DetailsPersonneMoraleAccordion from './DetailsPersonneMoraleAccordion'
// import DetailsPersonnePhysiqueAccordion from './DetailsPersonnePhysiqueAccordion'
// import CommantaireDecisionAccordion from './CommantaireDecisionAccordion'
// import AnalyseAccordion from '../traitements-alertes/AnalyseAccordion'
import { themeColors } from '../../../../data/variables';
import MiseJourDossierAccordion from './MiseJourDossierAccordion';
import InformationDeDeclarationAccordion from './InformationDeDeclarationAccordion';
import SyntheseAccordion from './SyntheseAccordion';
import AnalyseDesFaitsIndicesDeBlanchimentAccordion from './AnalyseDesFaitsIndicesDeBlanchimentAccordion';
import PiecesJointesAccordion from './PiecesJointesAccordion';
import PersonneMoralAccordion from './PersonneMoralAccordion';
import PersonnePhysiqueAccordion from './PersonnePhysiqueAccordion';

export default function AttenteRetourTracfinGroupeAccordion(){
  const styles = {
    accordionTitle : {
        color: themeColors.primary,
        fontSize: '1.1rem',
    }
 } 

  return (
    <Grid container spacing={2} rowSpacing={2}>
        <Grid item xs={12} md={12}>
            <MiseJourDossierAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <InformationDeDeclarationAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <SyntheseAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <AnalyseDesFaitsIndicesDeBlanchimentAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <PiecesJointesAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <PersonneMoralAccordion style={styles} />
        </Grid>

        <Grid item xs={12} md={12}>
            <PersonnePhysiqueAccordion style={styles} />
        </Grid>


    </Grid>
  )
}