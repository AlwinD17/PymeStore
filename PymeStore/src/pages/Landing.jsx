import React from 'react'
import imagen from '../assets/ecommerce.jpeg'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Landing = () =>{
    const colorLetras ='white'
    return(
    <>
    <div className='container' style={{
        width:'100vw',
        height:'auto',
    }}>
        <div style={{
                    display:'grid',
                    gridTemplateColumns:'repeat(2,50%)',
                    gridTemplateRows:'4fr',
                    backgroundColor:'#AA543C',
                    margin:'0px',
                    padding:'20px',
                    width:'99vw',
                    height:'50%',
                    
                }}
        >
            <div style={{
                gridColumn:'1 / 3',
                gridRow:'1 / 2',
            }}>
                <h1 style={{
                    fontFamily:'sans-serif',
                    fontSize:'8vw',
                    textAlign:'center',
                    color:colorLetras
                }}>Crea y gestiona tu propio ECommerce</h1>
                
            </div>
            <div style={{
                gridColumn:'1 / 2',
                gridRow:'2 / 3',
                margin:'auto'
            }}>
                <h3 style={{
                    width:'auto',
                    fontSize:'3vw',
                    color:colorLetras,   
                    textAlign:'center',
                    fontFamily:'fantasy' 
                }}>Personalízalo a tu gusto</h3>
                <p style={{
                    color:colorLetras,
                    fontFamily:'sans-serif',
                    fontSize:'1.75vw', 
                }}>
                Crea tu tienda en línea con calidad profesional. 
                </p>
                <p style={{
                    padding:'0 30px',
                    color:colorLetras,
                    fontFamily:'sans-serif',
                    fontSize:'1.75vw', 
                }}>PymeStore te ofrece las herramientas que necesitas para vender en línea de manera fácil y segura. ¡Empieza hoy mismo!</p>
                <Button variant="contained" size='medium' style={{
                    backgroundColor: colorLetras,
                    borderColor: colorLetras,
                    textTransform:'none',
                    color:'#763C2C',
                    margin:'5% 10%'
                    }} endIcon={<ArrowForwardIcon/>} ><Link to='/register'>Empezar</Link></Button>
            </div>
            <div style={{
                gridColumn:'2 / 3',
                gridRow:'2 / 3',
                
            }}>
                <img src={imagen} style={{
                     display: 'block', 
                     margin: 'auto',   
                     maxWidth: '60%', 
                     
                }} />
            </div>
        </div>
        <div className='container-item-2' style={{
            margin:'50px 10% ',
            display:'grid',
            gridTemplateColumns:'repeat(2, 50%)'
        }}> 
            <div>
                <h3 style={{
                    fontFamily:'sans-serif',
                    fontWeight:'bold', 
                    fontSize:'3vw'
                }}>Impulsa el crecimiento de tu negocio con PymeStore y crea una tienda online que destaque entre la competencia</h3>
            </div>
            <div style={{
                width:'100%',
                padding:'0'
            }}>
                <p style={{
                    marginLeft:'60px',
                    textAlign:'left',
                    fontFamily:'sans-serif',
                    fontSize:'1.5vw' 
                }}>Diseña y desarrolla tu tienda online con calidad profesional. 
                    Ya sea que estés iniciando un nuevo negocio, ampliando tu presencia en línea o llevando tu tienda física al mundo digital,
                     PymeStore te ofrece las herramientas que necesitas para tener éxito en el eCommerce. Con nuestra plataforma intuitiva y flexible,
                      puedes crear una experiencia de compra en línea única para tus clientes, gestionar fácilmente tu inventario y procesar pagos de forma segura. 
                      ¡Empieza hoy mismo y lleva tu negocio al siguiente nivel con PymeStore!</p>
                <Button size='large' style={{
                    textTransform:'none',
                    textDecoration:'underline',
                    fontSize:'1.5vw',
                    color:'#763C2C',
                    margin:'30px 50px'
                    }} endIcon={<ArrowForwardIcon/>} ><Link to='/register'>Empezar</Link></Button>
            </div>

        </div>
    </div>
    </>)
}

export default Landing