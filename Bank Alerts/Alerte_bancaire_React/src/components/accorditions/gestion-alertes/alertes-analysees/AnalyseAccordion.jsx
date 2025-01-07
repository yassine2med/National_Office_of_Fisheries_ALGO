import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { Grid , FormControl , Select , InputLabel, TextField, Divider } from '@mui/material'; 
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { themeColors } from '../../../../data/variables';

export default function AnalyseAccordion({style}){
  const [selectValue , setSelectValue] = useState('');
  const styles = {dividerStyle : { color : themeColors.primary}};

  return (
    <div>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant='h6'style={style.accordionTitle}> Analyse</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="relative px-5 flex-auto">
                <form class="gap-3">
                        
                        <Grid container spacing={2} rowSpacing={2}>

                        <Grid item xs={12} md={12}>
                            <FormControl fullWidth
                            sx={{
                                "& .MuiInputLabel-root": {color: 'black'},
                                '& label.Mui-focused': { color: themeColors.primary},
                                "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "black" },
                                "&:hover fieldset": { borderColor: themeColors.primary },
                                "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                }}}>
                                <InputLabel >Préconisation de l'analyste</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={selectValue}
                                    placeholder="Préconisation de l'analyste"
                                    label="Préconisation de l'analyste"
                                    onChange={(e =>setSelectValue(e.target.value))}
                                >
                                    
                                    <MenuItem value="sans_suite" >Sans suite</MenuItem>
                                    <MenuItem value="tracfin">Tracfin</MenuItem>
                                    <MenuItem value="autre">Autre</MenuItem>
                                    
                                </Select>
                                </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <div className='font-bold mb-3'>
                                <Divider style={styles.dividerStyle}>Détails de l'examen</Divider>
                            </div>  
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Identité du donneur de l'ordre" type='text' />
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='Ayant droit économique' type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Circuit bancaire de l'opération" type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label='Origine des fonds' type='text' onChange={() => {}}/>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <TextFieldCustom label="Motif de l'opération" type='text' onChange={() => {}}/>
                        </Grid>                    

                        <Grid item xs={6} md={4}>
                            <FormControl fullWidth
                            sx={{
                                "& .MuiInputLabel-root": {color: 'black'},
                                '& label.Mui-focused': { color: themeColors.primary},
                                "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "black" },
                                "&:hover fieldset": { borderColor: themeColors.primary },
                                "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                }}}>
                                <InputLabel >Pays de destination des fonds</InputLabel>
                                <Select
                                    className='inline-block'
                                    value={selectValue}
                                    placeholder='Pays de destination des fonds'
                                    label="Pays de destination des fonds"
                                    onChange={(e =>setSelectValue(e.target.value))}
                                >
                                    
                                    <MenuItem value={10} >Maroc</MenuItem>
                                    <MenuItem value={20}>France</MenuItem>
                                    <MenuItem value={30}>Canada</MenuItem>
                                    
                                </Select>
                                </FormControl>
                            </Grid>



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
                            fullWidth  multiline minRows={2} label='Motif de l’examen'type='text' onChange={() => {}}/>
                        </Grid>

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
                                placeholder='Explication'
                            fullWidth multiline minRows={2} label='Explication'type='text' onChange={() => {}}/>
                        </Grid>
     
                        </Grid>
                        
                </form>
            </div>
        </AccordionDetails>
    </Accordion>
    </div>
  )
}
