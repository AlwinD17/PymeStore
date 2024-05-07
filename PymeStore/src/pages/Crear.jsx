import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { TextFielList, ColorPickerButtons, ImageSelector } from '../components';

const Crear = () =>{

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/productos');
    };

    return(
        <>
            <div style={{
                display:'flex',
                padding:'5% 16% 0%',
                alignContent:'center'
            }}>
                <h1  style={{
                    textAlign:'center',
                    fontFamily:'sans-serif',
                    fontSize:'40px',
                    fontWeight:'bold',
                }}>
                    Crea tu propio E-Commerce
                </h1>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'column',
                padding:'3% 23%',
            }}>
                <form  onSubmit={handleSubmit} >
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        gap:'10px',
                        marginBottom:'30px'
                    }}>
                        <h2 style={{
                            textAlign:'left',
                            fontFamily:'sans-serif',
                            fontSize:'16px',
                            fontWeight:'bold',
                            
                        }}>
                            1. Escoje un nombre para tu tienda
                        </h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Nombre de la tienda"
                            htmlFor='nombre'
                        />
                        <TextField
                            required
                            id="outlined"
                            label="Logo de la tienda"
                            htmlFor='nombre'
                        />
                    </div>
                    <div style={{
                        marginBottom:'30px'
                    }}>
                        <h2 style={{
                            textAlign:'left',
                            fontFamily:'sans-serif',
                            fontSize:'16px',
                            fontWeight:'bold',
                            marginBottom:'10px'
                        }}>2. Escoje una plantilla</h2>
                        <ImageSelector />
                    </div>
                    <div style={{
                        marginBottom:'30px'
                    }}>
                        <h2 style={{
                            textAlign:'left',
                            fontFamily:'sans-serif',
                            fontSize:'16px',
                            fontWeight:'bold',
                            marginBottom:'10px'
                        }}>3. Escoje los colores</h2>
                        <ColorPickerButtons />
                        
                    </div>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        gap:'10px',
                        marginBottom:'30px'
                    }}>
                        <h2 style={{
                            textAlign:'left',
                            fontFamily:'sans-serif',
                            fontSize:'16px',
                            fontWeight:'bold',
                        }}>4. Inserta tus imagenes</h2>
                        <TextField
                            required
                            id="outlined"
                            label="Url Imagen 1"
                            htmlFor='urlImg1'
                            larger
                        />
                        <TextField
                            required
                            id="outlined"
                            label="Url Imagen 2"
                            htmlFor='urlImg2'
                            larger
                        />
                        <TextField
                            required
                            id="outlined"
                            label="Url Imagen 3"
                            htmlFor='urlImg3'
                            larger
                        />
                    </div>
                    <div style={{
                        marginBottom:'30px'
                    }}>
                        <h2 style={{
                            textAlign:'left',
                            fontFamily:'sans-serif',
                            fontSize:'16px',
                            fontWeight:'bold',
                            marginBottom:'10px'
                        }}>5. Agrega categorias</h2>
                        <TextFielList />
                    </div>
                    <div>
                        <Button variant="contained" color="success" type='submit'>
                            Terminar
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Crear