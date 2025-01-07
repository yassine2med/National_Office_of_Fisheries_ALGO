import React, { useEffect } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { themeColors } from '../data/variables';



const TextFieldCustom = ({icon , label , type , name ,  handleChange  ,accept ,disabled , required , value }) => {


  return (
        <TextField
                sx={{
                  "& .MuiInputLabel-root": {color: 'black'},
                  '& label.Mui-focused': { color: themeColors.primary},
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: disabled ? themeColors.lightGray : 'white',
                    "& > fieldset": { borderColor: "black"},
                    "&:hover fieldset": { borderColor: themeColors.primary },
                    "&.Mui-focused fieldset": { borderColor: themeColors.primary }
                  }}}
                type={type}
                fullWidth
                name={name}
                accept={accept}
                label={label}
                placeholder={label}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                required={required}
                InputProps={{
                  endAdornment: (
                  <InputAdornment position="end">
                  {icon}
                  </InputAdornment>
                ),
                  }}/>

        )
  
}

export default TextFieldCustom