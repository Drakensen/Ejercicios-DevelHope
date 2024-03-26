import { useState, useEffect } from "react";

const BASE_URL = "https://api.github.com/users";

const fetchGithubUser = async (username) => {
    try {
        const response = await (`${BASE_URL}/${username}`);
        if (response.status === 200) {
        return response.data;
        }
    } catch (error) {
    throw error;
    }
};

export default function useGithubUser(username) {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const getUserData = async () => {
        try {
            setLoading(true);
            const userData = await fetchGithubUser(username);
            setUserData(userData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    getUserData();
    }, [username]);

    return { userData, loading, error };
}