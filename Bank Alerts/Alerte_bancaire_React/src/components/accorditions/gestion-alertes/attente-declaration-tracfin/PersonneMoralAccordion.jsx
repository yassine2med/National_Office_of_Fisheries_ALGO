import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';
import DatePickerCustom from '../../../DatePickerCustom';
import { themeColors } from '../../../../data/variables';
import { MenuItem } from '@material-ui/core';
import { Grid , FormControl , Select , InputLabel, IconButton ,Tabs , Tab ,Box } from '@mui/material'; 
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../../data/theme';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import ReplayIcon from '@mui/icons-material/Replay';

export default function PersonneMoralAccordion({style}){
    const styles = { icons : {fontSize:35}  }

    const [selectValueFormeJuridique , setSelectValueFormeJuridique] = useState('');
    const [selectValueSecteur , setSelectValueSecteur] = useState('')
    const [selectValuePaysImmatriculation , setSelectValuePaysImmatriculation] = useState('')
    const [selectValueTypeAddress , setSelectValueTypeAddress] = useState('')
    const [selectValueTypeVoie , setSelectValueTypeVoie] = useState('')
    const [selectValueNumVoie , setSelectValueNumVoie] = useState('')
    const [selectValuePaysNaissance , setSelectValuePaysNaissance] = useState('')

    const [liensPersonnePhysiques , setLiensPersonnePhysiques] = useState([
        { nomNaissance : '' , prenom : '' , dateNaissance : '' , lien : '' , precision : '' }
    ]);

    const [liensPersonneMorales , setLiensPersonneMorales] = useState([
        {
            indexPersonneMorale : 0,
            data : [
                { raisonSociale : 'lzejdz' , formeJuridique : '' , numImmatriculation : '' , lien : '' , precision : '' },
                { raisonSociale : 'zedlz,' , formeJuridique : '' , numImmatriculation : '' , lien : '' , precision : '' }
            ]

        },
        {
            indexPersonneMorale : 1,
            data : [
                { raisonSociale : 'mehdi' , formeJuridique : '' , numImmatriculation : '' , lien : '' , precision : '' },
                { raisonSociale : 'mehdi,' , formeJuridique : '' , numImmatriculation : '' , lien : '' , precision : '' }
            ]

        }
        
    ]);

    const [representantLegaux , setRepresentantLegaux ] = useState([
        { nomNaissance: 't1', prenom: '' , dateNaissance:'' , villeNaissance:'' , paysNaissance:'' , fonction:'' },
        { nomNaissance: 't2', prenom: '' , dateNaissance:'' , villeNaissance:'' , paysNaissance:'' , fonction:'' },
    ])

    const [supportFinanciere , setSupportFinanciere ] = useState([
        {typeCompte:'1', ibanCompte:'1' , droitcompte:'1' ,
            personneHabilite : [
                { nomNaissance : '11' , prenom : '11' , dateNaissance :'' , villeNaissance : '11' }, 
                { nomNaissance : '12' , prenom : '12' , dateNaissance :'' , villeNaissance : '12' },
            ]},
            {typeCompte:'1', ibanCompte:'1' , droitcompte:'1' ,
            personneHabilite : [
                { nomNaissance : '11' , prenom : '11' , dateNaissance :'' , villeNaissance : '11' },
                { nomNaissance : '11' , prenom : '11' , dateNaissance :'' , villeNaissance : '11' },
                { nomNaissance : '11' , prenom : '11' , dateNaissance :'' , villeNaissance : '11' },
                { nomNaissance : '11' , prenom : '11' , dateNaissance :'' , villeNaissance : '11' },
            ]}
    ])

    const [persons , setPersons] = useState([
        { nom: 'mehdi', typeDocument: '' , dateDocument:'' , label:'' },
        { nom: 'mehdi', typeDocument: '' , dateDocument:'' , label:'' },
    ])

    const [value, setValue] = React.useState(persons.length - 1);

    /* Change handlers */
    const handleFormChangeRepresentant = (index, event) => {
        console.log(event.target.name+ " <== nom : " + event.target.value);
        let data = [...representantLegaux];
        data[index][event.target.name] = event.target.value;
        setRepresentantLegaux(data);
        console.log(representantLegaux);
    }

    const handleFormChangeSupportFinanciere = (index , event) => {
        console.log(event.target.name+ " <== nom : " + event.target.value);
        let data = [...supportFinanciere];
        data[index][event.target.name] = event.target.value;
        setSupportFinanciere(data);
        console.log(supportFinanciere);
    }

    const handleFormChangePersonneHabilite = (indexSupport , indexPersonne, event) => {
        console.log(event.target.name+ " <== nom : " + event.target.value);
        let data = [...supportFinanciere];
        data[indexSupport].personneHabilite[indexPersonne][event.target.name] = event.target.value;
        console.log("data["+indexSupport+"].personneHabilite["+indexPersonne+"]["+event.target.name+"] = "+event.target.value);
        setSupportFinanciere(data);
        console.log(supportFinanciere);
    }

    const handleFormChangeLienPersonnePhysique = (index , event) => {
        console.log(event.target.name+ " <== nom : " + event.target.value);
        let data = [...liensPersonnePhysiques];
        data[index][event.target.name] = event.target.value;
        setLiensPersonnePhysiques(data);
        console.log(liensPersonnePhysiques);
    }

    const handleFormChangeLienPersonneMorale = (index , event) => {
        console.log(event.target.name+ " <== nom : " + event.target.value);
        let data = [...liensPersonneMorales];
        data[index][event.target.name] = event.target.value;
        setLiensPersonneMorales(data);
        console.log(liensPersonneMorales);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    /*Reset handlers*/
    const resetValueSupportFinanciere = (indexSupport) => {
        let data = [...supportFinanciere];
            data[indexSupport].typeCompte = '';
            data[indexSupport].ibanCompte = '';
            data[indexSupport].droitcompte = '';
            data[indexSupport].personneHabilite.map((personne,indexPersonne) => {
                personne.nomNaissance = '';
                personne.prenom = '';
                personne.dateNaissance = '';
                personne.villeNaissance = '';
            })
            setSupportFinanciere(data);
    }

    const resetValuePersonneHabilite = (indexSupport , indexPersonneHabilite) => {
        let data = [...supportFinanciere];
            data[indexSupport].personneHabilite.map((personne , index) => {
                if(index === indexPersonneHabilite){
                    personne.nomNaissance = '';
                    personne.prenom = '';
                    personne.dateNaissance = '';
                    personne.villeNaissance = '';
                }
            })
            setSupportFinanciere(data);
            console.log(supportFinanciere[indexSupport].personneHabilite[indexPersonneHabilite]);
    }

    const resetValueRepresentantLegale = (index) => {
        let data = [...representantLegaux];
            data[index].nomNaissance = '';
            data[index].prenom = '';
            data[index].dateNaissance = '';
            data[index].villeNaissance = '';
            data[index].paysNaissance = '';
            data[index].fonction = '';
            setRepresentantLegaux(data);
    }

    const resetValueLienPersonnePhysique = (index) => {
        let data = [...liensPersonnePhysiques];
            data[index].nomNaissance = '';
            data[index].prenom = '';
            data[index].dateNaissance = '';
            data[index].lien = '';
            data[index].precision = '';
            setLiensPersonnePhysiques(data);
    }

    const resetValueLienPersonneMorale = (indexPersonne , indexLienPersonneMorale) => {
        //  let rowReset = liensPersonneMorales.find(lien => lien.indexPersonneMorale == indexPersonne).data.at(0);
        //  rowReset.raisonSociale = '';
        //  rowReset.formeJuridique = '';
        //  rowReset.lien = '';
        //  rowReset.precision = '';
        //  rowReset.numImmatriculation = '';
        //  setLiensPersonneMorales(...liensPersonneMorales  , liensPersonneMorales.indexOf(0).data.splice(indexLienPersonneMorale , 1 , rowReset));
        //  console.log(liensPersonneMorales);
         
    }



    /* Add handlers */
    const addPerson = () => {
        let newPerson = { filePath: '', typeDocument: '' , dateDocument:'' , label:'' }
        setPersons([...persons, newPerson])
        setValue(persons.length)
    }
    
    const addRepresentantLegal = () => {
        let newRow = { nomNaissance: '', prenom: '' , dateNaissance:'' , villeNaissance:'' , paysNaissance:'' , fonction:'' }
        setRepresentantLegaux([...representantLegaux, newRow])
    }

    const addSupportFinanciere = () => {
        let newRow = { typeCompte:'1', ibanCompte:'1' , droitcompte:'1' , personneHabilite : [{ nomNaissance : '11' , prenom : '11' , dateNaissance :'' , villeNaissance : '11' }] }
        setSupportFinanciere([...supportFinanciere, newRow])
    }

    const addPersonneHabilite  = (index) => {
        let newRow = { nomNaissance : '' , prenom : '' , dateNaissance :'' , villeNaissance : '' }
        setSupportFinanciere([...supportFinanciere] , supportFinanciere[index].personneHabilite.push(newRow))
        console.log(supportFinanciere[index].personneHabilite)
    }

    const addLienPersonnePhysique = () => {
        let newRow = { nomNaissance : '' , prenom : '' , dateNaissance : '' , lien : '' , precision : '' }
        setLiensPersonnePhysiques([...liensPersonnePhysiques, newRow])
    }

    const addLienPersonneMorale = () => {
        let newRow = { raisonSociale : '' , formeJuridique : '' , numImmatriculation : '' , lien : '' , precision : '' }
        setLiensPersonneMorales([...liensPersonneMorales, newRow])
    }

    /* Remove handlers */
    const removeRepresentantLegal = (index) => {
        let data = [...representantLegaux];
        data.splice(index, 1)
        setRepresentantLegaux(data)
    }

    const removeSupportFinanciere = (index) => {
        let data = [...supportFinanciere];
        data.splice(index, 1)
        setSupportFinanciere(data)
    }

    const removePersonneHabilite  = (indexSupport , indexPersonne) => {
        let data = [...supportFinanciere];
        data[indexSupport].personneHabilite.splice(indexPersonne, 1)
        setSupportFinanciere(data)
        console.log(supportFinanciere[indexSupport].personneHabilite)
    }

    const removePerson = (index) => {
        let data = [...persons];
        data.splice(index, 1)
        setPersons(data)
        setValue(persons.length)
        
    }

    const removeLienPersonnePhysique = (index) => {
        let data = [...liensPersonnePhysiques];
        data.splice(index, 1)
        setLiensPersonnePhysiques(data)
    }

    const removeLienPersonneMorale = (index) => {
        let data = [...liensPersonneMorales];
        data.splice(index, 1)
        setLiensPersonneMorales(data)
    }

    /* Others */ 
    const dateValue = (index) => { 
        let data = [...representantLegaux];
        if(data[index].dateDocument != ''){
            return true;
        }
        return false;
    }

  return (
    <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography variant='h6'style={style.accordionTitle}> Personne Morales </Typography>
            </AccordionSummary>
        
            <AccordionDetails>
                <div className="relative px-5 flex-auto">
                    <form class="gap-3">
                    <ThemeProvider theme={theme}>
                    <TabContext value={value}>
                    <Box sx={{ maxWidth: { xs: 320, sm: 700 , md: 700 , lg:1200 }, bgcolor: 'background.paper' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example">

                            <Tab sx={{width:150, color:'black'}} icon={<AddCircleOutlineIcon onClick={addPerson} />}  label='Ajouter' value={0} />
                        

                        {persons.map((person, index) => (
                            <Tab sx={{width:150}} value={index} label={`Personne ${index+1}`} onChange={(e) => handleChange(e,index)} 
                                 icon={<DeleteOutlineIcon onClick={() => removePerson(index)} /> } />
                        ))}

                        </Tabs>
                    </Box>
                    
                    {persons.map((person, indexPersonne) => (

                        <TabPanel value={indexPersonne}> 

                            {/*Identite*/}
                            <Grid container spacing={2} rowSpacing={2}>
                                <Grid item xs={12} md={12}>
                                    <div className='font-bold mb-4 my-6'>
                                        <Typography variant='h7' color='primary'> Informations sur l'identité de la personne morale </Typography>
                                    </div>
                                </Grid>

                                <div className='w-full border-solid border-2 border-black p-3 rounded-md ' >   

                                    {/*statique form*/}
                                    <Grid container spacing={2} rowSpacing={2}>
                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Raison sociale' type='text' onChange={() => {}}/>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Enseigne ou sigle' type='text' onChange={() => {}}/>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label="N° d'immatriculation" type='text' onChange={() => {}}/>
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
                                                    <InputLabel > Pays d'immatriculation </InputLabel>
                                                    <Select
                                                        className='inline-block'
                                                        value={selectValuePaysImmatriculation}
                                                        placeholder="Pays d'immatriculation"
                                                        label="Pays d'immatriculation"
                                                        onChange={(e =>setSelectValuePaysImmatriculation(e.target.value))}
                                                    >
                                                        
                                                        <MenuItem value={10} >Maroc</MenuItem>
                                                        <MenuItem value={20}>France</MenuItem>
                                                        <MenuItem value={30}>Canada</MenuItem>
                                                        
                                                    </Select>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <DatePickerCustom label="Date d'immatriculation" type='date' onChange={() => {}}/>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Identifiant TVA UE' type='text' onChange={() => {}}/>
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
                                                    <InputLabel >Forme juridique</InputLabel>
                                                    <Select
                                                        className='inline-block'
                                                        value={selectValueFormeJuridique}
                                                        placeholder='Forme juridique'
                                                        label="Forme juridique"
                                                        onChange={(e =>setSelectValueFormeJuridique(e.target.value))}
                                                    >
                                                        
                                                        <MenuItem value={10} >EURL</MenuItem>
                                                        <MenuItem value={20}>EURL 1</MenuItem>
                                                        <MenuItem value={30}>EURL 2</MenuItem>
                                                        
                                                    </Select>
                                                    </FormControl>
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
                                                    <InputLabel >Secteur</InputLabel>
                                                    <Select
                                                        className='inline-block'
                                                        value={selectValueSecteur}
                                                        placeholder='Secteur'
                                                        label="Secteur"
                                                        onChange={(e =>setSelectValueSecteur(e.target.value))}
                                                    >
                                                        
                                                        <MenuItem value={10} >EURL</MenuItem>
                                                        <MenuItem value={20}>EURL 1</MenuItem>
                                                        <MenuItem value={30}>EURL 2</MenuItem>
                                                        
                                                    </Select>
                                                    </FormControl>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Activité' type='text' onChange={() => {}}/>
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
                                                    <InputLabel >Type d'adresse</InputLabel>
                                                    <Select
                                                        className='inline-block'
                                                        value={selectValueTypeAddress}
                                                        placeholder="Type d'adresse"
                                                        label="Type d'adresse"
                                                        onChange={(e =>setSelectValueTypeAddress(e.target.value))}
                                                    >
                                                        
                                                        <MenuItem value={10} >EURL</MenuItem>
                                                        <MenuItem value={20}>EURL 1</MenuItem>
                                                        <MenuItem value={30}>EURL 2</MenuItem>
                                                        
                                                    </Select>
                                                </FormControl>
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
                                                    <InputLabel >Type de Voie</InputLabel>
                                                    <Select
                                                        className='inline-block'
                                                        value={selectValueTypeVoie}
                                                        placeholder="Type de Voie"
                                                        label="Type de Voie"
                                                        onChange={(e =>setSelectValueTypeVoie(e.target.value))}
                                                    >
                                                        
                                                        <MenuItem value={10} >EURL</MenuItem>
                                                        <MenuItem value={20}>EURL 1</MenuItem>
                                                        <MenuItem value={30}>EURL 2</MenuItem>
                                                        
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            
                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='N° voie' type='text' onChange={() => {}}/>
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
                                                    <InputLabel >Complément N° Voie</InputLabel>
                                                    <Select
                                                        className='inline-block'
                                                        value={selectValueNumVoie}
                                                        placeholder="Complément N° Voie"
                                                        label="Complément N° Voie"
                                                        onChange={(e =>setSelectValueNumVoie(e.target.value))}
                                                    >
                                                        
                                                        <MenuItem value={10} >EURL</MenuItem>
                                                        <MenuItem value={20}>EURL 1</MenuItem>
                                                        <MenuItem value={30}>EURL 2</MenuItem>
                                                        
                                                    </Select>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Voie' type='text' onChange={() => {}}/>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Complément' type='text' onChange={() => {}}/>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Code postal' type='text' onChange={() => {}}/>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Mobile' type='text' onChange={() => {}}/>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Fax' type='text' onChange={() => {}}/>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Email' type='text' onChange={() => {}}/>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Site internet' type='text' onChange={() => {}}/>
                                            </Grid>
                                        </Grid>
                                </div>
                            </Grid>

                            {/*Representant*/}
                            <Grid container spacing={2} rowSpacing={2}>
                                <Grid item xs={12} md={12}>
                                    <div className='font-bold mb-4 my-6'>
                                        <Typography variant='h7' color='primary'> Représentants légaux </Typography>
                                    </div>
                                </Grid>

                                <div className=' w-full border-solid border-2 border-black p-3 rounded-md ' >   
                                    <div className='grid justify-end mb-5 '>
                                        <Grid container spacing={2} rowSpacing={2}>
                                            <div>                                            
                                                <IconButton  size='large' onClick={addRepresentantLegal}>
                                                    <AddCircleOutlineIcon style={styles.icons}  color="success" />
                                                </IconButton>
                                            </div>
                                            <div>
                                                <IconButton size='large' onClick={() => resetValueRepresentantLegale(0)}>
                                                        <ReplayIcon style={styles.icons}  color="primary" />
                                                </IconButton>
                                            </div>
                                        </Grid>
                                    </div>
                                    {/*statique form*/}
                                    <Grid item xs={12} md={12} >
  
                                            <Grid container spacing={2} rowSpacing={2} key={indexPersonne}>

                                                <Grid item xs={6} md={4}>
                                                    <TextFieldCustom label='Nom de naissance' name='nomNaissance' value={representantLegaux[0].nomNaissance}  type='text' handleChange={(e) => handleFormChangeRepresentant(0 , e)}/>
                                                </Grid>

                                                <Grid item xs={6} md={4}>
                                                    <TextFieldCustom label='Prénom' name='prenom' value={representantLegaux[0].prenom} type='text' handleChange={(e) => handleFormChangeRepresentant(0 , e)}/>
                                                </Grid>

                                                <Grid item xs={6} md={4}>
                                                    <DatePickerCustom label="Date de naissance" name='dateNaissance' value={representantLegaux[0].dateNaissance} type='date' handleChange={(e) => handleFormChangeRepresentant(0 , e)}/>
                                                </Grid>
         
                                                <Grid item xs={6} md={4}>
                                                    <TextFieldCustom  label="Ville de naissance" name='villeNaissance' value={representantLegaux[0].villeNaissance} type='text' handleChange={(e) => handleFormChangeRepresentant(0 , e)}/>
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
                                                        <InputLabel >Pays de naissance</InputLabel>
                                                        <Select
                                                            className='inline-block'
                                                            value={representantLegaux[0].paysNaissance}
                                                            placeholder="Pays de naissance"
                                                            label="Pays de naissance"
                                                            name="paysNaissance"
                                                            onChange={(e) => handleFormChangeRepresentant(0, e)}
                                                        >
                                                            
                                                            <MenuItem value="maroc" >Maroc</MenuItem>
                                                            <MenuItem value="france">France</MenuItem>
                                                            <MenuItem value="canada">Canada</MenuItem>
                                                            
                                                        </Select>
                                                </FormControl>
                                                </Grid>

                                                <Grid item xs={6} md={4}>
                                                    <TextFieldCustom label='Fonction' name='fonction' value={representantLegaux[0].fonction} type='text' handleChange={(e) => handleFormChangeRepresentant(0 , e)}/>
                                                </Grid> 
                                                <Grid item xs={12} md={12}>
                                                    <div className='my-3 border-b-2'>
                                                    </div>
                                                </Grid>

                                                        
                                            </Grid>
                                    </Grid>

                                    {/*dynamique form*/}               
                                    {representantLegaux.slice(1).map((representantLegale, index) => (
                                    <Grid item xs={12} md={12} >
                                            {console.log(index = index+1)}
                                            <div className='grid justify-end mb-5'>
                                                <Grid container spacing={2} rowSpacing={2}>
                                                    <div>                                            
                                                        <IconButton onClick={() => removeRepresentantLegal(index)}>
                                                            <DeleteOutlineIcon style={styles.icons} color="error" size='large' />
                                                        </IconButton>
                                                    </div>
                                                    <div>
                                                        <IconButton size='large' onClick={() => resetValueRepresentantLegale(index)}>
                                                                <ReplayIcon style={styles.icons}  color="primary" />
                                                        </IconButton>
                                                    </div>  
                                                </Grid>
                                            </div>
                                            <Grid container spacing={2} rowSpacing={2} key={index}>
                                                <Grid item xs={6} md={4}>
                                                    <TextFieldCustom label='Nom de naissance' name='nomNaissance' value={representantLegale.nomNaissance}  type='text' handleChange={(e) => handleFormChangeRepresentant(index , e)}/>
                                                </Grid>

                                                <Grid item xs={6} md={4}>
                                                    <TextFieldCustom label='Prénom' name='prenom' value={representantLegale.prenom} type='text' handleChange={(e) => handleFormChangeRepresentant(index , e)}/>
                                                </Grid>

                                                <Grid item xs={6} md={4}>
                                                    <DatePickerCustom label="Date de naissance" name='dateNaissance' value={representantLegale.dateNaissance} type='date' handleChange={(e) => handleFormChangeRepresentant(index , e)}/>
                                                </Grid>
         
                                                <Grid item xs={6} md={4}>
                                                    <TextFieldCustom  label="Ville de naissance" name='villeNaissance' value={representantLegale.villeNaissance} type='text' handleChange={(e) => handleFormChangeRepresentant(index , e)}/>
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
                                                        <InputLabel >Pays de naissance</InputLabel>
                                                        <Select
                                                            className='inline-block'
                                                            value={representantLegale.paysNaissance}
                                                            placeholder="Pays de naissance"
                                                            label="Pays de naissance"
                                                            name="paysNaissance"
                                                            onChange={(e) => handleFormChangeRepresentant(index, e)}
                                                        >
                                                            
                                                            <MenuItem value="maroc" >Maroc</MenuItem>
                                                            <MenuItem value="france">France</MenuItem>
                                                            <MenuItem value="canada">Canada</MenuItem>
                                                            
                                                        </Select>
                                                </FormControl>
                                                </Grid>

                                                <Grid item xs={6} md={4}>
                                                    <TextFieldCustom label='Fonction' name='fonction' value={representantLegale.fonction} type='text' handleChange={(e) => handleFormChangeRepresentant(index , e)}/>
                                                </Grid> 
                                                    <Grid item xs={12} md={12}>
                                                    <div className='my-3 border-b-2'>
                                                    </div>
                                                    </Grid>
                                            </Grid>
                                    </Grid>
                                    ))}
                                </div>
                            </Grid>

                            {/*Support Financiere*/}
                            <Grid container spacing={2} rowSpacing={2}>
                                <Grid item xs={12} md={12}>
                                    <div className='font-bold mb-4 my-6'>
                                        <Typography variant='h7' color='primary'> Support Financiere </Typography>
                                    </div>
                                </Grid>

                                <div className=' w-full border-solid border-2 border-black p-3 rounded-md ' >   
                                <div className='grid justify-end mb-5 '>
                                    <Grid container spacing={2} rowSpacing={2}>
                                        <div>
                                        <IconButton size='large' onClick={() => addSupportFinanciere()}>
                                            <AddCircleOutlineIcon style={styles.icons}  color="success" />
                                        </IconButton>
                                        </div>
                                        <div>
                                        <IconButton size='large' onClick={() => resetValueRepresentantLegale(0)}>
                                            <ReplayIcon style={styles.icons}  color="primary" />
                                        </IconButton>
                                        </div>
                                    </Grid>
                                </div>

                                    <Grid item xs={12} md={12} >
                                        <Grid container spacing={2} rowSpacing={2} key={indexPersonne}>
                                        <Grid item xs={12} md={12} >

                                        {/*statique form*/}
                                        <Grid container spacing={2} rowSpacing={2} key={indexPersonne}>
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
                                                        <InputLabel >Type de compte</InputLabel>
                                                        <Select
                                                            className='inline-block'
                                                            value={supportFinanciere[0].typeCompte}
                                                            placeholder="Type de compte"
                                                            label="Type de compte"
                                                            name="typeCompte"
                                                            onChange={(e) => handleFormChangeSupportFinanciere(0, e)}
                                                        >
                                                            
                                                            <MenuItem value="maroc" >Maroc</MenuItem>
                                                            <MenuItem value="france">France</MenuItem>
                                                            <MenuItem value="canada">Canada</MenuItem>
                                                            
                                                        </Select>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='N° de compte international (IBAN)' value={supportFinanciere[0].ibanCompte}  type='text'
                                                                 name='ibanCompte'  handleChange={(e) => handleFormChangeSupportFinanciere(0, e)}/>
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
                                                        <InputLabel >Droits sur le compte</InputLabel>
                                                        <Select
                                                            className='inline-block'
                                                            value={supportFinanciere[0].droitcompte}
                                                            placeholder="Droits sur le compte"
                                                            label="Droits sur le compte"
                                                            name="droitcompte"
                                                            onChange={(e) => handleFormChangeSupportFinanciere(0, e)}
                                                        >
                                                            
                                                            <MenuItem value="maroc" >Maroc</MenuItem>
                                                            <MenuItem value="france">France</MenuItem>
                                                            <MenuItem value="canada">Canada</MenuItem>
                                                            
                                                        </Select>
                                                </FormControl>
                                            </Grid>


                                        <Grid container  >
                                            <Grid item xs={12} md={12}>
                                                <div className='font-bold ml-7 mt-5'>
                                                    <Typography variant='h7' color='primary'> Personnes habilitées à utiliser ce support </Typography>
                                                </div>
                                            </Grid>
                                            
                                            <div className='w-full border-solid border-2 border-black p-3 rounded-md mt-4 mx-7' >   

                                            <Grid item xs={12} md={12}>
                                                <div className='my-3 border-b-2'>
                                                    <div className=' w-full p-3' >   
                                                        <div className='grid justify-end mb-5 '>
                                                            <Grid container spacing={2} rowSpacing={2}>
                                                                <div>
                                                                    <IconButton size='large' onClick={() => addPersonneHabilite(0)}>
                                                                        <AddCircleOutlineIcon style={styles.icons}  color="success" />
                                                                    </IconButton>
                                                                </div>
                                                                <div>
                                                                <IconButton size='large' onClick={() => resetValuePersonneHabilite(0 , 0 )}>
                                                                        <ReplayIcon style={styles.icons}  color="primary" />
                                                                </IconButton>
                                                                </div>
                                                            </Grid>
                                                        </div>
                                                        <Grid item xs={12} md={12} >
                                                            <Grid container spacing={2} rowSpacing={2} >

                                                                <Grid item xs={6} md={3}>
                                                                    <TextFieldCustom label='Nom de naissance' type='text' value={supportFinanciere[0].personneHabilite[0].nomNaissance} 
                                                                     name='nomNaissance' handleChange={(e) => handleFormChangePersonneHabilite(0 , 0 , e)}/>
                                                                </Grid>

                                                                <Grid item xs={6} md={3}>
                                                                    <TextFieldCustom label='Prénom' type='text' value={supportFinanciere[0].personneHabilite[0].prenom} 
                                                                    name='prenom' handleChange={(e) => handleFormChangePersonneHabilite(0 , 0 , e)} />
                                                                </Grid>

                                                                <Grid item xs={6} md={3}>
                                                                    <DatePickerCustom label="Date naissance" type='date' value={supportFinanciere[0].personneHabilite[0].dateNaissance} 
                                                                    name='dateNaissance' handleChange={(e) => handleFormChangePersonneHabilite(0 , 0 , e)} />
                                                                </Grid>
                        
                                                                <Grid item xs={6} md={3}>
                                                                    <TextFieldCustom  label="Ville de naissance" type='text' value={supportFinanciere[0].personneHabilite[0].villeNaissance} 
                                                                    name='villeNaissance' handleChange={(e) => handleFormChangePersonneHabilite(0 , 0 , e)}/>
                                                                </Grid>

                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                </div>
                                            </Grid>
                                            
                                            {supportFinanciere[0].personneHabilite.slice(1).map((personneHabilite, indexPersonneHabilite) => (                                               
                                            <Grid item xs={12} md={12}>
                                                <div className='my-3 border-b-2 '>
                                                    <div className=' w-full p-3' >   
                                                        <div className='grid justify-end mb-5 '>
                                                            <Grid container spacing={2} rowSpacing={2}>

                                                                <div>
                                                                    <IconButton size='large' onClick={(indexPersonneHabilite) => removePersonneHabilite(0,indexPersonneHabilite)}>
                                                                        <DeleteOutlineIcon style={styles.icons}  color="error" />
                                                                    </IconButton>
                                                                </div>
                                                                <div>
                                                                    <IconButton size='large' onClick={() => resetValuePersonneHabilite(0 , indexPersonneHabilite + 1 )}>
                                                                            <ReplayIcon style={styles.icons}  color="primary" />
                                                                    </IconButton>
                                                                </div>
                                                            </Grid>
                                                        </div>
                                                        <Grid item xs={12} md={12} >
                                                            <Grid container spacing={2} rowSpacing={2} key={indexPersonne}>

                                                                <Grid item xs={6} md={3}>
                                                                    <TextFieldCustom label='Nom de naissance' type='text' value={supportFinanciere[0].personneHabilite[indexPersonneHabilite + 1].nomNaissance} 
                                                                     name='nomNaissance' handleChange={(e) => handleFormChangePersonneHabilite(0 , indexPersonneHabilite + 1 , e)}/>
                                                                </Grid>

                                                                <Grid item xs={6} md={3}>
                                                                    <TextFieldCustom label='Prénom' type='text' value={supportFinanciere[0].personneHabilite[indexPersonneHabilite + 1].prenom}
                                                                    name='prenom' handleChange={(e) => handleFormChangePersonneHabilite(0 , indexPersonneHabilite + 1 , e)}/>
                                                                </Grid>

                                                                <Grid item xs={6} md={3}>
                                                                    <DatePickerCustom label="Date naissance" type='date' value={supportFinanciere[0].personneHabilite[indexPersonneHabilite + 1].dateNaissance}
                                                                    name='dateNaissance' handleChange={(e) => handleFormChangePersonneHabilite(0 , indexPersonneHabilite + 1 , e)}/>
                                                                </Grid>
                        
                                                                <Grid item xs={6} md={3}>
                                                                    <TextFieldCustom  label="Ville de naissance" type='text' value={supportFinanciere[0].personneHabilite[indexPersonneHabilite + 1].villeNaissance}
                                                                    name='villeNaissance' handleChange={(e) => handleFormChangePersonneHabilite(0 , indexPersonneHabilite + 1 , e)} />
                                                                </Grid>

                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                </div>
                                            </Grid>
                                            ))}

                                            </div>
                                            <Grid item xs={12} md={12}>
                                                <div className='my-3 border-b-2'>
                                                </div>
                                            </Grid>
                                        </Grid>  

                                        </Grid>   

                                        {/* dynamique form*/}
                                        {supportFinanciere.slice(1).map((sp, indexSupport) => (
                                            <>
                                                <div className='grid justify-end mb-5 mt-4'>
                                                        <Grid container spacing={2} rowSpacing={2}>
                                                                <div>
                                                                    <IconButton onClick={() => removeSupportFinanciere(indexSupport + 1)}>
                                                                        <DeleteOutlineIcon style={styles.icons} color="error" size='large' />
                                                                    </IconButton>
                                                                </div>
                                                                <div>
                                                                    <IconButton size='large' onClick={() => resetValueSupportFinanciere(indexSupport + 1)}>
                                                                            <ReplayIcon style={styles.icons}  color="primary" />
                                                                    </IconButton>
                                                                </div>
                                                        </Grid>
                                                </div>
                                                    
                                                <Grid container spacing={2} rowSpacing={2} key={indexSupport+1}>
                                                    
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
                                                                    <InputLabel >Type de compte</InputLabel>
                                                                    <Select
                                                                        className='inline-block'
                                                                        value={sp.typeCompte}
                                                                        placeholder="Type de compte"
                                                                        label="Type de compte"
                                                                        name="typeCompte"
                                                                        onChange={(e) => handleFormChangeSupportFinanciere(indexSupport + 1 , e)}
                                                                    >
                                                                        
                                                                        <MenuItem value="maroc" >Maroc</MenuItem>
                                                                        <MenuItem value="france">France</MenuItem>
                                                                        <MenuItem value="canada">Canada</MenuItem>
                                                                        
                                                                    </Select>
                                                            </FormControl>
                                                        </Grid>

                                                        <Grid item xs={6} md={4}>
                                                            <TextFieldCustom label='N° de compte international (IBAN)' name='ibanCompte' value={sp.ibanCompte}  type='text' handleChange={(e) => handleFormChangeSupportFinanciere(indexSupport + 1, e)}/>
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
                                                                    <InputLabel >Droits sur le compte</InputLabel>
                                                                    <Select
                                                                        className='inline-block'
                                                                        value={sp.droitcompte}
                                                                        placeholder="Droits sur le compte"
                                                                        label="Droits sur le compte"
                                                                        name="droitcompte"
                                                                        onChange={(e) => handleFormChangeSupportFinanciere(indexSupport + 1, e)}
                                                                    >
                                                                        
                                                                        <MenuItem value="maroc" >Maroc</MenuItem>
                                                                        <MenuItem value="france">France</MenuItem>
                                                                        <MenuItem value="canada">Canada</MenuItem>
                                                                        
                                                                    </Select>
                                                            </FormControl>
                                                        </Grid>


                                                        <Grid container  >
                                                        <Grid item xs={12} md={12}>
                                                            <div className='font-bold ml-7 mt-5'>
                                                                <Typography variant='h7' color='primary'> Personnes habilitées à utiliser ce support </Typography>
                                                            </div>
                                                        </Grid>
                                                        <div className='w-full border-solid border-2 border-black p-3 rounded-md mt-4 mx-7' >

                                                            <Grid item xs={12} md={12}>
                                                                        <div className='my-3 border-b-2'>
                                                                            <div className=' w-full p-3' >
                                                                                <div className='grid justify-end mb-5 '>
                                                                                    <Grid container spacing={2} rowSpacing={2}>
                                                                                        <div>
                                                                                            <IconButton size='large' onClick={() => addPersonneHabilite(indexSupport + 1)}>
                                                                                                <AddCircleOutlineIcon style={styles.icons}  color="success" />
                                                                                            </IconButton>
                                                                                        </div>
                                                                                        <div>
                                                                                            <IconButton size='large' onClick={() => resetValuePersonneHabilite(indexSupport + 1 , 0 )}>
                                                                                                    <ReplayIcon style={styles.icons}  color="primary" />
                                                                                            </IconButton>
                                                                                        </div>
                                                                                    </Grid>
                                                                                </div>
                                                                                <Grid item xs={12} md={12} >
                                                                                    <Grid container spacing={2} rowSpacing={2}>

                                                                                        <Grid item xs={6} md={3}>
                                                                                            <TextFieldCustom label='Nom de naissance'  type='text' value={sp.personneHabilite[0].nomNaissance}
                                                                                            name='nomNaissance' handleChange={(e) => handleFormChangePersonneHabilite(indexSupport + 1 , 0 , e)} />
                                                                                        </Grid>

                                                                                        <Grid item xs={6} md={3}>
                                                                                            <TextFieldCustom label='Prénom'  type='text' value={sp.personneHabilite[0].prenom}
                                                                                             name='prenom' handleChange={(e) => handleFormChangePersonneHabilite(indexSupport + 1 , 0 , e)}/>
                                                                                        </Grid>

                                                                                        <Grid item xs={6} md={3}>
                                                                                            <DatePickerCustom label='Date naissance'  type='date' value={sp.personneHabilite[0].dateNaissance}
                                                                                            name='dateNaissance' handleChange={(e) => handleFormChangePersonneHabilite(indexSupport + 1 , 0 , e)} />
                                                                                        </Grid>

                                                                                        <Grid item xs={6} md={3}>
                                                                                            <TextFieldCustom  label='Ville de naissance' type='text' value={sp.personneHabilite[0].villeNaissance}
                                                                                            name='villeNaissance' handleChange={(e) => handleFormChangePersonneHabilite(indexSupport + 1 , 0 , e)} />
                                                                                        </Grid>

                                                                                    </Grid>
                                                                                </Grid>
                                                                            </div>
                                                                        </div>
                                                            </Grid>

                                                            {supportFinanciere[indexSupport + 1].personneHabilite.slice(1).map((personneHabilite, indexPersonneHabilite) => (
                                                                <Grid item xs={12} md={12}>
                                                                        <div className='my-3 border-b-2'>
                                                                            <div className=' w-full p-3 ' >
                                                                                <div className='grid justify-end mb-5 '>
                                                                                    <Grid container spacing={2} rowSpacing={2}>
                                                                                        <div>
                                                                                            <IconButton size='large' onClick={(indexPersonneHabilite) => removePersonneHabilite(indexSupport + 1 ,indexPersonneHabilite + 1)}>
                                                                                                <DeleteOutlineIcon style={styles.icons}  color="error" />
                                                                                            </IconButton>
                                                                                        </div>
                                                                                        <div>
                                                                                            <IconButton size='large' onClick={() => resetValuePersonneHabilite(indexSupport + 1 , indexPersonneHabilite + 1 )}>
                                                                                                    <ReplayIcon style={styles.icons}  color="primary" />
                                                                                            </IconButton>
                                                                                        </div>
                                                                                    </Grid>
                                                                                </div>
                                                                                <Grid item xs={12} md={12} >
                                                                                    <Grid container spacing={2} rowSpacing={2}>

                                                                                        <Grid item xs={6} md={3}>
                                                                                            <TextFieldCustom label='Nom de naissance' type='text' value={personneHabilite.nomNaissance}
                                                                                            name='nomNaissance' handleChange={(e) => handleFormChangePersonneHabilite(indexSupport + 1 , indexPersonneHabilite + 1 , e)}/>
                                                                                        </Grid>

                                                                                        <Grid item xs={6} md={3}>
                                                                                            <TextFieldCustom label='Prénom' type='text' value={personneHabilite.prenom}
                                                                                             name='prenom' handleChange={(e) => handleFormChangePersonneHabilite(indexSupport + 1 , indexPersonneHabilite + 1 , e)}/>
                                                                                        </Grid>

                                                                                        <Grid item xs={6} md={3}>
                                                                                            <DatePickerCustom label='Date naissance' type='date' value={personneHabilite.dateNaissance}
                                                                                             name='dateNaissance' handleChange={(e) => handleFormChangePersonneHabilite(indexSupport + 1 , indexPersonneHabilite + 1 , e)}/>
                                                                                        </Grid>

                                                                                        <Grid item xs={6} md={3}>
                                                                                            <TextFieldCustom  label='Ville de naissance' type='text' value={personneHabilite.villeNaissance}
                                                                                             name='villeNaissance' handleChange={(e) => handleFormChangePersonneHabilite(indexSupport + 1 , indexPersonneHabilite + 1 , e)} />
                                                                                        </Grid>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </div>
                                                                        </div>
                                                                </Grid>
                                                            ))}

                                                        </div>
                                                        <Grid item xs={12} md={12}>
                                                            <div className='my-3 border-b-2'>
                                                            </div>
                                                        </Grid>
                                                </Grid>


                                                </Grid>
                                            </>
                                        ))}

                                        </Grid>                    
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>   

                            {/* Liens avec d'autres personnes physiques */}
                            <Grid container spacing={2} rowSpacing={2}>
                                <Grid item xs={12} md={12}>
                                    <div className='font-bold mb-4 my-6'>
                                        <Typography variant='h7' color='primary'> Liens avec d'autres personnes Physiques </Typography>
                                    </div>
                                </Grid>

                                <div className='w-full border-solid border-2 border-black p-3 rounded-md ' >   
                                    <div className='grid justify-end mb-5 '>
                                        <Grid container spacing={2} rowSpacing={2}>
                                            <div>                                            
                                                <IconButton onClick={addLienPersonnePhysique}>
                                                    <AddCircleOutlineIcon style={styles.icons}  color="success" />
                                                </IconButton>
                                            </div>
                                            <div>
                                                <IconButton onClick={() => resetValueLienPersonnePhysique(0)}>
                                                        <ReplayIcon style={styles.icons}  color="primary" />
                                                </IconButton>
                                            </div>
                                        </Grid>
                                    </div>
                                    {/*statique form*/}
                                    <Grid container spacing={2} rowSpacing={2}>
                                            <Grid item xs={6} md={4}>
                                                <TextFieldCustom label='Nom naissance' type='text' value={liensPersonnePhysiques[0].nomNaissance}
                                                 name="nomNaissance" handleChange={(e) => handleFormChangeLienPersonnePhysique(0 , e) } />
                                            </Grid>

                                            <Grid item lg={4} md={4}>
                                                <TextFieldCustom label='Prénom' type='text' value={liensPersonnePhysiques[0].prenom}
                                                 name="prenom" handleChange={(e) => handleFormChangeLienPersonnePhysique(0 , e) } />
                                            </Grid>

                                            <Grid item lg={4} md={4}>
                                                <DatePickerCustom label='Date naissance' type='date' value={liensPersonnePhysiques[0].dateNaissance}
                                                 name="dateNaissance"  handleChange={(e) => handleFormChangeLienPersonnePhysique(0 , e)} />
                                            </Grid>

                                            <Grid item lg={4} md={4}>
                                                <TextFieldCustom label='Précision' type='text' value={liensPersonnePhysiques[0].precision}
                                                 name="precision" handleChange={(e) => handleFormChangeLienPersonnePhysique(0 , e) } />
                                            </Grid>

                                            <Grid item lg={4} md={4}>
                                                <FormControl fullWidth
                                                sx={{
                                                    "& .MuiInputLabel-root": {color: 'black'},
                                                    '& label.Mui-focused': { color: themeColors.primary},
                                                    "& .MuiOutlinedInput-root": {
                                                    "& > fieldset": { borderColor: "black" },
                                                    "&:hover fieldset": { borderColor: themeColors.primary },
                                                    "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                                    }}}>
                                                    <InputLabel > Lien  </InputLabel>
                                                    <Select
                                                        className='inline-block'
                                                        value={liensPersonnePhysiques[0].lien}
                                                        placeholder="Lien"
                                                        name='lien'
                                                        label="Lien"
                                                        onChange={(e => handleFormChangeLienPersonnePhysique(0 , e))}
                                                    >
                                                        
                                                        <MenuItem value='lien1' >Lien 1</MenuItem>
                                                        <MenuItem value='lien2' >Lien 2</MenuItem>

                                                        
                                                    </Select>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={12} md={12}>
                                                <div className='my-3 border-b-2'>
                                                </div>
                                            </Grid>
                                    </Grid>

                                    {/*Dynamique form*/}
                                    {liensPersonnePhysiques.slice(1).map((lienPersonnePhysique, indexLienPersonnePhysique) => (
                                        <>
                                            <div className='grid justify-end mb-5 '>
                                                <Grid container spacing={2} rowSpacing={2}>
                                                    <div>                                            
                                                        <IconButton onClick={() => removeLienPersonnePhysique(indexLienPersonnePhysique)}>
                                                            <DeleteOutlineIcon style={styles.icons}  color="error" />
                                                        </IconButton>
                                                    </div>
                                                    <div>
                                                        <IconButton onClick={() => resetValueLienPersonnePhysique(indexLienPersonnePhysique + 1)}>
                                                                <ReplayIcon style={styles.icons}  color="primary" />
                                                        </IconButton>
                                                    </div>
                                                </Grid>
                                            </div>
                                            <Grid container spacing={2} rowSpacing={2}>
                                                    <Grid item xs={6} md={4}>
                                                        <TextFieldCustom label='Nom naissance' type='text' value={liensPersonnePhysiques[indexLienPersonnePhysique + 1 ].nomNaissance}
                                                            name="nomNaissance" handleChange={(e) => handleFormChangeLienPersonnePhysique(indexLienPersonnePhysique + 1  , e) } />
                                                    </Grid>
        
                                                    <Grid item lg={4} md={4}>
                                                        <TextFieldCustom label='Prénom' type='text' value={liensPersonnePhysiques[indexLienPersonnePhysique + 1].prenom}
                                                            name="prenom" handleChange={(e) => handleFormChangeLienPersonnePhysique(indexLienPersonnePhysique + 1 , e) } />
                                                    </Grid>
        
                                                    <Grid item lg={4} md={4}>
                                                        <DatePickerCustom label='Date naissance' type='date' value={liensPersonnePhysiques[indexLienPersonnePhysique + 1].dateNaissance}
                                                            name="dateNaissance"  handleChange={(e) => handleFormChangeLienPersonnePhysique(indexLienPersonnePhysique + 1 , e)} />
                                                    </Grid>
        
                                                    <Grid item lg={4} md={4}>
                                                        <TextFieldCustom label='Précision' type='text' value={liensPersonnePhysiques[indexLienPersonnePhysique + 1].precision}
                                                            name="precision" handleChange={(e) => handleFormChangeLienPersonnePhysique(indexLienPersonnePhysique + 1 , e) } />
                                                    </Grid>
        
                                                    <Grid item lg={4} md={4}>
                                                        <FormControl fullWidth
                                                        sx={{
                                                            "& .MuiInputLabel-root": {color: 'black'},
                                                            '& label.Mui-focused': { color: themeColors.primary},
                                                            "& .MuiOutlinedInput-root": {
                                                            "& > fieldset": { borderColor: "black" },
                                                            "&:hover fieldset": { borderColor: themeColors.primary },
                                                            "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                                            }}}>
                                                            <InputLabel > Lien  </InputLabel>
                                                            <Select
                                                                className='inline-block'
                                                                value={liensPersonnePhysiques[indexLienPersonnePhysique + 1].lien}
                                                                placeholder="Lien"
                                                                name='lien'
                                                                label="Lien"
                                                                onChange={(e => handleFormChangeLienPersonnePhysique(indexLienPersonnePhysique + 1 , e))}
                                                            >
                                                                
                                                                <MenuItem value='lien1' >Lien 1</MenuItem>
                                                                <MenuItem value='lien2' >Lien 2</MenuItem>
        
                                                                
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12} md={12}>
                                                        <div className='my-3 border-b-2'>
                                                        </div>
                                                    </Grid>
                                            </Grid>
                                        </>
                                    )
                                    )}

                                </div>
                            </Grid>

                            {/* Liens avec d'autres personnes morales */}
                            <Grid container spacing={2} rowSpacing={2}>
                                <Grid item xs={12} md={12}>
                                    <div className='font-bold mb-4 my-6'>
                                        <Typography variant='h7' color='primary'> Liens avec d'autres personnes Morales </Typography>
                                    </div>
                                </Grid>

                                <div className='w-full border-solid border-2 border-black p-3 rounded-md ' >   
                                    <div className='grid justify-end mb-5 '>
                                        <Grid container spacing={2} rowSpacing={2}>
                                            <div>                                            
                                                <IconButton onClick={addLienPersonneMorale}>
                                                    <AddCircleOutlineIcon style={styles.icons}  color="success" />
                                                </IconButton>
                                            </div>
                                            <div>
                                                <IconButton onClick={() => resetValueLienPersonneMorale(0)}>
                                                        <ReplayIcon style={styles.icons}  color="primary" />
                                                </IconButton>
                                            </div>
                                        </Grid>
                                    </div>
                                    {/*statique form*/}
                                    <Grid container spacing={2} rowSpacing={2}>
                                            <Grid item xs={6} md={4}>
                                                {console.log('onject : ' + liensPersonneMorales.find(lien => lien.indexPersonneMorale == indexPersonne).data.at(0).raisonSociale)}
                                                <TextFieldCustom label='Raison sociale' type='text' value={liensPersonneMorales.find(lien => lien.indexPersonneMorale == indexPersonne).data.at(0).raisonSociale}
                                                 name="raisonSociale" handleChange={(e) => handleFormChangeLienPersonneMorale(0 , e) } />
                                            </Grid>

                                            <Grid item lg={4} md={4}>
                                                <TextFieldCustom label='Forme juridique' type='text' value={liensPersonneMorales.find(lien => lien.indexPersonneMorale == indexPersonne).data.at(0).formeJuridique}
                                                 name="formeJuridique" handleChange={(e) => handleFormChangeLienPersonneMorale(0 , e) } />
                                            </Grid>

                                            <Grid item lg={4} md={4}>
                                                <TextFieldCustom label="N° d'immatriculation" type='text' value={liensPersonneMorales.find(lien => lien.indexPersonneMorale == indexPersonne).data.at(0).numeroImmatriculation}
                                                 name="numImmatriculation" handleChange={(e) => handleFormChangeLienPersonneMorale(0 , e) } />
                                            </Grid>

                                            <Grid item lg={4} md={4}>
                                                <TextFieldCustom label='Précision' type='text' value={liensPersonneMorales.find(lien => lien.indexPersonneMorale == indexPersonne).data.at(0).precision}
                                                 name="precision" handleChange={(e) => handleFormChangeLienPersonneMorale(0 , e) } />
                                            </Grid>

                                            <Grid item lg={4} md={4}>
                                                <FormControl fullWidth
                                                sx={{
                                                    "& .MuiInputLabel-root": {color: 'black'},
                                                    '& label.Mui-focused': { color: themeColors.primary},
                                                    "& .MuiOutlinedInput-root": {
                                                    "& > fieldset": { borderColor: "black" },
                                                    "&:hover fieldset": { borderColor: themeColors.primary },
                                                    "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                                    }}}>
                                                    <InputLabel > Lien  </InputLabel>
                                                    <Select
                                                        className='inline-block'
                                                        value={liensPersonneMorales.find(lien => lien.indexPersonneMorale == indexPersonne).data.at(0).lien}
                                                        placeholder="Lien"
                                                        name='lien'
                                                        label="Lien"
                                                        handleChange={(e) => handleFormChangeLienPersonneMorale(0 , e) }
                                                    >
                                                        
                                                        <MenuItem value='lien1' >Lien 1</MenuItem>
                                                        <MenuItem value='lien2' >Lien 2</MenuItem>

                                                    </Select>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={12} md={12}>
                                                <div className='my-3 border-b-2'>
                                                </div>
                                            </Grid>
                                    </Grid>

                                    {/*Dynamique form*/}
                                    {liensPersonneMorales.find(lien => lien.indexPersonneMorale == indexPersonne).data.slice(1).map((lienPersonneMorale, indexLienPersonneMorale) => (
                                        <>
                                            <div className='grid justify-end mb-5 '>
                                                <Grid container spacing={2} rowSpacing={2}>
                                                    <div>                                            
                                                        <IconButton onClick={() => removeLienPersonneMorale(indexLienPersonneMorale)}>
                                                            <DeleteOutlineIcon style={styles.icons}  color="error" />
                                                        </IconButton>
                                                    </div>
                                                    <div>
                                                        <IconButton onClick={() => resetValueLienPersonneMorale(indexLienPersonneMorale + 1)}>
                                                                <ReplayIcon style={styles.icons}  color="primary" />
                                                        </IconButton>
                                                    </div>
                                                </Grid>
                                            </div>
                                            <Grid container spacing={2} rowSpacing={2}>
                                                    <Grid item xs={6} md={4}>
                                                        <TextFieldCustom label='Raison Sociale' type='text' value={lienPersonneMorale.raisonSociale}
                                                            name="raisonSociale" handleChange={(e) => handleFormChangeLienPersonneMorale(indexLienPersonneMorale + 1  , e) } />
                                                    </Grid>
        
                                                    <Grid item lg={4} md={4}>
                                                        <TextFieldCustom label='Forme Juridique' type='text' value={lienPersonneMorale.formeJuridique}
                                                            name="formeJuridique" handleChange={(e) => handleFormChangeLienPersonneMorale(indexLienPersonneMorale + 1 , e) } />
                                                    </Grid>
        
                                                    <Grid item lg={4} md={4}>
                                                        <TextFieldCustom label="N° d'immatriculation" type='text' value={lienPersonneMorale.numImmatriculation}
                                                            name="numImmatriculation"  handleChange={(e) => handleFormChangeLienPersonneMorale(indexLienPersonneMorale + 1 , e)} />
                                                    </Grid>
        
                                                    <Grid item lg={4} md={4}>
                                                        <TextFieldCustom label='Précision' type='text' value={lienPersonneMorale.precision}
                                                            name="precision" handleChange={(e) => handleFormChangeLienPersonneMorale(indexLienPersonneMorale + 1 , e) } />
                                                    </Grid>
        
                                                    <Grid item lg={4} md={4}>
                                                        <FormControl fullWidth
                                                        sx={{
                                                            "& .MuiInputLabel-root": {color: 'black'},
                                                            '& label.Mui-focused': { color: themeColors.primary},
                                                            "& .MuiOutlinedInput-root": {
                                                            "& > fieldset": { borderColor: "black" },
                                                            "&:hover fieldset": { borderColor: themeColors.primary },
                                                            "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                                            }}}>
                                                            <InputLabel > Lien  </InputLabel>
                                                            <Select
                                                                className='inline-block'
                                                                value={lienPersonneMorale.lien}
                                                                placeholder="Lien"
                                                                name='lien'
                                                                label="Lien"
                                                                onChange={(e => handleFormChangeLienPersonneMorale(indexLienPersonneMorale + 1 , e))}
                                                            >
                                                                
                                                                <MenuItem value='lien1' >Lien 1</MenuItem>
                                                                <MenuItem value='lien2' >Lien 2</MenuItem>
        
                                                                
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12} md={12}>
                                                        <div className='my-3 border-b-2'>
                                                        </div>
                                                    </Grid>
                                            </Grid>
                                        </>
                                    )
                                    )}

                                </div>
                            </Grid>

                        </TabPanel>
                        ))}
                    </TabContext>
                    </ThemeProvider>
                    </form>
                </div>
            </AccordionDetails>
    </Accordion>
  )
}
