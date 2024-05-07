import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import AddClient from './AddClient';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'email', label: 'Correo Electrónico', minWidth: 170 },
  { id: 'phone', label: 'Teléfono', minWidth: 170 },
  { id: 'createdAt', label: 'Fecha de Registro', minWidth: 170 },
  { id: 'action', label: 'Acción', minWidth: 170 }
];

function createData(name, email, phone, createdAt) {
  return { name, email, phone, createdAt };
}

const initialRows = [
  createData('Cliente 1', 'cliente1@example.com', '123456789', new Date()),
  createData('Cliente 2', 'cliente2@example.com', '987654321', new Date()),
  // Agrega más filas aquí
];

export default function ClientList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState(initialRows);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (event, value) => {
    setSearchTerm(value);
    if (value === '') {
      setRows(initialRows);
    } else {
      const filteredRows = initialRows.filter(row => row.name.toLowerCase().includes(value.toLowerCase()));
      setRows(filteredRows);
    }
  };

  return (
    <>
    
        <div>
            <Modal
                open={open}
                //onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddClient closeEvent={handleClose}/>
                </Box>
            </Modal>
        </div>
        <Paper sx={{ width: '100%', overflow: 'hidden', padding: '12px' }}>
            <Typography
                gutterBottom
                variant='h5'
                component="div"
                sx={{ padding:"20px" }}
            >
                Lista de clientes
            </Typography>
            <Divider />
            <Box height={10}/>
            <Stack direction="row" spacing={2} className='my-2 mb-2'>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={initialRows.map(row => row.name)}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Buscar Cliente" />}
                    onInputChange={handleSearch}
                />
                <Typography
                    variant='h6'
                    component="div"
                    sx={{flexGrow: 1}}
                ></Typography>
                <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}>
                    Add
                </Button>
            </Stack>
            <Box height={10}/>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            if (column.id === 'action') {
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    <Stack spacing={2} direction="row">
                                    <EditIcon 
                                        style={{
                                        fontSize: "20px",
                                        color: "blue",
                                        cursor: "pointer"
                                        }}
                                    />
                                    <DeleteIcon 
                                        style={{
                                        fontSize: "20px",
                                        color: "darkred",
                                        cursor: "pointer"
                                        }}
                                    />
                                    </Stack>
                                </TableCell>
                                );
                            } else if (column.id === 'createdAt') {
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {new Date(value).toLocaleDateString()}
                                </TableCell>
                                );
                            } else {
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                                );
                            }
                            })}
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    </>
  );
}
