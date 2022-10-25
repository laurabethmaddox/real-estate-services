import React from "react"
import { Route } from "react-router-dom"
import { ClientList } from "./clients/ClientList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/clients">
                <ClientList />
            </Route>
        </>
    )
}