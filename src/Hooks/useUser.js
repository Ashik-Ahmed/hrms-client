import { useEffect, useState } from "react";

const useUser = (email) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [email])

    return [user, setUser];
}

export default useUser;