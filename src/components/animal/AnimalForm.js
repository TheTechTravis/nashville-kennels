import React, { useContext, useRef, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import "./Animal.css"

export const AnimalForm = (props) => {
    const { locations, getLocations } = useContext(LocationContext)
    const { animals, getAnimals, addAnimal } = useContext(AnimalContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const location = useRef(null)
    const customer = useRef(null)
    const animal = useRef(null)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
        getCustomers()
            .then(getLocations)
            .then(getAnimals)
    }, [])

    const constructNewAppointment = () => {
        const locationId = parseInt(location.current.value)
        const customerId = parseInt(localStorage.getItem("kennel_customer"))

        if (locationId === 0) {
            window.alert("Please select a location")
        }
        else {
            addAnimal({
                name: name.current.value,
                locationId,
                customerId
            })
                .then(() => props.history.push("/animals"))
        }
    }

    return (
        // Animal Name Text Input
        <form className="animalForm">
            <h2 className="animalForm__title">New Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
                </div>
            </fieldset>

            {/* Location Dropdown */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAppointment()
                }}
                className="btn btn-primary">
                Save Appointment
            </button>
        </form>
    )
}