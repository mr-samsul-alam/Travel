import { Alert, Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/UseAuth';

const BookingPackage = ({ Id }) => {
    const [success, setSuccess] = useState(false)
    const [person, setPerson] = useState('1');
    const { user } = useAuth();
    const initialInfo = { packageId: Id, name: user.displayName, email: user.email, phone: '' }
    const [bookingInformation, setBookingInfo] = useState(initialInfo);
    const currencies = [
        {
            value: '1',
            label: '1 package',
        },
        {
            value: '2',
            label: '2 package',
        },
        {
            value: '3',
            label: '3 package',
        },
        {
            value: '4',
            label: '4 package',
        },
    ];
    const handleChange = (event) => {
        setPerson(event.target.value);
    };
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInformation };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }
    const handleBookingSubmit = e => {
        // collect data
        const bookingInfo = {
            ...bookingInformation,
            person: person
        }
        // send to the server
        fetch('http://localhost:5000/bookingInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                }
            }); 
        e.preventDefault();
    }
    return (
        <div style={{ padding: "50px" }}>
            <form onSubmit={handleBookingSubmit}>
                <TextField
                    id="outlined-select-currency"
                    sx={{ width: '90%', m: 1 }}
                    select
                    label="person"
                    value={person}
                    onChange={handleChange}
                    helperText="Please select person"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="patientName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
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
                    label="Phone Number"
                    onBlur={handleOnBlur}
                    size="small"
                />

                <Button type="submit" variant="contained">Place Order</Button>
                {
                    success && <Alert severity="success">Appointment Booked successfully!</Alert>

                }
                {
                    success && <Link to="/dashboard/myPlans"><Button variant="contained">Go to Card</Button></Link>

                }

            </form>
        </div>
    );
};

export default BookingPackage;