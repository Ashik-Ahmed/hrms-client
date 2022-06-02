import { useEffect, useState } from "react";

const useUser = (id) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])

    return [user, setUser];
}

export default useUser;