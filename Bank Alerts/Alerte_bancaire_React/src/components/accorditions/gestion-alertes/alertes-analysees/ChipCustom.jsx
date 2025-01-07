import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { themeColors } from '../../../../data/variables';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Maroc',
  'France',
  'Usa',
  'UK',
];

function getStyles(name, countryName, theme) {
  return {
    fontWeight:
      countryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const  ChipCustom = () => {
  const theme = useTheme();
  const [countryName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl 
        sx={{
          "& .MuiInputLabel-root": {color: 'black'},
          '& label.Mui-focused': { color: themeColors.primary},
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "black" },
            "&:hover fieldset": { borderColor: themeColors.primary },
            "&.Mui-focused fieldset": { borderColor: themeColors.primary }
          }}}
      fullWidth>
        <InputLabel >Pays Principaux flux</InputLabel>
        <Select
          multiple
          value={countryName}
          onChange={handleChange}
          input={<OutlinedInput label="Pays Principaux flux" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, countryName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
 

export default ChipCustom;