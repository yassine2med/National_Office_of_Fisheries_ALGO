import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell , { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Accordion , AccordionDetails , AccordionSummary , Typography ,FormControlLabel , Checkbox } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import { themeColors } from '../../../../data/variables';


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

export default function DetailsOperationsAccordion({style}){

    const columns = ['n article' , 'date opération' , 'etat' , 'origin' , 'code édition' , 'référence de l\'opération' , 'n opération ',
                    'contrepartie' , 'sens', 'motif de l\'opération','montant']
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
                <Typography variant='h6' style={style.accordionTitle}>Détails des opérations</Typography>
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
                                    <StyledTableCell className="capitalize" key={column} align="right">{column}</StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                            <TableRow className="capitalize"
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell key={data.nArticle} align="right">{row.nArticle}</TableCell>
                                    <TableCell key={data.dateOperation} align="right">{row.dateOperation}</TableCell>
                                    <TableCell key={data.etat} align="right">{row.etat}</TableCell>
                                    <TableCell key={data.origin} align="right">{row.origin}</TableCell>
                                    <TableCell key={data.codeEdition} align="right">{row.codeEdition}</TableCell>
                                    <TableCell key={data.referenceOperation} align="right">{row.referenceOperation}</TableCell>
                                    <TableCell key={data.nOperation} align="right">{row.nOperation}</TableCell>
                                    <TableCell key={data.contrepartie} align="right">{row.contrepartie}</TableCell>
                                    <TableCell key={data.sens} align="right">{row.sens}</TableCell>
                                    <TableCell key={data.motifOperation} align="right">{row.motifOperation}</TableCell>
                                    <TableCell key={data.montant} align="right">{row.montant}</TableCell>
                    
                            </TableRow>
                            ))}

                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel className='my-3' control={<MuiThemeProvider theme = { theme }><Checkbox/></MuiThemeProvider>} label="Contrôle Armoire EMBARGOS" />
                        <Typography className='my-3'>
                            <span className='font-bold'>Total : </span>
                            <span className='text-gray-600'>96 969.00 €</span>
                        </Typography>
                    </Grid>
                    </Grid>
                </div>

            
          </AccordionDetails>
          </Accordion>
    </div>
        );
    
}

