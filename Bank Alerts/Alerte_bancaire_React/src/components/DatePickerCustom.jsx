import React, { useEffect } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { themeColors } from '../data/variables';



const DatePickerCustom = ({icon , label , disabled ,type , value , name , handleChange}) => {

  const alignDate = (type) ? true : false

  return (
        <TextField

                inputProps={{min: 0, style: {
                  textAlign: (alignDate) ? ((value) ? 'start' : 'end') : 'start',
                }}}

                sx={{
                  "& .MuiInputLabel-root": {color: 'black'},
                  '& label.Mui-focused': { color: themeColors.primary},
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: disabled ? themeColors.lightGray : 'white',
                    "& > fieldset": { borderColor: "black" },
                    "&:hover fieldset": { borderColor: themeColors.primary },
                    "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                  }}}
                type={type ? type : 'date'}
                fullWidth
                name={name}
                disabled={disabled}
                label={label}
                placeholder={label}
                value={value}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                  <InputAdornment position="end">
                  {icon}
                  </InputAdornment>
                ),
                  }}/>

        )
  
}

export default DatePickerCustom