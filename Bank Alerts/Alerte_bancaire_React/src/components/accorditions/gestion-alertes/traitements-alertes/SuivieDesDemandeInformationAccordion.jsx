import React , {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { Grid } from '@mui/material'; 
import { Label } from '@syncfusion/ej2/circulargauge';
import ButtonCustom from '../../../ButtonCustom';
import DemandeModal from '../../../modals/DemandeModal';
import DatePickerCustom from '../../../DatePickerCustom';
import { useContextState } from '../../../../contexts/ContextProvider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell , { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  { themeColors } from '../../../../data/variables';
import { styled } from '@mui/material/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import { FormControlLabel , Checkbox } from '@material-ui/core';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f5f5f5',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const theme = createMuiTheme({
  palette: {
     primary: {
        main: themeColors.primary,
     },
     secondary: {
       main: themeColors.secondary,
     },
  },
  typography: { 
     useNextVariants: true
  }
});

export default function SuivieDesDemandeInformationAccordion({style}) {
  const {isModalOpen, setModalOpen} = useContextState()
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(!open);setModalOpen(!isModalOpen)}
  const handleClose = () => {setOpen(false); setModalOpen(false)}
  const columns = ['Date de demande client' , 'Date de retour' , 'Date de dernière relance' , 'Commentaire' , '']

                    const data = [
                      {
                          nArticle: '1',
                          dateOperation: '01/01/2020',
                          etat: 'en cours',
                          origin: 'client',
                          codeEdition: '1',
                          referenceOperation: '1',
                          nOperation: '1',
                          contrepartie: '1',
                          sens: '1',
                          motifOperation: '1',
                          montant: '1'
                      },
                      {
                          nArticle: '2',
                          dateOperation: '01/01/2020',
                          etat: 'en cours',
                          origin: 'client',
                          codeEdition: '1',
                          referenceOperation: '1',
                          nOperation: '1',
                          contrepartie: '1',
                          sens: '1',
                          motifOperation: '1',
                          montant: '1'
                      }
                  ]
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6' style={style.accordionTitle} >Suivie des demandes d'informations </Typography>
        </AccordionSummary>
        <AccordionDetails>  
        <div className="relative px-5 flex-auto">
                    <Grid container spacing={2} rowSpacing={2}>
                        <Grid item xs={12}>
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {columns.map(column => (
                                    <StyledTableCell className="capitalize" key={column} align="left">{column}</StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row , index) => (
                            <TableRow className="capitalize"
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell key={data.index} align="left">
                                      <DatePickerCustom align="true" onChange={() => {}}  disabled bgColor={themeColors.light} />    
                                    </TableCell>
                                    <TableCell key={data.index} align="left">
                                    <DatePickerCustom align="true" onChange={() => {}} /> 
                                    </TableCell>
                                    <TableCell key={data.index} align="left">
                                    <DatePickerCustom align="true" id='date-de-derniere-relance' onChange={() => {}} disabled/> 
                                    </TableCell>
                                    <TableCell key={data.index} align="left">
                                    <TextFieldCustom  align="true" id='commentaire' onChange={() => {}} />
                                    </TableCell>
                                    <TableCell key={data.index} align="left">
                                      <ButtonCustom variant="outlined" borderColor="danger"  textColor="danger" text="Relancer"  Externalstyle={{height:55}} handleSubmit={handleOpen}/>
                                    </TableCell>
                            </TableRow>
                            ))}

                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Grid>
                    </Grid>
                </div>
        </AccordionDetails>
      </Accordion>
      <DemandeModal toggle={handleClose} isOpen={open} type='relance-demande'/>

    </div>

  );
}
