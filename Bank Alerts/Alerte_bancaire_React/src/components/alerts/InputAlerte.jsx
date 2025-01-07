import React, { useEffect , useState } from "react";
import { Typography  , IconButton, Divider, List} from "@mui/material";
import ButtonCustom from '../ButtonCustom';
import { FormControl , InputLabel , Select } from '@mui/material';
import { MenuItem } from "@material-ui/core";
import { themeColors } from "../../data/variables";

const InputAlert = ({isOpen , object , toggle, handleSubmitClick , icon , type , text }) => {

  const [showModal, setShowModal] = useState(isOpen)
  const [objectData , setObjectData] = useState(object)
  const [selectValue , setSelectValue] = useState('')

  useEffect(() => { setShowModal(isOpen); console.log(objectData) }, [isOpen]);

  const color = type === 'success' ? '#00C853' : '#D50000'
  const styles = {
    button : {backgroundColor : color},
    buttonHeight : {height:50},
    largeIcon : {height: '50px', width: '50px'}
  }

  return (
    <>
    {showModal ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
              <div className="relative p-6 flex-auto">
                <form class="w-full max-w-lg grid gap-3">
                    <div className=" grid place-items-center">
                        <IconButton
                          iconStyle={styles.largeIcon}

                        >
                          {icon}
                        </IconButton>
                    </div>
                    <div className="grid gap-4">
                    <Typography variant="h6" className="text-center" >{text}</Typography>
                    <Divider/>
                    <div>
                        <p className=" grid justify-center mb-5">Veuillez choisir un motif:</p>
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
                                label="Pays de destination des fonds"
                                onChange={(e =>setSelectValue(e.target.value))}
                            >
                                
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                
                            </Select>
                            </FormControl> 
                    </div>
                    </div>
                </form>
              </div>

              <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b gap-2">  
                <ButtonCustom variant='contained' color='success' Externalstyle={styles.buttonHeight} text='Confirmer' icon={null} handleSubmit={() => {}}/>
                <ButtonCustom variant='contained' color='danger' Externalstyle={styles.buttonHeight} text='Close' icon={null} handleSubmit={toggle}/>
              </div>
            </div>        
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </>
  )
}

export default InputAlert;