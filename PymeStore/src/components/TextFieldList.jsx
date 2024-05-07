import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function TextFieldList() {
    const [textFields, setTextFields] = useState([{ id: 1, label: 'Categoria 1', margin: 'dense' }]);
  
    const addTextField = () => {
      const newId = textFields.length + 1;
      setTextFields([...textFields, { id: newId, label: `Categoria ${newId}`, margin: 'dense' }]);
    };
  
    return (
      <div>
        {textFields.map((textField) => (
          <div key={textField.id} style={{ marginBottom: '15px' }}>
            <TextField
              label={textField.label}
              id={`margin-dense-${textField.id}`}
              margin={textField.margin}
              fullWidth
              size="small"
              style={{ width: '200px', margin: 'auto' }}
            />
          </div>
        ))}
        <Button onClick={addTextField} variant="contained" startIcon={<AddIcon />} style={{backgroundColor:'#AA543C', color:'white'}}>
        </Button>
      </div>
    );
  }

  export default TextFieldList;