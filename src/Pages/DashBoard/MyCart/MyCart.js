import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/UseAuth';

const MyCart = () => {
    const [order, SetOrder] = useState()
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => SetOrder(data))
    }, [])
    console.log(order.packageId);

    return (
        <div>
            <h1 >This is my cart</h1>
        </div>
    );
};

export default MyCart;