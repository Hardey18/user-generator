import React, { useState, createContext, useEffect } from 'react';

export const UsersContext = createContext();

export const UsersProvider = props => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [singleUser, setSingleUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    const usersPerPage = 3;
    const [activePage, setCurrentPage] = useState(1);

    // Logic for displaying current todos
    const indexOfLastUser  = activePage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (pageNumber) => {
        console.log( `active page is ${pageNumber}`);
        setCurrentPage( pageNumber )
    };

    const onSearch = (e) => {
        const event = e.target.value
        const result = users.filter(item => (item.name.first.toLowerCase().slice(0, event.length) === event.toLowerCase()));
        setFilteredUsers(result)
    }
    
    const handleChange = (e) => {
        const event = e.target.value
        const result = users.filter(item => (item.location.country.toLowerCase().slice(0, event.length) === event.toLowerCase()));
        setFilteredUsers(result)
    }

    const eachUser = (e) => {
        e.preventDefault()
        const email = e.currentTarget.id;
        const details = filteredUsers.filter(person => person.email === email)
        setSingleUser(details[0])
        setShow(!show)
        
    }

    const closeUser = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    useEffect(() => {
        (async () => {
            const response = await fetch("https://randomuser.me/api/?results=50");
            const data = await response.json();
            const item = data.results;
            setUsers(item);
            setFilteredUsers(item);
            setLoading(false);
        })();
    }, []);
    return (
        <UsersContext.Provider value={{ users, loading, filteredUsers, onSearch, eachUser, singleUser, show, setShow, closeUser, handleChange, currentUsers, activePage, handlePageChange }}>
            {props.children}
        </UsersContext.Provider>
    );
}