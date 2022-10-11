import React from 'react';
import { ClientList } from './clients/ClientList';
import { RealtorList } from './realtors/RealtorList';

export const RealEstate = () => {
    // const [clients, updateClients] = useState([])

    // useEffect(
    //     () => {
    //         fetch("http://localhost:8088/clients")
    //             .then(res => res.json())
    //             .then((clientArray) => {
    //                 updateClients(clientArray)
    //             })
    //     }, 
    //     []
    // )

    return (
        <>
            <h1>Real Estate Services</h1>

            <ClientList />
            <RealtorList />
        </>
    )
}