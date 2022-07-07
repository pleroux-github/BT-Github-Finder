class Github {
	constructor() {
		this.client_id = '7f878a9166f035622785';
		this.client_secret = 'cb91dcc1c8ad79eb8ddff1b3c1abaced98cf7e81';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos,
		};
	}
}
