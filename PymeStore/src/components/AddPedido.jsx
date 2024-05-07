import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function AddPedido({ closeEvent }) {
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);

  const handleProductoChange = (event) => {
    setProducto(event.target.value);
  };

  const handleCantidadChange = (event) => {
    setCantidad(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const addPedido = () => {
    // Aquí puedes implementar la lógica para agregar el pedido
  };

  const productos = [
    {
      value: 'Laptop',
      label: 'Laptop',
    },
    {
      value: 'Smartphone',
      label: 'Smartphone',
    },
    // Agrega más productos aquí
  ];

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Agregar Pedido
      </Typography>
      <IconButton
        style={{ position: 'absolute', top: '0', right: '0' }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            select
            label="Producto"
            variant="outlined"
            size="small"
            onChange={handleProductoChange}
            value={producto}
            sx={{ minWidth: '100%' }}
          >
            {productos.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Cantidad"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleCantidadChange}
            value={cantidad}
            sx={{ minWidth: '100%' }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Precio"
            variant="outlined"
            type="number"
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
            size="small"
            onChange={handlePrecioChange}
            value={precio}
            sx={{ minWidth: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={addPedido}>
              Agregar
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}
