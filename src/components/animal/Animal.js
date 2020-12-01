import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export default ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/${animal.id}`}>
                { animal.name }
            </Link>
        </h3>
        {/* Note: There is currently no "breed" proptery of animal. */}{}
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)