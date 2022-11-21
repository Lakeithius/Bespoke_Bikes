import "../styles/custom.css";

import React from 'react'
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FormatDate } from '../helpers/Formatting';

const EditSalesperson = () => {

    const history = useHistory();
    const location = useLocation();
    
    const [firstName, setFirstName] = useState(location.state.firstName);
    const [lastName, setLastName] = useState(location.state.lastName);

    const [startDate, setStartDate] = useState(location.state.startDate);
    const [terminationDate, setTerminationDate] = useState(location.state.terminationDate);

    const [address, setAddress] = useState(location.state.address);
    const [phoneNumber, setPhoneNumber] = useState(location.state.phoneNumber);
    const [managerId, setManagerId] = useState(location.state.managerId);

    const [product, setProduct] = useState(location.state.product);
    const [salespersonId, setSalespersonId] = useState(location.state.salespersonId);

 
    const HandleSubmit = async (e) => {

        e.preventDefault();

        console.log("add sale");

        var data = {
            "spId": firstName,
            "firstName": firstName,
            "lastName": lastName,
            "address": address,
            "phoneNumber": phoneNumber,
            "managerId": managerId,
            "startDate": "11-21-2002",
            "terminationDate": "11-21-2022",
        };

        try {

            let res = await fetch(`api/salespersons/edit`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            let resJson = await res.json();

            if (res.status === 200) {

                alert("Success!");

                history.push("/salespersons");
            }
            else {
                alert("Some error occured");
            }

        }
        catch (err) {
            console.log(err);
        }
    };

    function HandleCancel(e) {
        e.preventDefault();

        console.log("cancel!");

        history.push("/salespersons");
    }

    return (
        <div className="EditSalesperson">
            <form onSubmit={HandleSubmit}>

                <h2>Edit Salespersons:</h2>
                <hr></hr>
                <label>First Name</label>
                <input
                    type="text"
                    value={firstName}
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />

                <label>Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <label>Address</label>
                <input
                    type="text"
                    value={address}
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />

                <label>Phone Number</label>
                <input
                    type="text"
                    value={phoneNumber}
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />

               
                <label for="terminationDate">Start Date</label>
                <input type="date" id="startDate" name="startDate" value={FormatDate(startDate)} min="1922-11-21" max="2022-11-22" />

                <label for="terminationDate">Termination Date:</label>
                <input type="date" id="terminationDate" name="terminationDate" value={terminationDate}/>

                <hr></hr>

                <h2>Select Manager:</h2>
                <select name="product" id="product" className="bb-select-lg" onChange={(e) => setManagerId(e.target.value)} required>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <hr></hr>

                <hr></hr>
                <button className="btn btn-secondary bb-button" type="button" onClick={HandleCancel}>Cancel</button>
                <button className="btn btn-primary bb-button" type="submit">Save</button>
            </form>
        </div>

    );
}

export default EditSalesperson;