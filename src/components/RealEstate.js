import React from 'react';
import { ClientList } from './clients/ClientList';
import { RealtorList } from './realtors/RealtorList';
import { DesiresList } from './desires/DesiresList';

export const RealEstate = () => {
    return (
        <>
            <h1>Real Estate Services</h1>

            <h2>Client List</h2>
            <ClientList />

            <h2>Realtor List</h2>
            <RealtorList />

            <h2>Desires List</h2>
            <DesiresList />
        </>
    )
}