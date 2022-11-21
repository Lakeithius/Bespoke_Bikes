import React, { useEffect, useState } from 'react'
import { Pagination } from 'reactstrap'
import { useHistory, redirect } from "react-router-dom";
import { FormatDate } from '../helpers/Formatting';

const Salespersons = () => {

    const [allSpData, SetSpData] = useState([]);
    const [currSpData, SetCurrData] = useState([]);
    const [isLoading, SetLoading] = useState(true);

    const [pageSize, setPageSize] = useState(25);
    const [currPage, setCurrPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);

    const history = useHistory();

    // const navigate = useNavigate();

    //get all data
    useEffect(() => {

        async function fetchData() {

            const response = await fetch(`api/salespersons/all`);
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

        console.log(''.concat("page: ", index));
    };

    function HandleEdit(sp) {

        history.push({
            pathname: '/EditSalesperson',
            state:
            {
                id: sp.id,
                firstName: sp.firstName,
                lastName: sp.lastName,
                startDate: sp.startDate,
                terminationDate: sp.terminationDate,
                address: sp.address,
                phoneNumber: sp.phoneNumber,
                managerId: sp.managerId,
                product: sp.product,
                salespersonId: sp.salespersonId,

            },
        });
    };

    return (
        isLoading
            ? <p><em>Loading...</em></p>
            : <div>
                <div>
                    <h1 id="tabelLabel" class="bb-label">Salespersons</h1>
                </div>
                <div className='bb-tableContainer'>
                    <table
                        className='table table-striped table-bordered table-hover'
                        aria-labelledby="tabelLabel"
                        cellSpacing="0"
                        width="100%">
                        <thead class="bb-thead">
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Start Date</th>
                                <th>Term Date</th>
                                <th>Manager Id</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {allSpData.map(sp =>
                                <tr key={sp.spId}>
                                    <td>{sp.spId}</td>
                                    <td>{sp.firstName}</td>
                                    <td>{sp.lastName}</td>
                                    <td>{sp.phoneNumber}</td>
                                    <td>{FormatDate(sp.startDate)}</td>
                                    <td>{FormatDate(sp.terminationDate)}</td>
                                    <td>{sp.spId}</td>
                                    <td><button
                                        type="button"
                                        className="btn btn-primary bb-button"
                                        onClick={(e) => HandleEdit(sp)}>
                                        Edit
                                    </button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
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
            </div >

    )
}

export default Salespersons;

