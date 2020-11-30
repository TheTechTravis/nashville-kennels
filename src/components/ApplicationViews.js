import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        {/* Render the animal list when http://localhost:3000/animals */}
                        <Route exact path="/animals" render={
                            props => <AnimalList {...props} />
                        } />

                        {/* Render a form to allow a customer to admit their animal to one of the Nashville Kennel locations when visiting "http://localhost:3000/animals/create" */}
                        <Route exact path="/animals/create" render={
                            props => <AnimalForm {...props} />
                        } />

                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <AnimalProvider>
                        {/* Render the employee list when http://localhost:3000/employees */}
                        <Route exact path="/employees" render={
                            props => <EmployeeList {...props} />
                        } />

                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />
                    </AnimalProvider>
                </LocationProvider>
            </EmployeeProvider>

        </>
    )
}