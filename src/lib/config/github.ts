/**
 * GitHub Configuration
 * 
 * Update these values with your actual GitHub repository information
 */

export const GITHUB_CONFIG = {
	// Replace with your GitHub username or organization
	OWNER: 'Mhamad6000',
	
	// Replace with your repository name
	REPO: 'retroui-svelte',
	
	// Optional: GitHub Personal Access Token for private repositories
	// Get one from: https://github.com/settings/tokens
	// Required scopes: 'repo' (for private repos) or 'public_repo' (for public repos)
	TOKEN: process.env.GITHUB_TOKEN || undefined,
	
	// API settings
	API_VERSION: '2022-11-28',
	BASE_URL: 'https://api.github.com',
	
	// Cache settings
	CACHE_DURATION: 5 * 60 * 1000, // 5 minutes in milliseconds
	
	// Rate limiting
	RATE_LIMIT_REQUESTS_PER_HOUR: 5000, // GitHub's default for authenticated requests
	RATE_LIMIT_REQUESTS_PER_HOUR_UNAUTHENTICATED: 60 // GitHub's default for unauthenticated requests
} as const;

/**
 * Environment variables that should be set:
 * 
 * GITHUB_TOKEN - Your GitHub Personal Access Token (optional)
 * 
 * Example .env file:
 * GITHUB_TOKEN=ghp_your_token_here
 */
