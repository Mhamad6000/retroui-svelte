import { json, type RequestHandler } from '@sveltejs/kit';
import { githubService } from '$lib/services/github.js';
import type { CollaboratorsResponse } from '$lib/types/github.js';

/**
 * GET /api/github/collaborators
 * 
 * Query parameters:
 * - owner: GitHub repository owner (required)
 * - repo: GitHub repository name (required)
 * - token: GitHub personal access token (optional, for private repos)
 * 
 * Example: /api/github/collaborators?owner=octocat&repo=Hello-World
 */
export const GET: RequestHandler = async ({ url, fetch }) => {
	try {
		// Extract query parameters
		const owner = url.searchParams.get('owner');
		const repo = url.searchParams.get('repo');
		const token = url.searchParams.get('token');

		// Validate required parameters
		if (!owner || !repo) {
			return json(
				{
					success: false,
					error: 'Missing required parameters: owner and repo are required'
				},
				{ status: 400 }
			);
		}

		// Create GitHub service instance with token if provided
		const service = token ? new (await import('$lib/services/github.js')).GitHubService(token) : githubService;

		// Fetch collaborators
		const result = await service.getCollaborators(owner, repo);

		// Return appropriate response
		if (result.success) {
			return json(result, { 
				status: 200,
				headers: {
					'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
					'Content-Type': 'application/json'
				}
			});
		} else {
			return json(result, { 
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	} catch (error) {
		console.error('API Error:', error);
		
		return json(
			{
				success: false,
				error: 'Internal server error'
			},
			{ 
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
};

/**
 * OPTIONS handler for CORS preflight requests
 */
export const OPTIONS: RequestHandler = async () => {
	return new Response(null, {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			'Access-Control-Max-Age': '86400'
		}
	});
};
