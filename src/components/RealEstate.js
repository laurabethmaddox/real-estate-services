import React, { useEffect, useState } from 'react';

export const RealEstate = () => {
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
            <h1>Real Estate Services</h1>

            {
                clients.map(
                    (clientObj) => {
                        return <h2>{clientObj.name}</h2>
                    }
                )
            }
        </>
    )
}