import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/UseAuth';

const BookingPackage = ({ clickedPackage }) => {
    const [_id] = clickedPackage;

    console.log(_id);
    const { user } = useAuth()
    const initialInfo = { bookingName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }
    const handleBookingSubmit = e => {
        // // collect data
        // const Booking = {
        //     ...bookingInfo,

        //     serviceName:  "ipel"
        // }
        // // send to the server
        // fetch('http://localhost:5000/appointments', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(Booking)
        // })
        //     .then(res => res.json())
        //     .then(data => {

        //     });
        console.log(bookingInfo);
        e.preventDefault();
    }

    return (
        <div>
            <Box>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    {/* {package_name} */}
                </Typography>
                <form onSubmit={handleBookingSubmit} >
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="packageName"
                        onBlur={handleOnBlur}
                        defaultValue={_id}
                        // defaultValue="name"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="clientName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        // defaultValue="name"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        defaultValue="Phone Number"
                        size="small"
                    />
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Box>
        </div>
    );
};

export default BookingPackage;