import React from 'react'
import AccordionDash from '../components/AccordionDash';
import BarChart from '../charts/BarChart';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import "../Dash.css";

const Estadisticas = () =>{
    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Stack spacing={2} direction={"row"}>
                        <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                            <CardContent>
                                <div id='iconstyle'>
                                    <CreditCardIcon />
                                </div>
                                <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                                    S/.500.00
                                </Typography>
                                <Typography 
                                gutterBottom 
                                variant="body2" 
                                component="div"
                                sx={{ color: "#ccd1d1" }}
                                >
                                    Total ganancias
                                </Typography>  
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                            <CardContent>
                                <div id='iconstyle'>
                                    <ShoppingBagIcon />
                                </div>
                                <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                                    S/.900.00
                                </Typography>
                                <Typography 
                                gutterBottom 
                                variant="body2" 
                                component="div"
                                sx={{ color: "#ccd1d1" }}
                                >
                                    Total pedidos
                                </Typography>                                  
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>
                <Grid item xs={4}>  
                    <Stack spacing={2}>
                        <Card sx={{ maxWidth: 345 }} className='gradientlight'>
                            <Stack spacing={2} direction="row">
                                <div id='iconstyle'>
                                    <StorefrontIcon />
                                </div>
                                <div className='paddingall'>
                                    <span className='pricetitle'>S/.203K</span>
                                    <br />
                                    <span className='pricetitle'>Ingresos totales</span>
                                </div>
                            </Stack>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <Stack spacing={2} direction="row">
                                <div id='iconstyleblack'>
                                    <ShowChartIcon />
                                </div>
                                <div className='paddingall'>
                                    <span className='pricetitle'>S/.104K</span>
                                    <br />
                                    <span className='pricetitle'>Gastos Totales</span>
                                </div>
                            </Stack>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Card sx={{ height: 65 + "vh" }}>
                        <CardContent>
                            <BarChart />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ height: 65 + "vh" }}>
                        <CardContent>
                            <div className='paddingall'>
                                    <span className='pricetitle'>Productos Populares</span>
                            </div>
                            
                            <AccordionDash />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
        
    )
}

export default Estadisticas