import React, { useEffect, useState } from 'react';

export const DesiresList = () => {
    const [desires, updateDesires] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/desires?_expand=realtor&_expand=client")
                .then(res => res.json())
                .then((desiresArray) => {
                    updateDesires(desiresArray)
                })
        }, 
        []
    )

    return (
        <>
            {
                desires.map(
                    (desireObj) => {
                        return <div key={`desire--${desireObj.id}`}>
                            <p>{desireObj.description} submitted by {desireObj.client.name} and realtor requested: {desireObj.realtor.name}</p>
                        </div>
                    }
                )
            }
        </>
    )
}