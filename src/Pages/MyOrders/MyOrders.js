import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth()

    useEffect(() =>{
        const keys = [user.email]
        console.log(keys)
        fetch(`https://agile-lowlands-13145.herokuapp.com/orders/bykeys`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(data => setOrders(data))
        // .then(data => console.log(data))
    },[])
    console.log(orders)

    const handleDelete = id => {
        const url = `https://agile-lowlands-13145.herokuapp.com/order/${id}`
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
        <Container>
        <Row className='justify-content-center'> 
        <Col xs={12} md={12} className='m-5'>

            <h3>Your(<b>{user.displayName}</b>) Orders</h3>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Tour Title</th>
                    <th>Total Cost($)</th>
                    <th>Status</th>
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
                    <td>{order.title}</td>
                    <td>{order.total}</td>
                    <td>{order.Status}</td>
                    <td><button onClick={()=>handleDelete(order._id)}>Cancel</button></td>
                    </tr>
                    )
                })
                }
                </tbody>
            </Table>
        </Col>
        </Row>
        </Container>
    );
};

export default MyOrders;