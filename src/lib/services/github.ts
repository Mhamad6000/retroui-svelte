import type { GitHubCollaborator, GitHubApiError, CollaboratorsResponse } from '$lib/types/github.js';

export class GitHubService {
	private readonly baseUrl = 'https://api.github.com';
	private readonly apiVersion = '2022-11-28';

	constructor(private readonly token?: string) {}

	/**
	 * Fetch collaborators for a GitHub repository
	 * @param owner - Repository owner (username or organization)
	 * @param repo - Repository name
	 * @returns Promise with collaborators data or error
	 */
	async getCollaborators(owner: string, repo: string): Promise<CollaboratorsResponse> {
		try {
			const url = `${this.baseUrl}/repos/${owner}/${repo}/collaborators`;
			
			const headers: HeadersInit = {
				'Accept': 'application/vnd.github+json',
				'X-GitHub-Api-Version': this.apiVersion,
				'User-Agent': 'RetroUI-Svelte'
			};

			// Add authentication if token is provided
			if (this.token) {
				headers.Authorization = `Bearer ${this.token}`;
			}

			const response = await fetch(url, {
				method: 'GET',
				headers,
				// Add cache control for better performance
				cache: 'default'
			});

			if (!response.ok) {
				const errorData: GitHubApiError = await response.json();
				throw new Error(
					`GitHub API Error: ${errorData.message || 'Failed to fetch collaborators'}`
				);
			}

			const collaborators: GitHubCollaborator[] = await response.json();
			
			return {
				success: true,
				data: collaborators
			};
		} catch (error) {
			console.error('Error fetching GitHub collaborators:', error);
			
			return {
				success: false,
				error: error instanceof Error ? error.message : 'Unknown error occurred'
			};
		}
	}

	/**
	 * Get public collaborators (without authentication)
	 * This will only return collaborators that are publicly visible
	 * @param owner - Repository owner
	 * @param repo - Repository name
	 * @returns Promise with public collaborators data
	 */
	async getPublicCollaborators(owner: string, repo: string): Promise<CollaboratorsResponse> {
		return this.getCollaborators(owner, repo);
	}

	/**
	 * Transform GitHub collaborator data for UI display
	 * @param collaborators - Array of GitHub collaborators
	 * @returns Transformed data suitable for UI components
	 */
	transformCollaboratorsForUI(collaborators: GitHubCollaborator[]) {
		return collaborators.map(collaborator => ({
			name: collaborator.login,
			avatar: collaborator.avatar_url,
			profileUrl: collaborator.html_url,
			role: collaborator.role_name,
			isAdmin: collaborator.site_admin,
			id: collaborator.id
		}));
	}
}

// Create a singleton instance
export const githubService = new GitHubService();
