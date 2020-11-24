import React from "react"
import "./Location.css"

export const Location = ({ locationObject }) => (
    <section className="location">
        <h3 className="location__name"> {locationObject.name} </h3>
        <address>
            <div className="location__address"> {locationObject.address} </div>
        </address>
    </section>
)