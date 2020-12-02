import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalDetail = (props) => {
    const { animals, updateAnimal, releaseAnimal, getAnimalById } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({ location: {}, customer: {} })

    useEffect(() => {
        const animalId = parseInt(props.match.params.animalId)
        getAnimalById(animalId)
            .then(setAnimal)
    }, [])

    return (
        <section className="animal">
            {/* {console.log("Test")} */}
            <h3 className="animal__name">{animal.name}</h3>
            {/* <div className="animal__breed">{animal.breed}</div> */}
            <div className="animal__location">Location: {animal.location.name}</div>
            <div className="animal__owner">Customer: {animal.customer.name}</div>
            <div className="animal__treament">Treatment: {animal.treatment}</div>

            {/* Release Button */}
            <button className="btn--release"
                onClick={() => {
                    // The line below gets the id of the animal User is currently viewing so that it may be passed to releaseAnimal()
                    const chosenAnimalId = +(props.match.params.animalId)
                    releaseAnimal(chosenAnimalId)
                        .then(() => {
                            props.history.push("/animals")
                        })
                }}
            >Release</button>

            {/* Edit Button */}
            <button onClick={() => {
                const chosenAnimalId = +(props.match.params.animalId)
                updateAnimal(chosenAnimalId)
                props.history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button>
        </section>
    )
}