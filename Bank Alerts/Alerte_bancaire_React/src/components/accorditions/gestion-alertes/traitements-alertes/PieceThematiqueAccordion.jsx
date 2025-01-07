import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextFieldCustom from '../../../TextFieldCustom';  
import {BsTrash} from 'react-icons/bs';
import { Grid , Card , CardActions ,CardHeader} from '@mui/material'; 
import { useState } from 'react';

export default function PieceThematiqueAccordion({style}) {

  const [files , setFiles] = useState(
    [
      {index : 0 , file: "https://drive.google.com/file/d/0B6xeB9nZ-6_IVGgtbVd1QXQyRkk/view?resourcekey=0-f_lIDOE6JqDs9e2UFunp5w"},
      {index : 1 , file: "https://ak0.picdn.net/shutterstock/videos/12107510/thumb/1.jpg"},
    ]
  )
  

  const imageGlobal = "https://ak0.picdn.net/shutterstock/videos/12107510/thumb/1.jpg"
  const styles = {
    card : {header : {backgroundColor:'#641A45' , color:'#fff' , selfAlign: 'center' , fontWeight:'bold', height:40}},
    image : {height:50, width:300}
  }

  const removeFile = (index) => {
    console.log(files.length)
    files.splice(index, 1);
    console.log(files.length)
  }

  const previewImages = (event) => {
    console.log(event.target.files[0]);
    files.push({index : files.length , file: URL.createObjectURL(event.target.files[0])})
    console.log(files)

  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" style={style.accordionTitle}>Piéces thématiques</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="relative px-5 flex-auto">
                <form class="gap-3">
                    <Grid container spacing={2} rowSpacing={2}>

                      <Grid item xs={12} md={12} >
                        <Card>
                          <div className='text-center mb-5'>
                            <CardHeader title="KYC"  style={styles.card.header} titleTypographyProps={{variant:'h7'}} />
                          </div>

                          <CardActions>
                          <Grid container spacing={2} rowSpacing={2}>
                            <Grid item xs={12} md={12}>                                 
                             <Grid container spacing={2} rowSpacing={2}>

                              <div className='flex display-block ml-4 gap-2'>
                                {files.map((file, index) => (
                                    <Grid item xs={3} md={3}>
                                      <div className='relative'>  
                                          <p className='absolute mt-3 ml-4'>file.pdf</p>
                                          <a href={file}  target="_blank">
                                            <img className='rounded-md' key={index} style={styles.image} src={imageGlobal} alt="piece-jointe"/>
                                          </a>
                                        <button type="button" class="absolute top-0 right-0 bg-red-500 text-white p-2 rounded hover:bg-red-800 m-2"
                                                onClick={(index) => removeFile(index)}><BsTrash/></button>
                                      </div>
                                    </Grid>
                                ))}
                              </div>
                                  
                              </Grid>
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <div className='px-2'>
                                <TextFieldCustom type='file' handleChange={(e) => previewImages(e)}/>
                              </div>
                            </Grid>

                          </Grid>

                          </CardActions>
                        </Card>
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <Card>
                            <div className='text-center mb-5'>
                              <CardHeader title="Investigation"  style={styles.card.header} titleTypographyProps={{variant:'h7'}} />
                            </div>
                          <CardActions>
                          <Grid container spacing={2} rowSpacing={2}>
                            <Grid item xs={12} md={12}>                                 
                             <Grid container spacing={2} rowSpacing={2}>

                             <div className='flex display-block ml-4 gap-2'>
                                {files.map((file, index) => (
                                    <Grid item xs={3} md={3}>
                                      <div className='relative'>  
                                          <p className='absolute mt-3 ml-4'>file.pdf</p>
                                          <a href={file}  target="_blank">
                                            <img className='rounded-md' key={index} style={styles.image} src={imageGlobal} alt="piece-jointe"/>
                                          </a>
                                        <button type="button" class="absolute top-0 right-0 bg-red-500 text-white p-2 rounded hover:bg-red-800 m-2"><BsTrash/></button>
                                      </div>
                                    </Grid>
                                ))}
                              </div>
                                  
                              </Grid>
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <div className='px-2'>
                                <TextFieldCustom type='file'  onChange={(e) => {console.log(e.target.files[0])}}/>
                              </div>
                            </Grid>

                          </Grid>

                          </CardActions>
                        </Card>
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <Card>
                            <div className='text-center mb-5'>
                              <CardHeader title="Echange de mails"  style={styles.card.header} titleTypographyProps={{variant:'h7'}} />
                            </div>
                            <CardActions>
                          <Grid container spacing={2} rowSpacing={2}>
                            <Grid item xs={12} md={12}>                                 
                             <Grid container spacing={2} rowSpacing={2}>

                             <div className='flex display-block ml-4 gap-2'>
                                {files.map((file, index) => (
                                    <Grid item xs={3} md={3}>
                                      <div className='relative'>  
                                          <p className='absolute mt-3 ml-4'>file.pdf</p>
                                          <a href={file}  target="_blank">
                                            <img className='rounded-md' key={index} style={styles.image} src={imageGlobal} alt="piece-jointe"/>
                                          </a>
                                        <button type="button" class="absolute top-0 right-0 bg-red-500 text-white p-2 rounded hover:bg-red-800 m-2"><BsTrash/></button>
                                      </div>
                                    </Grid>
                                ))}
                              </div>
                                  
                              </Grid>
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <div className='px-2'>
                                <TextFieldCustom type='file'  onChange={(e) => {console.log(e.target.files[0])}}/>
                              </div>
                            </Grid>

                          </Grid>

                          </CardActions>
                        </Card>
                      </Grid>

                    </Grid>
                </form>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
