import React, { useEffect , useState } from "react";
import TextFieldCustom from '../components/TextFieldCustom';
import ButtonCustom from "../components/ButtonCustom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import { themeColors } from "../data/variables";

const ChangerMotdepasse = () => {
    const styles = {titleModalColor: {color:themeColors.primary}}
    return (
        <>
            <div className="relative w-auto my-6 mx-auto max-w-xl mt-20">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <Typography variant="h5" style={styles.titleModalColor} className='font-bold'component="h5">
                    Changer le mot de passe
                  </Typography>
                </div>
  
                <div className="relative p-6 flex-auto">
                  
                  <form class="w-full grid gap-3">
                    <TextFieldCustom label="Ancien mot de passe" type="password" icon={<LockOutlinedIcon/>} />
                    <TextFieldCustom label="Nouveau mot de passe" type="password" icon={<LockResetOutlinedIcon/>} />
                    <TextFieldCustom label="Confirmer nouveau mot de passe" type="password" icon={<LockResetOutlinedIcon/>} />
                  </form>
                </div>
  
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  
                <ButtonCustom variant='contained' color='primary' text='Confirmer' Externalstyle={{height:50}} handleSubmit={() => {}}/>
                 
                </div>
              </div>        
            </div>
        </>
    )
}

export default ChangerMotdepasse