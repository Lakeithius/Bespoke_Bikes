import React, { useEffect, useState } from 'react'
import { Pagination } from 'reactstrap'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { FormatDate } from '../helpers/Formatting';


const Salespersons = () => {

    const [allSpData, SetSpData] = useState([]);
    const [currSpData, SetCurrData] = useState([]);
    const [isLoading, SetLoading] = useState(true);

    const [pageSize, setPageSize] = useState(25);
    const [currPage, setCurrPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);

    const [isShow, setIsShow] = useState(false);

    const history = useHistory();

    function handleClick() {
        history.push("/addsale");
    }

    //get all data
    useEffect(() => {

        async function fetchData() {

            const response = await fetch(`api/sales/all`);
            const data = await response.json();

            SetSpData(data);
            SetLoading(false);
        }

        fetchData(); //ADD LOGGING

    }, []);

    //get filterData
    useEffect(() => {

        SetCurrData(allSpData.slice(20, pageSize));

    }, [allSpData, pageSize, currPage]);

    //get page count
    useEffect(() => {

        var count = Math.ceil(currSpData.length / pageSize);

        setPagesCount(count);

    }, [pageSize, currSpData]);

    async function HandlePagination(index) {

        // SetCurrData(...allSpData(25));
    };

    function CalculateCommission(commission, price)
    {
        var comm = commission * price;

        return comm.toFixed(2);
    };

    const columns = [
        { label: "Product" },
        { label: "Customer" },
        { label: "Date" },
        { label: "Price" },
        { label: "Salesperson" },
        { label: "Commission" },
    ];

    return (
        isLoading
            ? <p><em>Loading...</em></p>
            : <div>
                <div>
                    <h1 id="tabelLabel" class="bb-label">Sales</h1>
                    <button type="button" class="btn btn-primary bb-button" aria-expanded="false" onClick={handleClick}>New</button>
                </div>
                <hr></hr>
                <div className='bb-tableContainer'>
                    <table
                        className='table table-striped table-bordered table-hover'
                        aria-labelledby="tabelLabel"
                        cellSpacing="0"
                        width="100%">
                        <thead class="bb-thead">
                            <tr>
                                {columns.map(({ label }) => {
                                    return <th>{label}</th>;
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {allSpData.map(s =>
                                <tr key={s.product.productId}>
                                    <td>{s.product.name}</td>
                                    <td>{s.customer.fullName}</td>
                                    <td>{FormatDate(s.date)}</td>
                                    <td>{'$' + (s.price).toFixed(2)}</td>
                                    <td>{s.salesperson.fullName}</td>
                                    <td>{'$' + CalculateCommission(s.commission, s.price)}</td>                                   
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <br></br>
                <div>
                    <label class="bb-label">Rows Per Page:</label>
                    <select name="cars" id="cars">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <div className='bb-pagination justify-content-end'>
                        <nav>
                            <ul className='pagination justify-content-end'>
                                <li className="page-item">
                                    <a className="page-link"
                                        // onClick={prevPage} 
                                        href='#'>
                                        Previous
                                    </a>
                                </li>
                                {[...Array(10).keys()].map(pgNumber => (
                                    <li key={pgNumber} className={`page-item ${currPage == pgNumber ? 'active' : ''} `} >
                                        <a onClick={() => HandlePagination(pgNumber)} className='page-link' href='#'>
                                            {pgNumber}
                                        </a>
                                    </li>
                                ))}
                                <li className="page-item">
                                    <a className="page-link"
                                        // onClick={nextPage}
                                        href='#'>
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div>
                </div>
            </div >

    )
}

export default Salespersons;

