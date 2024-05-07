import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function AddClient({ closeEvent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const createUser = () => {
    // Aquí puedes realizar la lógica para agregar un nuevo cliente
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant='h5' align='center'>
        Agregar Cliente
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            size='small'
            onChange={handleNameChange}
            value={name}
            sx={{ minWidth: "100%" }} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Correo Electrónico"
            variant="outlined"
            size='small'
            onChange={handleEmailChange}
            value={email}
            sx={{ minWidth: "100%" }} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            size='small'
            onChange={handlePhoneChange}
            value={phone}
            sx={{ minWidth: "100%" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5' align='center'>
            <Button variant='contained' onClick={createUser}>
              Agregar
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  )
}
