import "../styles/custom.css";

import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddSale = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    
    const [product, setProduct] = useState("");
    const [salespersonId, setSalespersonId] = useState("");

    const history = useHistory();

    const HandleSubmit = async (e) => {

        e.preventDefault();

        var data = {
            "id": firstName,
            "firstName": firstName,
            "productId": product,
            "salespersonId": salespersonId,
            "salesDate": "11-21-2022",
        };

        console.log(data);

        try {

            let res = await fetch(`api/sales/add`, {
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

                history.push("/sales");
            }
            else {
                alert("Some error occured");
            }

        }
        catch (err) {
            console.log(err);
        }
    };

    function HandleCancel(e)
    {
        e.preventDefault();

        console.log("cancel!");

        history.push("/sales");
    }

    return (
        <div className="AddSale">
            <form onSubmit={HandleSubmit}>

                <h2>Enter Customer:</h2>
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

                <label>Email</label>
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Phone Number</label>
                <input
                    type="text"
                    value={mobileNumber}
                    placeholder="Phone Number"
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                />

                <hr></hr>

                <h2>Select a Product:</h2>
                <select name="product" id="product" className="bb-select-lg" onChange={(e) => setProduct(e.target.value)} required>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <hr></hr>

                <h2>Select a Sales Person:</h2>
                <select name="product" id="product" className="bb-select-lg" onChange={(e) => setSalespersonId(e.target.value)} required>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>

                <hr></hr>
                <button className="btn btn-secondary bb-button" type="button" onClick={HandleCancel}>Cancel</button>
                <button className="btn btn-primary bb-button" type="submit">Create</button>        
            </form>
        </div>

    );
}

export default AddSale;