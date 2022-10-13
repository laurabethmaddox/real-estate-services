import React, { useEffect, useState } from 'react';

export const ClientList = () => {
    const [clients, updateClients] = useState([])
    const [totalClientsMessage, updateMessage] = useState("")

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

    useEffect(
        () => {
            if (clients.length === 1) {
                updateMessage("You have 1 client")
            }
            else {
                updateMessage(`You have ${clients.length} clients`)
            }
        },
        [clients]
    )

    return (
        <>
        <div>{totalClientsMessage}</div>
            {
                clients.slice(0, 5).map(
                    (clientObj) => {
                        return <p key={`client--${clientObj.id}`}>{clientObj.name}</p>
                    }
                )
            }
        </>
    )
}