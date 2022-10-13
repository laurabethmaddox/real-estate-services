import React, { useEffect, useState } from 'react';

export const RealtorList = () => {
    const [realtors, updateRealtors] = useState([])
    const [specialities, setSpeciality] = useState("")

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

    useEffect(
        () => {
            const justSpecialities = realtors.map(real => real.specialty)
            setSpeciality(justSpecialities.join(', '))
        },
        [realtors]
    )

    return (
        <>
            <div>
                Specialties: { specialities }
            </div>
            {
                realtors.map(
                    (realtorObj) => {
                        return <p key={`realtor--${realtorObj.id}`}>{realtorObj.name}</p>
                    }
                )
            }
        </>
    )
}