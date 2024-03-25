import { useEffect, useState } from 'react';

export function GithubUser({ username }) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(`https://api.github.com/users/${username}`)
			.then((res) => res.json())
			.then((json) => setUser(json))
			.catch((error) => setError(error))
			.finally(() => setLoading(false)); console.log({username})
	}, [username]);

	return (
		<div>
			{user && (
				<div className='githubuser'>
					<img src={user.avatar_url} />
					<div>{user.login}</div>
					<div>{user.name}</div>
				</div>
			)}
			{error && <div>{error.message}</div>}
			{loading && <div>Loading...</div>}
		</div>
	);
}

export default GithubUser