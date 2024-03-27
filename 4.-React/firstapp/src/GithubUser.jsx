import React from "react";
import useGithubUser from "./useGithubUser";

const GithubUser = ({ username }) => {
	const { userData, loading, error, fetchUserData } = useGithubUser(username);
    const handleFetchUserData = () => {
        fetchUserData();
    };

	return (
    <div className="github-user-info">
        {userData.avatar_url && (
            <img src={userData.avatar_url} alt={`${userData.name} avatar`} className="user-profile-photo" />
        )}
        {loading && <div>Loading...</div>}
        <div>
            <b>Name:</b> {userData.name}
        </div>
        <div>
            <b>Username:</b> {userData.login}
        </div>
        <div>
            <b>Location:</b> {userData.location}
        </div>
    </div>
	);
};

export default GithubUser