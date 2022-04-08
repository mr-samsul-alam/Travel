import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/UseAuth';
import { Container, Typography } from '@mui/material';

const MyCart = () => {
    const [order, SetOrder] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        const url = `http://localhost:5000/bookingInfo/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => SetOrder(data));
    }, [])
    const cancelOrder = (id) => {
        console.log("going to dele", id);
        const url = `http://localhost:5000/bookingInfo/${id}}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted SuccessFully')
                }
            });
    }
    console.log(order);
    return (
        <div>
            <Typography variant='h3' style={{ textAlign: 'center', justifyContent: "center", padding: '10px' }}>
                My Plan
            </Typography>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="Appointments table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Package</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.map((row) => (
                                <TableRow
                                    key={row?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.Name}
                                    </TableCell>
                                    <TableCell align="right">{row?.packageName}</TableCell>
                                    <TableCell align="right">{row?._id}</TableCell>
                                    <TableCell align="right">{row?.price}</TableCell>
                                    <TableCell align="right">{row?.status}</TableCell>
                                    <TableCell align="right">
                                        <button onClick={() => cancelOrder(row?._id)} >Cancel</button> </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default MyCart;