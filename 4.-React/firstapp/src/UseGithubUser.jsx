import { useState, useEffect } from "react";
import useCurrentLocation from "./useCurrentLocation";

const useGithubUser = (username) => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchUserData = async () => {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        if (response.ok) {
            setUserData(data);
            setLoading(false);
    } else {
        setError({
        message: `Error: ${data.message}`,
    });
    setLoading(false);
    }

    return { response, data };
    };

    useEffect(() => {
        fetchUserData();
    }, [username]);

    return { userData, loading, error, fetchUserData };
};

export default useGithubUser;