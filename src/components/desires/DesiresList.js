import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Desires.css"

export const DesiresList = () => {
    const [desires, updateDesires] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

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

    useEffect(
        () => {
            const activeDesireCount = desires.filter(d => d.dateCompleted === "").length
            setActive(`There are ${activeDesireCount} open desire tickets`)
        },
        [desires]
    )

    const deleteDesire = (id) => {
        const fetchOptions = {
            method: "DELETE",
        }
        return fetch(`http://localhost:8088/desires/${id}`, fetchOptions)
    }

    return (
        <>
        <div>
            <button onClick={() => history.push("/desires/create")}>Create Desire Ticket</button>
        </div>
        { active }
            {
                desires.map(
                    (desireObj) => {
                        return <div key={`desire--${desireObj.id}`}>
                            <p className={desireObj.emergency ? 'emergency' : ''}>
                                {desireObj.emergency ? "🚑" : ""} <Link to={`/desires/${desireObj.id}`}>{desireObj.description}</Link> submitted by {desireObj.client.name} and assigned to {desireObj.realtor.name}
                                <button onClick={() => {
                                    deleteDesire(desireObj.id)
                                }}>Delete</button>
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}