import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/UseAuth';


const BookingPackage = ({ clickedPackage }) => {
    const { user } = useAuth()
    const { package_name, day, price } = clickedPackage[0];

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    console.log(bookingInfo,);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        console.log(bookingInfo);
        // // collect data
        // const appointment = {
        //     ...bookingInfo,
        //     time,
        //     price,
        //     serviceName: name,
        //     date: date.toLocaleDateString()
        // }
        // // send to the server
        // fetch('http://localhost:5000/appointments', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(appointment)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             setBookingSuccess(true);
        //             handleBookingClose();
        //         }
        //     });

        e.preventDefault();
    }




    return (
        <div>
            <Box  >
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    {package_name}
                </Typography>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={user?.displayName}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="price"
                        onBlur={handleOnBlur}
                        defaultValue={price}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="day"
                        onBlur={handleOnBlur}
                        defaultValue={day}
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
                    {/* <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                    /> */}
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Box>
        </div>
    );
};

export default BookingPackage;