import React, { useEffect, useState } from 'react';

export const DesiresList = () => {
    const [desires, updateDesires] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/desires")
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
                        return <p key={`desire--${desireObj.id}`}>{desireObj.description}</p>
                    }
                )
            }
        </>
    )
}