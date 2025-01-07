import * as React from 'react';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom'
import ButtonCustom from '../components/ButtonCustom';
import { Box } from '@mui/system';
import {links} from '../data/gestionAlertesLinks';
import { button } from '@material-tailwind/react';
import DataTableTest from '../components/datatables/DataTableTest';


const GestionAlertes = () => {

    const Styles = {button : {height:70}}
  return (

    <div className={`border-0 rounded-lg shadow-lg mt-8 mx-10 mr-2 py-5 px-5 relative flex flex-col bg-white outline-none focus:outline-none`}>

    <Box sx={{ width: '100%' }}>

        <Grid container spacing={1} direction="row" justifyContent="center" alignItems="baseline">

            {
                links.map((link, index) => {
                    return (
                        <Grid item lg={1.5} key={index}>
                            <NavLink  key={link.name}  to={link.path}>
                            <ButtonCustom
                                Externalstyle={Styles.button}
                                text={link.name}
                                variant="outlined"
                               borderColor="primary"
                               textColor="primary"
                               hoverColor="themeColors.primary"
                              
                            />
                            </NavLink>
                        </Grid>
                    )
                })
            }
            <DataTableTest/>
          </Grid>      
       </Box>

    </div>
  )
}

export default GestionAlertes