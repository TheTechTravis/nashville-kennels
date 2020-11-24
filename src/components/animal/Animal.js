import React from "react"
import "./Animal.css"

export const Animal = ({ animalObject }) => (
    <section className="animal">
        <h3 className="animal__name">{animalObject.name}</h3>
        <div className="animal__breed">Breed: {animalObject.breed}</div>
    </section>
)