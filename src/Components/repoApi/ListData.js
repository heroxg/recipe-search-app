import React, { useEffect, useState} from 'react'
import List from '../repoApi/List'
import ListLoading from '../repoApi/ListLoading'

 function ListData() {
    const Loader = ListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    })

    useEffect(() => {
        setAppState({loading : true});
        const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            setAppState({loading : false, repos: data});
        })
    }, [setAppState]);
    return (
        <div className='container'>
            <h1>My Repositories</h1>
            <List />
            <Loader isLoading={appState.loading} repos={appState.repos}/>
        </div>
    )
}

export default ListData