import React, { useEffect, useState } from 'react'
import { Pagination } from 'reactstrap'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const Products = () => {

    const [allCustomerData, SetAllCustomerData] = useState([]);
    const [currSpData, SetCurrData] = useState([]);
    const [isLoading, SetLoading] = useState(true);

    const [pageSize, setPageSize] = useState(25);
    const [currPage, setCurrPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);

    const [isShow, setIsShow] = useState(false);

    const columns = [
        { label: "Id" },
        { label: "Name" },
        { label: "Manufacturer" },
        { label: "Style" },
        { label: "Purchase Price" },
        { label: "Sale Price" },
        { label: "Qty" },
        { label: "Commission %" },
    ];

    //get all data
    useEffect(() => {

        async function fetchData() {

            const response = await fetch(`api/product/all`);
            const data = await response.json();

            SetAllCustomerData(data);
            SetLoading(false);
        }

        fetchData(); //ADD LOGGING

    }, []);

    return (
        isLoading
            ? <p><em>Loading...</em></p>
            : <div>
                <div>
                    <h1 id="tabelLabel" class="bb-label">Products</h1>
                </div>
                <hr></hr>
                <div className='bb-tableContainer'>
                    <table
                        className='table table-striped table-bordered table-hover'
                        aria-labelledby="tabelLabel"
                        cellSpacing="0"
                        width="100%">
                        <thead class="bb-thead">
                     ``       <tr>
                                {columns.map(({ label }) => {
                                    return <th>{label}</th>;
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {allCustomerData.map(c =>
                                <tr key={c.productId}>
                                    <td>{c.productId}</td>
                                    <td>{c.name}</td>
                                    <td>{c.manufacturer}</td>
                                    <td>{c.style}</td>
                                    <td>{'$' + (c.purchasePrice).toFixed(2)}</td>
                                    <td>{'$' + (c.salePrice).toFixed(2)}</td>
                                    <td>{c.qtyOnHand}</td>
                                    <td>{((c.commissionPercentage) * 100).toFixed(0) + '%'}</td>
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
                                        <a className='page-link' href='#'>
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

export default Products;

