import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { HexColorPicker } from "react-colorful";

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
                    <div>
                        <h2 style={{

                        }}>
                            Escoje un nombre para tu tienda
                        </h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Nombre de la tienda"
                            htmlFor='nombre'
                        />
                    </div>
                    <div>
                        <h2>Escoje una plantilla</h2>
                    </div>
                    <div>
                        <h2>Escoje los colores</h2>
                    </div>
                    <div>
                        <h2>Inserta tus imagenes</h2>
                    </div>
                    <div>
                        <h2>Agrega categorias</h2>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Crear