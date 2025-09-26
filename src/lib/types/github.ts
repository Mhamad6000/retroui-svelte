export interface GitHubCollaborator {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: 'User' | 'Bot';
	site_admin: boolean;
	permissions: {
		pull: boolean;
		triage: boolean;
		push: boolean;
		maintain: boolean;
		admin: boolean;
	};
	role_name: 'read' | 'triage' | 'write' | 'maintain' | 'admin';
}

export interface GitHubApiError {
	message: string;
	documentation_url?: string;
	status?: number;
}

export interface CollaboratorsResponse {
	success: boolean;
	data?: GitHubCollaborator[];
	error?: string;
}
