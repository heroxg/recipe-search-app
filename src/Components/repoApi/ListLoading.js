import React from 'react'

 function ListLoading(List) {
     return function ListLoading({isLoading, ...props}) {
         if(!isLoading) return <List {...props} />;
         return (
            <p>Loading...</p>
         )
    }
 }

export default ListLoading;