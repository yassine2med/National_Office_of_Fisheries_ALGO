import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import { Grid , FormControl , Select , InputLabel, Divider ,TextField ,IconButton } from '@mui/material'; 
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { themeColors } from '../../../../data/variables';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function PieceJointesAccordion({style}){
    const styles = { icons : {fontSize:35}  }
    const [selectValueTypeDoc , setSelectValueTypeDoc] = useState('');

    const [attachments, setAttachments] = useState([
        { filePath: '', typeDocument: '' , dateDocument:'' , label:'' },
      ])

    const handleFormChange = (index, event) => {
        console.log(event.target.name, event.target.value);
        let data = [...attachments];
        data[index][event.target.name] = event.target.value;
        setAttachments(data);
        console.log(attachments);
    }

    const addAttachment = () => {
        let newAttachment = { filePath: '', typeDocument: '' , dateDocument:'' , label:'' }
        setAttachments([...attachments, newAttachment])
    }

    const dateValue = (index) => {
        let data = [...attachments];
        if(data[index].dateDocument != ''){
            return true;
        }
        return false;
    }

    const removeAttachment = (index) => {
        let data = [...attachments];
        data.splice(index, 1)
        setAttachments(data)
        console.log(attachments);
    }
    

  return (
    <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography variant='h6'style={style.accordionTitle}> Pieces Jointes </Typography>
            </AccordionSummary>
        
            <AccordionDetails>
                <div className="relative px-5 flex-auto">   
                    <form class="gap-3">
                    <div className='grid justify-end mb-5'>
                        <Grid container spacing={2} rowSpacing={2}>
                            <Grid item xs={1} md={1} lg={1}>
                            <IconButton  onClick={addAttachment}>
                                <AddCircleOutlineIcon style={styles.icons} size="large" color="success" />
                            </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                    
                    <div className='mb-10 border-solid border-2 border-black rounded-md p-3 ' >

                                <Grid container spacing={2} rowSpacing={2} >

                                    <Grid item xs={12} md={12} lg={12}>
                                        <TextField
                                            sx={{
                                            "& .MuiInputLabel-root": {color: 'black'},
                                            '& label.Mui-focused': { color: themeColors.primary},
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "black" },
                                                "&:hover fieldset": { borderColor: themeColors.primary },
                                                "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                            }}}
                                            fullWidth
                                            name='filePath'
                                            type='file'
                                            value={attachments[0].filePath}
                                            onChange={(e) => handleFormChange(0 , e)}
                                            InputProps={{
                                            }}/>
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
                                            <InputLabel >Type de document</InputLabel>
                                            <Select
                                                className='inline-block'
                                                value={attachments[0].typeDocument}
                                                placeholder="Type de document"
                                                label="Type de document"
                                                name="typeDocument"
                                                onChange={(e) => handleFormChange(0, e)}
                                            >
                                                
                                                <MenuItem value="987909" >987909</MenuItem>
                                                <MenuItem value="098098">098098</MenuItem>
                                                <MenuItem value="098009">098009</MenuItem>
                                                
                                            </Select>
                                            </FormControl>
                                    </Grid>

                                    <Grid item xs={6} md={4}>
                                    <TextField
                                        inputProps={{min: 0, style: {
                                        textAlign: (dateValue(0)) ? 'start' : 'end',
                                        }}}

                                        sx={{
                                        "& .MuiInputLabel-root": {color: 'black'},
                                        '& label.Mui-focused': { color: themeColors.primary},
                                        "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: "black" },
                                            "&:hover fieldset": { borderColor: themeColors.primary },
                                            "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                        }}}
                                        type="date"
                                        fullWidth
                                        label="Date du document"
                                        placeholder="Date du document"
                                        name='dateDocument'
                                        value={attachments[0].dateDocument}
                                        onChange={(e) => {handleFormChange(0 , e)}}/>
                                    </Grid>

                                    <Grid item xs={6} md={4}>
                                    <TextField
                                            sx={{
                                            "& .MuiInputLabel-root": {color: 'black'},
                                            '& label.Mui-focused': { color: themeColors.primary},
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "black" },
                                                "&:hover fieldset": { borderColor: themeColors.primary },
                                                "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                            }}}
                                            fullWidth
                                            label='Libellé'
                                            placeholder='Libellé'
                                            name='label'
                                            type='text'
                                            value={attachments[0].label}
                                            onChange={(e) => handleFormChange(0 , e)}
                                            InputProps={{
                                            }}/>
                                    </Grid>

                                </Grid>
                    </div>

                    
                        {attachments.slice(1).map((attachment, index) => (
                            <>
                                {console.log(index=index+1)}
                                <div className='mb-10 border-solid border-2 border-black rounded-md p-3 ' key={index}>
                                    <div className='grid justify-end mb-5'>
                                        <Grid container spacing={2} rowSpacing={2}>
                                            <Grid item xs={1} md={1} lg={1}>
                                            <IconButton onClick={() => removeAttachment(index)}>
                                                <DeleteOutlineIcon style={styles.icons} color="error" size='large' />
                                            </IconButton>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <Grid container spacing={2} rowSpacing={2} key={index}>

                                        <Grid item xs={12} md={12} lg={12}>
                                            <TextField
                                                sx={{
                                                "& .MuiInputLabel-root": {color: 'black'},
                                                '& label.Mui-focused': { color: themeColors.primary},
                                                "& .MuiOutlinedInput-root": {
                                                    "& > fieldset": { borderColor: "black" },
                                                    "&:hover fieldset": { borderColor: themeColors.primary },
                                                    "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                                }}}
                                                fullWidth
                                                name='filePath'
                                                type='file'
                                                value={attachment.filePath}
                                                onChange={(e) => handleFormChange(index , e)}
                                                InputProps={{
                                                }}/>
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
                                                <InputLabel >Type de document</InputLabel>
                                                <Select
                                                    className='inline-block'
                                                    value={attachment.typeDocument}
                                                    placeholder="Type de document"
                                                    label="Type de document"
                                                    name="typeDocument"
                                                    onChange={(e) => handleFormChange(index, e)}
                                                >
                                                    
                                                    <MenuItem value="987909" >987909</MenuItem>
                                                    <MenuItem value="098098">098098</MenuItem>
                                                    <MenuItem value="098009">098009</MenuItem>
                                                    
                                                </Select>
                                                </FormControl>
                                        </Grid>

                                        <Grid item xs={6} md={4}>
                                        <TextField
                                            inputProps={{min: 0, style: {
                                            textAlign: (dateValue(index)) ? 'start' : 'end',
                                            }}}

                                            sx={{
                                            "& .MuiInputLabel-root": {color: 'black'},
                                            '& label.Mui-focused': { color: themeColors.primary},
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "black" },
                                                "&:hover fieldset": { borderColor: themeColors.primary },
                                                "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                            }}}
                                            type="date"
                                            fullWidth
                                            label="Date du document"
                                            placeholder="Date du document"
                                            name='dateDocument'
                                            value={attachment.dateDocument}
                                            onChange={(e) => {handleFormChange(index , e)}}/>
                                        </Grid>

                                        <Grid item xs={6} md={4}>
                                        <TextField
                                                sx={{
                                                "& .MuiInputLabel-root": {color: 'black'},
                                                '& label.Mui-focused': { color: themeColors.primary},
                                                "& .MuiOutlinedInput-root": {
                                                    "& > fieldset": { borderColor: "black" },
                                                    "&:hover fieldset": { borderColor: themeColors.primary },
                                                    "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                                                }}}
                                                fullWidth
                                                label='Libellé'
                                                placeholder='Libellé'
                                                name='label'
                                                type='text'
                                                value={attachment.label}
                                                onChange={(e) => handleFormChange(index , e)}
                                                InputProps={{
                                                }}/>
                                        </Grid>

                                    </Grid>
                                </div>
                            </>
                        ))}

                    </form>
                </div>
            </AccordionDetails>
    </Accordion>
  )
}
