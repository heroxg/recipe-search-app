import React, {useEffect, useSate} from 'react'

 const Users = () => {

     useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json)
        .then(data => {
            console.log(data)}
            )
     }, [])

    return (
        <div>
            
        </div>
    )
}
export default Users