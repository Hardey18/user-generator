import React, { useState, createContext, useEffect } from 'react';

export const UsersContext = createContext();

export const UsersProvider = props => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const onSearch = (e) => {
        const event = e.target.value
        const result = users.filter(item => (item.name.first.toLowerCase().slice(0, event.length) === event.toLowerCase()));
        setFilteredUsers(result)
    }

    // useEffect(() => {
    //     onSearch(e)
    // }, [e])

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
        <UsersContext.Provider value={{ users, loading, filteredUsers, onSearch }}>
            {props.children}
        </UsersContext.Provider>
    );
}