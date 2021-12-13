import React, { useEffect, useState } from 'react';
const ManageOrder = () => {
    const [orders, setOders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://tourism-web-server-byrakib.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                setOders(data);
                setIsLoading(false)
            })
    }, []);

    //delete order
    const handleDelete = (id) => {
        fetch(`https://tourism-web-server-byrakib.herokuapp.com/orders/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                const remain = orders.filter(order => order._id !== id);
                setOders(remain);
            })
    }
    //update
    const update = id => {
        fetch(`https://tourism-web-server-byrakib.herokuapp.com/orders/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Tour finished. to see that refresh the browser")
                }
            })
    };
    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <div className="spinner"></div>
        </div>
    };
    const style = "grid grid-cols-3 border-b py-2";
    return (
        <div className='bg-white text-center m-10 rounded'>
            <hr />
            <div className={style}>
                <p>Customer Details</p>
                <p>Order Details</p>
                <p></p>
            </div>
            {
                orders.map(order => <div key={order._id} className={style}>
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
                    <div className="flex  justify-center items-center">
                        <p className="text-green-400">{order.status}</p>
                        <button onClick={() => update(order._id)} className="border rounded mx-3 py-1 px-3">Finished</button>
                        <button onClick={() => handleDelete(order._id)} className="border rounded py-1 px-3">delete</button>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default ManageOrder;