import React from "react"
import "./Employee.css"

export const Employee = ({employeeObject}) => (
    <section className="employee">
        <h3 className="employee__name">{employeeObject.name}</h3>
<div className="employee__location"> StoreId: {employeeObject.locationId} </div>
    </section>
)