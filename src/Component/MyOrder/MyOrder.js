import React, { useEffect, useState } from 'react';
import useAuth from "../Firebase/useAuth"
import Footer from '../Footer/Footer';

const MyOrder = () => {
    const [orders, setOders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();
    useEffect(() => {
        fetch("https://tourism-web-server-byrakib.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                const userOder = data.filter(order => order.email === user.email);
                setOders(userOder);
                setIsLoading(false)
            })
    }, [user.email]);

    //delete order
    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure to delete this?");
        if (confirm) {
            fetch(`https://tourism-web-server-byrakib.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remain = orders.filter(order => order._id !== id);
                    setOders(remain);
                })
        }
    }

    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <div className="spinner"></div>
        </div>
    }
    return (
        <div className='h-screen overflow-auto flex flex-col justify-between'>
            <div className="bg-white mx-10 text-center my-5 p-3">
                <div className='grid grid-cols-3'>
                    <p>Customer Details</p>
                    <p>Tour Details</p>
                    <p>Status</p>
                </div>
                <hr />
                {
                    orders.map(order => <div key={order._id} className='grid grid-cols-3 mt-3 items-center'>
                        <div>
                            <p>Name: {order.name}</p>
                            <p>Email: {order.email}</p>
                        </div>
                        <div>
                            <p>Location: {order.location}</p>
                            <p>Destination: {order.destination}</p>
                            <p>Date: {order.date}</p>
                            <p>Type: {order.type}</p>
                        </div>
                        <div className="flex">
                            <p className="text-green-400">{order.status}</p>
                            <button onClick={() => handleDelete(order._id)} className="border rounded py-1 px-3 hover:bg-blue-600 hover:text-white ml-5">CENCEL</button>
                        </div>
                        <hr className='col-span-3 mt-3' />
                    </div>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default MyOrder;