import React, { useEffect, useState } from 'react';

export const ClientList = () => {
    const [clients, updateClients] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/clients")
                .then(res => res.json())
                .then((clientArray) => {
                    updateClients(clientArray)
                })
        }, 
        []
    )

    return (
        <>
            <h1>Client List</h1>
            {
                clients.map(
                    (clientObj) => {
                        return <p>{clientObj.name}</p>
                    }
                )
            }
        </>
    )
}