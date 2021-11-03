// import React from 'react';

// const ManageAllTours = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() =>{
//         fetch(`https://agile-lowlands-13145.herokuapp.com/orders`)
//         .then(res => res.json())
//         .then(data => setOrders(data))
//         // .then(data => console.log(data))
//     },[])

//     const handleDelete = id => {
//         const url = `https://agile-lowlands-13145.herokuapp.com/order/${id}`
//         fetch(url, {
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(data => {
//             alert('Are you sure you want to delete this Order')
//             const remaining = orders.filter(order => order._id !== id)
//             setOrders(remaining)
            
//         })
//     }
//     return (
//         <div className='m-5 w-75 mx-auto'>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                     <th>#</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Tour Title</th>
//                     <th>Total Cost($)</th>
//                     <th>Status</th>
//                     <th>Update</th>
//                     <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {
//                 orders.map(order => { 
//                     return (
//                     <tr key={order._id}>
//                     <td>{orders.indexOf(order) + 1}</td>
//                     <td>{order.Name}</td>
//                     <td>{order.Email}</td>
//                     <td>{order.title}</td>
//                     <td>{order.total}</td>
//                     <td>{order.Status}</td>
//                     <td><Link to={`/update-order/${order._id}`}>Update</Link></td>
//                     <td><button onClick={()=>handleDelete(order._id)}>Delete</button></td>
//                     </tr>
//                     )
//                 })
//                 }
//                 </tbody>
//             </Table>

//         </div>
//     );
// };

// export default ManageAllTours;