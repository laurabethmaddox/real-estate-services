import React, { useEffect, useState } from 'react';

export const RealtorList = () => {
    const [realtors, updateRealtors] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/realtors")
                .then(res => res.json())
                .then((realtorArray) => {
                    updateRealtors(realtorArray)
                })
        }, 
        []
    )

    return (
        <>
            <h1>Realtor List</h1>
            {
                realtors.map(
                    (realtorObj) => {
                        return <p>{realtorObj.name}</p>
                    }
                )
            }
        </>
    )
}