import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { themeColors } from '../data/variables';

const ButtonCustom = ({icon ,  variant , textColor , text , color ,borderColor,  colorMui ,  handleSubmit , Externalstyle}) => {
  
  const [colorState , setColorState] = React.useState("");
  const [borderColorState , setBorderColorState] = React.useState("");
  const [textColorState , setTextColorState] = React.useState("");
  
  useEffect(() => {
    switch(color){
      case "primary":
        setColorState(themeColors.primary);
        setBorderColorState(themeColors.primary);
        break;
      case "secondary":
        setColorState(themeColors.secondary);
        setBorderColorState(themeColors.secondary);
        break;
      case "success":
        setColorState(themeColors.success);
        setBorderColorState(themeColors.success);
        break;
      case "danger":
        setColorState(themeColors.danger);
        setBorderColorState(themeColors.danger);
        break;
      case "warning":
        setColorState(themeColors.warning);
        setBorderColorState(themeColors.warning);
        break;
      case "info":
        setColorState(themeColors.info);
        setBorderColorState(themeColors.info);
        break;
      case "blue":
        setColorState(themeColors.blue);
        setBorderColorState(themeColors.blue);
        break;
      case "disabled":
        setColorState(themeColors.disabled);
        setBorderColorState(themeColors.disabled);
        break;
      default:
        setColorState("#fff");
        setBorderColorState(themeColors.light);
        break;
      }
    switch(textColor){
      case "primary": setTextColorState(themeColors.primary);break;
      case "secondary": setTextColorState(themeColors.secondary); break;
      case "success": setTextColorState(themeColors.success); break;
      case "danger": setTextColorState(themeColors.danger); break;
      case "warning": setTextColorState(themeColors.warning); break;
      case "info": setTextColorState(themeColors.info); break;
      case "disabled": setTextColorState(themeColors.disabled); break;
      case "light": setTextColorState(themeColors.light); break;
      case "blue": setTextColorState(themeColors.blue); break;
      default: setTextColorState("#fff"); break;

    }
    switch(borderColor){
      case "primary": setBorderColorState(themeColors.primary);break;
      case "secondary": setBorderColorState(themeColors.secondary); break;
      case "success": setBorderColorState(themeColors.success); break;
      case "danger": setBorderColorState(themeColors.danger); break;
      case "warning": setBorderColorState(themeColors.warning); break;
      case "info": setBorderColorState(themeColors.info); break;
      case "disabled": setBorderColorState(themeColors.disabled); break;
      case "light": setBorderColorState(themeColors.light); break;
      case "blue": setBorderColorState(themeColors.blue); break;
      default: setBorderColorState("#fff"); break;

    }
    } , []);

    
  const style = {
    backgroundColor: colorState,
    borderColor: borderColorState,
    color: textColorState,
    ...Externalstyle
  }

  return (
    <Button
        onClick={handleSubmit}
        className='mr-2 rounded-md'
        variant={variant}
        style={style}
        startIcon={icon}
        fullWidth>
        {text}
      </Button>
    )
}

export default ButtonCustom