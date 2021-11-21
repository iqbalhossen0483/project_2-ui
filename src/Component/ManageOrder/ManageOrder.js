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
                    alert("order approved. to see that refresh the browser")
                }
            })
    };
    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <div className="spinner"></div>
        </div>
    };
    const style = "grid grid-cols-8 border-b pt-2";
    return (
        <div className="bg-white text-center">
            <hr />
            <div className={style}>
                <p>Customer Name</p>
                <p>Email Address</p>
                <p>Where to</p>
                <p>Destination</p>
                <p>Date</p>
                <p>Type</p>
                <p>Status</p>
                <p></p>
            </div>
            {
                orders.map(order => <div key={order._id} className={style}>
                    <p>{order.name}</p>
                    <p>{order.email}</p>
                    <p>{order.location}</p>
                    <p>{order.destination}</p>
                    <p>{order.date}</p>
                    <p>{order.type}</p>
                    <p className="text-green-400">{order.status}</p>
                    <div className="flex mb-2 justify-end">
                        <button onClick={() => update(order._id)} className="border rounded py-1 px-3">Approve</button>
                        <button onClick={() => handleDelete(order._id)} className="border rounded py-1 px-3">delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageOrder;