import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Divider, Stack, Typography, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const columns = [
  { id: 'cliente', label: 'Cliente', minWidth: 170 },
  { id: 'producto', label: 'Producto', minWidth: 170 },
  { id: 'cantidad', label: 'Cantidad', minWidth: 100 },
  { id: 'precio', label: 'Precio', minWidth: 100 },
  { id: 'totalPorProducto', label: 'Total por Producto', minWidth: 170 },
  { id: 'action', label: 'Acción', minWidth: 170 }
];

const rows = [
  { cliente: 'Juan Perez', producto: 'Laptop', cantidad: 1, precio: 1000 },
  { cliente: 'María López', producto: 'Smartphone', cantidad: 2, precio: 500 },
  // Agrega más filas aquí con el cliente del pedido
];

export default function PedidosList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event, value) => {
    setSearchTerm(value);
  };

  const filteredRows = rows.filter(row => {
    return (
      row.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.producto.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', margin: '20px' }}>
      <Typography
        gutterBottom
        variant='h5'
        component="div"
        sx={{ padding:"20px" }}
      >
        Lista de Pedidos
      </Typography>
      <Divider />
      <Box height={10}/>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={rows.map(row => row.cliente)}
        sx={{ width: 300, marginLeft: '20px', marginBottom: '20px' }}
        renderInput={(params) => <TextField {...params} label="Buscar Cliente o Producto" />}
        onInputChange={handleSearchChange}
      />
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
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const totalPorProducto = row.cantidad * row.precio;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.cliente}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'action') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Stack spacing={2} direction="row">
                              <IconButton>
                                <EditIcon 
                                    style={{
                                        fontSize: "20px",
                                        color: "blue",
                                        cursor: "pointer"
                                    }}
                                />
                              </IconButton>
                              <IconButton>
                                <DeleteIcon 
                                    style={{
                                        fontSize: "20px",
                                        color: "darkred",
                                        cursor: "pointer"
                                    }}
                                />
                              </IconButton>
                            </Stack>
                          </TableCell>
                        );
                      } else if (column.id === 'totalPorProducto') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {totalPorProducto}
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
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
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
