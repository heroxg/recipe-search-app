import React from 'react'

const List = (props) => {
    const {repos} = props;
    if(!repos || repos.length === 0) return <p>Sorry! there is no repo</p>;
    return (
        <div>
            {repos.map(repo => {
                return (
                    <div key={repo.id}>
                        <p>{repo.name}</p>
                        <p>{repo.url}</p>
                        <p>{repo.description}</p>
                    </div>
                );
            })}
        </div>
    )
}
export default List