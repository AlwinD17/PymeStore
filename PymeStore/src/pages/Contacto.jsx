import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contacto = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

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
        navigate('/');
    };

    return (
        <>
            <div style={{
                display: 'flex',
                padding: '5% 16% 0%',
                alignContent: 'center'
            }}>
                <h1 style={{
                    textAlign: 'center',
                    fontFamily: 'sans-serif',
                    fontSize: '40px',
                    fontWeight: 'bold',
                }}>
                    Contáctanos
                </h1>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '3% 23%',
            }}>
                <form onSubmit={handleSubmit} >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        marginBottom: '30px'
                    }}>
                        <h2 style={{
                            textAlign: 'left',
                            fontFamily: 'sans-serif',
                            fontSize: '16px',
                            fontWeight: 'bold',

                        }}>
                            Nombre
                        </h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Nombre"
                            name="nombre"
                            onChange={handleChange}
                            style={{
                                width:'350px'
                            }}
                        />
                        <h2 style={{
                            textAlign: 'left',
                            fontFamily: 'sans-serif',
                            fontSize: '16px',
                            fontWeight: 'bold',

                        }}>
                            Apellido
                        </h2>
                        <TextField
                            required
                            id="outlined"
                            label="Apellidos"
                            name="apellido"
                            onChange={handleChange}
                            style={{
                                width:'350px'
                            }}
                        />
                    </div>
                    <div style={{
                        marginBottom: '30px'
                    }}>
                        <h2 style={{
                            textAlign: 'left',
                            fontFamily: 'sans-serif',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            marginBottom: '10px'
                        }}>Correo Electrónico</h2>
                        <TextField
                            required
                            id="outlined"
                            label="Correo Electrónico"
                            name="correo"
                            onChange={handleChange}
                            style={{
                                width:'350px'
                            }}
                        />
                    </div>
                    <div style={{
                        marginBottom: '30px'
                    }}>
                        <h2 style={{
                            textAlign: 'left',
                            fontFamily: 'sans-serif',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            marginBottom: '10px'
                        }}>Número de Teléfono</h2>
                        <TextField
                            required
                            id="outlined"
                            label="Número de Teléfono"
                            name="telefono"
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{
                        marginBottom: '30px'
                    }}>
                        <h2 style={{
                            textAlign: 'left',
                            fontFamily: 'sans-serif',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            marginBottom: '10px'
                        }}>Mensaje</h2>
                        <TextField
                            required
                            id="outlined"
                            label="Mensaje"
                            name="mensaje"
                            multiline
                            rows={4}
                            onChange={handleChange}
                            style={{
                                width:'500px'
                            }}
                        />
                    </div>
                    <div>
                        <Button variant="contained" color="primary" type='submit'>
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contacto;