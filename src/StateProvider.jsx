import React,{useState, createContext, useEffect} from 'react';

export const UsersContext = createContext();

export const UsersProvider = props => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://randomuser.me/api/?results=50"); 
            const data = await response.json();
            const item = data.results;
            setUsers(item)
            setLoading(false);
          })();
        }, []);
    return (
    <UsersContext.Provider value={ { users, loading } }>
        {props.children}
    </UsersContext.Provider>
    );
}