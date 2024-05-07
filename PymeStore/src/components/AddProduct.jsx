import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {useState, useEffect} from "react"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function AddProduct({closeEvent}) {
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [category,setCategory] = useState("");
  
  const handleNameChange = (event) => {
    setName(event.targetvalue)
  };

  const handlePriceChange = (event) => {
    setPrice(event.targetvalue)
  };

  const handleCategoryChange = (event) => {
    setCategory(event.targetvalue)
  };

  const createUser = () =>{};

  const currencies = [
    {
      value: 'electronics',
      label: 'Electronico',
    },
    {
      value: 'laptops',
      label: 'Laptop',
    },
    {
      value: 'mobile',
      label: 'Mobile',
    },
  ];
  return (
    <>
        <Box sx={{ m:2 }} />
        <Typography variant='h5' align='center'>
            Agragar Producto
        </Typography>
        <IconButton
            style={{ position: "absolute", top: "0", right: "0" }}
            onClick={closeEvent}
        >
            <CloseIcon />
        </IconButton>
        <Box height={20}/>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField 
                id="outlined-basic" 
                label="Nombre" 
                variant="outlined" 
                size='small'
                onChange={handleNameChange}
                value={name}
                sx={{ minWidth: "100%" }}/>
            </Grid>
            <Grid item xs={6}>
                <TextField 
                id="outlined-basic" 
                label="Precio" 
                variant="outlined" 
                type='number'
                inputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                          < AttachMoneyIcon />
                        </InputAdornment>
                    ),
                }}
                
                size='small'
                onChange={handlePriceChange}
                value={price}
                sx={{ minWidth: "100%" }}/>
            </Grid>
            <Grid item xs={6}>
                <TextField 
                id="outlined-basic" 
                label="Categoria" 
                select
                variant="outlined" 
                size='small'
                onChange={handleCategoryChange}
                value={category}
                sx={{ minWidth: "100%" }}
                >
                    {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
          ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5' align='center'>
                    <Button variant='contained' onClick={createUser}>
                        Agregar
                    </Button>

                </Typography>
            </Grid>
        </Grid>
        <Box sx={{ m: 4 }}/>
    </>
  )
}
