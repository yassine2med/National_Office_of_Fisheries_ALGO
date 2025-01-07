import { themeColors } from "./variables";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
       primary: {
          main: themeColors.primary,
       },
       secondary: {
         main: themeColors.secondary,
       },
    },
    typography: { 
       useNextVariants: true
    }
 });