import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import Button from '@mui/material/Button';

const ColorPickerButtons = () => {
    const [color, setColor] = useState("#aabbcc");
    const [colorPrincipal, setColorPrincipal] = useState(color);
    const [colorSecundario, setColorSecundario] = useState(color);
    const [selectedButton, setSelectedButton] = useState(null);
  
    const handleColorChange = (newColor) => {
      setColor(newColor);
      if (selectedButton === 'colorPrincipal') {
        setColorPrincipal(newColor);
      } else if (selectedButton === 'colorSecundario') {
        setColorSecundario(newColor);
      }
    };
  
    const handleButtonClick = (buttonName) => {
      setSelectedButton(buttonName);
    };
  
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 50%)'
      }}>
        <div style={{
          gridColumn: '1/2',
        }}>
          <HexColorPicker color={color} onChange={handleColorChange} />
        </div>
        <div style={{
          gridColumn: '2/3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button
            variant="contained"
            style={{ backgroundColor: selectedButton === 'colorPrincipal' ? colorPrincipal : colorPrincipal, marginRight: '8px', textTransform:'none' }}
            onClick={() => handleButtonClick('colorPrincipal')}
          >
            Color Principal
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: selectedButton === 'colorSecundario' ? colorSecundario : colorSecundario, textTransform:'none' }}
            onClick={() => handleButtonClick('colorSecundario')}
          >
            Color Secundario
          </Button>
        </div>
      </div>
    );
};

export default ColorPickerButtons;