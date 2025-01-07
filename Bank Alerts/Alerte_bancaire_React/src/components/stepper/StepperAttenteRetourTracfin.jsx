import * as React from 'react';
import Box from '@mui/material/Box';
import TraitementAlerteGroupeAccordions from '../accorditions/gestion-alertes/traitements-alertes/TraitementAlerteGroupeAccordions';
import { Grid } from '@mui/material';
import ButtonCustom from '../ButtonCustom'
import Swal from 'sweetalert2';import { themeColors } from '../../data/variables'
import Stepper from 'react-stepper-horizontal'
import AlerteDeuxiemeDecisionGroupeAccordions from '../accorditions/gestion-alertes/attente-decision-niveau-2/AlerteDeuxiemeDecisionGroupeAccordions';
import { useContextState } from '../../contexts/ContextProvider'
import AttenteRetourTracfinGroupeAccordion from '../accorditions/gestion-alertes/attente-retour-tracfin/AttenteRetourTracfinGroupeAccordion';

const steps = [
  {label: 'Dossier 1er niveau' , component: <AttenteRetourTracfinGroupeAccordion/>},
  {label: 'Préparation du dossier' , component: <div>Undefined yet</div>},
  {label: 'Décision 2ème niveau' , component: <div>Undefined yet</div>},
  {label: 'Déclaration Tracfin' , component: <div>Undefined yet</div>},
  ];

export default function StepperAttenteRetourTracfin() {

  const { isModalOpen, setModalOpen } = useContextState()
  const blur = isModalOpen ? 'blur-sm' : ''

  const [activeStep, setActiveStep] = React.useState(0)  

  {/*Alerts functions*/}
  
  const InfoAlert = (text) => {
    Swal.fire({
      title: '',
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: themeColors.success,
      cancelButtonColor: themeColors.danger,
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui , Confirmer !',
      showConfirmButton: true,
     

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Le champs est supprimé avec succès', 
          showConfirmButton: false,
          timer: 2000
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title : 'Annulation de l\'inverstigation',
          showConfirmButton: false,
          timer: 2000,
        })
      }
      setModalOpen(false)
    })
  }

  

  return (
    <>
    <div className={`${blur} border-0 rounded-lg shadow-lg mt-8 mx-10 mr-2 py-5 px-5 relative flex flex-col bg-white outline-none focus:outline-none`}>
      <Box sx={{ width: '100%' }}>
           
            <div className='py-10'>
              {steps[activeStep].component}
            </div>   

            <Grid container spacing={3}>

                <Grid item xs={12} md={6} lg={6}>
                  <ButtonCustom variant="outlined" Externalstyle={{height:55}} borderColor="light" textColor="light"  text="Sauvegarder des modifications " />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <ButtonCustom variant='contained' Externalstyle={{height:55}} color="primary" textColor="white"  text="Valider le dossier tracfin" />
                </Grid>
                 
            </Grid>           
      </Box>
    </div>
</>
  );
}