import React, { useEffect , useState } from "react";
import TextFieldCustom from '../components/TextFieldCustom';
import ButtonCustom from "../components/ButtonCustom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import Typography from '@mui/material/Typography';
import { themeColors } from "../data/variables";
import {AiOutlineFileAdd} from 'react-icons/ai'
const IntergerFichier = () => {
    const styles = {titleModalColor: {color:themeColors.primary}}
    return (
        <>
            <div className="relative w-auto my-6 mx-auto max-w-xl mt-20">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <Typography variant="h5" style={styles.titleModalColor} className='font-bold'component="h5">
                  Intégration du fichier d'édition de contrôle                
                  </Typography>
                </div>
  
                <div className="relative p-6 flex-auto">  
                <div>
                    <p className="grid justify-center mb-5 font-bold">Veuillez choisir un motif:</p>
                    <TextFieldCustom type="file" accept=".xls .xlsx .csv"  icon={<AiOutlineFileAdd/>} />
                </div>
                </div>
  
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  
                <ButtonCustom variant='contained' color='primary' text='Confirmer' Externalstyle={{height:50}} handleSubmit={() => {}}/>
                 
                </div>
              </div>        
            </div>
        </>
    )
}

export default IntergerFichier