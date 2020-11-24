import React from "react"
import "./Customer.css"

export const Customer = ({customerObject}) => (
    <section className="customer">
        <h3 className="customer__name">{ customerObject.name } </h3>
        <address>
            <div className="customer__addresss">{ customerObject.address } </div>
        </address>
    </section>
)