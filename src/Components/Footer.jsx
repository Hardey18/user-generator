import React, { useContext } from 'react'
import styled from 'styled-components'
import { HiCloudDownload } from 'react-icons/hi';
import Pagination from "react-js-pagination";
import { UsersContext } from '../StateProvider';
import fileDownload from 'js-file-download';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1.6rem;

    .download__button {
        background: #7a46c1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 10px 14px;
        border-radius: 20px;
        cursor: pointer;
        height: fit-content;

        span {
            margin-left: 0.7rem;
            font-size: 12px;
            font-weight: 800;
        }
    }

    .pagination {
        display: flex;

        ul {
            li {
                list-style-type: none;
            }

            li:nth-child(1), li:nth-child(3), li:nth-child(4), li:nth-child(5), li:nth-child(7) {
                display: none;
            }

            li:nth-child(2), li:nth-child(6) {
                padding: 12px 18px;
                border-radius: 8px;
                cursor: pointer;

                a {
                    text-decoration: none;
                    font-weight: 900;
                }
            }

            li:nth-child(2) {
                background: #e2e2eb;
                
                a {
                    color: #272a41;
                }
            }

            li:nth-child(6) {
                background: #272a41;
                margin-left: 10px;
                
                a {
                    color: #fff;
                }
            }
        }
    }
`

const jsonToCsv = (data) => {
    const headers = Object.keys(data[0]);
    const csvRows = [];
    csvRows.push(headers.join(','));
    for (const row of data) {
        const values = headers.map((header) => {
            const escapedQoute = ('' + row[header]).replace(/"/g, '\\"')
            return `"${escapedQoute}"`;
        })
        csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
}

function Footer() {

    const { filteredUsers, activePage, handlePageChange } = useContext(UsersContext);

    const state = useContext(UsersContext);
    const formattedData = state?.filteredUsers.map((data) => ({
        Fullname: `${data.name.first} ${data.name.last}`,
        Gender: data.gender,
        Dob: data.dob.date,
        Email: data.email,
        Phone: data.phone,
        Cell: data.cell,
        Address: `${data.location.street.number} ${data.location.street.name}, ${data.location.city} ${data.location.country}`
    }))
    
    const download = () => {
        console.log(jsonToCsv(formattedData));
        const data = jsonToCsv(formattedData);
        let blob = new Blob([data], { type: 'text/csv' });
        fileDownload(blob, "user.csv");
    }

    return (
        <FooterContainer>
            <div className="download__button" onClick={download}>
                <HiCloudDownload color="#fff" size={20} />
                <span>Download results</span>
            </div>
            <div className="pagination">
                <Pagination
                activePage={ activePage }
                itemsCountPerPage={ 3 }
                totalItemsCount={ filteredUsers.length }
                pageRangeDisplayed={ 3 }
                onChange={ handlePageChange }
                />
            </div>
        </FooterContainer>
    )
}

export default Footer
