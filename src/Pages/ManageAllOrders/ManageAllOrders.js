import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => setOrders(data))
        // .then(data => console.log(data))
    },[])

    const handleDelete = id => {
        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            alert('Are you sure you want to delete this Order')
            const remaining = orders.filter(order => order._id !== id)
            setOrders(remaining)
            
        })
    }
    return (
        <div className='m-5 w-75 mx-auto'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Tour Title</th>
                    <th>Total</th>
                    <th>Update</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                orders.map(order => { 
                    return (
                    <tr key={order._id}>
                    <td>{orders.indexOf(order) + 1}</td>
                    <td>{order.Name}</td>
                    <td>{order.Email}</td>
                    <td>{order.Title}</td>
                    <td>{order.Total}</td>
                    <td><Link to={`/update-order/${order._id}`}>Update</Link></td>
                    <td><button onClick={()=>handleDelete(order._id)}>Delete</button></td>
                    </tr>
                    )
                })
                }
                </tbody>
            </Table>

        </div>
    );
};

export default ManageAllOrders;