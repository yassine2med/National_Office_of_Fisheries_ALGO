import * as React from 'react';
import Box from '@mui/material/Box';
import TraitementAlerteGroupeAccordions from '../accorditions/gestion-alertes/traitements-alertes/TraitementAlerteGroupeAccordions';
import { Grid } from '@mui/material';
import ButtonCustom from '../ButtonCustom';
import DemandeModal from '../modals/DemandeModal';
import { useState } from 'react';
import InputAlert from '../alerts/InputAlerte';
import Swal from 'sweetalert2';import { themeColors } from '../../data/variables';
import Stepper from 'react-stepper-horizontal'
import { useContextState } from '../../contexts/ContextProvider';

const steps = [
  {label: 'Dossier 1er niveau' , component: <TraitementAlerteGroupeAccordions/>},
  {label: 'Préparation du dossier' , component: <div>Undefined yet</div>},
  {label: 'Décision 2ème niveau' , component: <div>Undefined yet</div>},
  {label: 'Déclaration Tracfin' , component: <div>Undefined yet</div>},
  ];

export default function StepperAlerteNonTraite() {

  const { isModalOpen, setModalOpen } = useContextState()
  const blur = isModalOpen ? 'blur-sm' : ''

  const [activeStep, setActiveStep] = React.useState(0)  

  const [openDemande, setOpenDemande] = useState(false)
  const handleOpenDemande = () => {setOpenDemande(true); setModalOpen(true)}
  const handleCloseDemande = () => {setOpenDemande(false); setModalOpen(false)}

  const [openClasserAlerte, setOpenClasserAlerte] = useState(false)
  const handleOpenClasserAlerte = () => {setOpenClasserAlerte(true); setModalOpen(true)}
  const handleCloseClasserAlerte = () => {setOpenClasserAlerte(false); setModalOpen(false)}

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
            <div>
              <Stepper 
                completeColor={themeColors.primary}
                activeColor={themeColors.primary}
                defaultColor={themeColors.light}  
                size = {50}
                circleFontSize = {20}
                steps={ [{title: 'Dossier 1er niveau'}, {title: 'Préparation du dossier'}, {title: 'Décision 2ème niveau'}, {title: 'Déclaration Tracfin'}] } activeStep={ 0 } />
            </div>
      
            <div className='py-10'>
              {steps[activeStep].component}
            </div>   

            <Grid container spacing={3}>

                <Grid item xs={12} md={6} lg={4}>
                  <ButtonCustom variant="contained" Externalstyle={{height:55}} handleSubmit={handleOpenDemande} color="warning" textColor="white" text="Demande des informations" />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <ButtonCustom variant="contained" Externalstyle={{height:55}} handleSubmit={() => InfoAlert("Etes-vous sur(e)s de vouloir mettre l(es) alerte(s) en état Investigation?")} color="danger" textColor="white" text="Mettre alerte(s) en investigation" />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <ButtonCustom variant="contained" Externalstyle={{height:55}} handleSubmit={handleOpenClasserAlerte} color="success"  textColor="white" text="Classer alerte(s) sans suite" />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <ButtonCustom variant="outlined" Externalstyle={{height:55}} borderColor="light" textColor="light"  text="Sauvegarder des modifications " />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <ButtonCustom variant="outlined" Externalstyle={{height:55}} borderColor="success" textColor="success"  text="Mettre en analyse" />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <ButtonCustom variant="outlined" Externalstyle={{height:55}} borderColor="danger" textColor="danger"  handleSubmit={() => InfoAlert("Etes-vous sur(e)s de vouloir mettre l(es) alerte(s) en état erreur de saisie?")}  text="Mettre alerte(s) en erreur de saisie" />
                </Grid>
                 
            </Grid>           
      </Box>

      <DemandeModal toggle={handleCloseDemande} isOpen={openDemande} type='initial-demande'/>
    </div>
    <InputAlert toggle={handleCloseClasserAlerte} isOpen={openClasserAlerte} text="Etes-vous sur(e)s de vouloir mettre l(es) alerte(s) en classement sans suite ?" type='error'/>
</>
  );
}