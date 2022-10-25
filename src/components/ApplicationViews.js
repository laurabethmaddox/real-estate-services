import React from "react"
import { Route } from "react-router-dom"
import { ClientList } from "./clients/ClientList"
import { DesiresList } from "./desires/DesiresList"
import { RealtorList } from "./realtors/RealtorList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/clients">
                <ClientList />
            </Route>

            <Route path="/desires">
                <DesiresList />
            </Route>

            <Route path="/realtors">
                <RealtorList />
            </Route>
        </>
    )
}