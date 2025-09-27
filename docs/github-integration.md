# GitHub Collaborators Integration

This document explains how to set up and use the GitHub collaborators integration in your RetroUI Svelte project.

## Overview

The GitHub integration allows you to fetch and display real collaborators from your GitHub repository on your landing page. It includes:

- TypeScript types for GitHub API responses
- A professional GitHub service class
- SvelteKit API endpoint for server-side fetching
- Svelte stores for reactive state management
- Error handling and loading states

## Setup Instructions

### 1. Configure GitHub Repository

Edit `src/lib/config/github.ts` and update the following values:

```typescript
export const GITHUB_CONFIG = {
	OWNER: 'your-github-username',     // Your GitHub username or organization
	REPO: 'your-repository-name',      // Your repository name
	TOKEN: process.env.GITHUB_TOKEN,   // Optional: GitHub token for private repos
	// ... other config
};
```

### 2. Environment Variables (Optional)

If you need to access private repositories or want higher rate limits, create a `.env` file:

```bash
GITHUB_TOKEN=ghp_your_personal_access_token_here
```

**To get a GitHub Personal Access Token:**
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select scopes:
   - `public_repo` (for public repositories)
   - `repo` (for private repositories)
4. Copy the generated token

### 3. Usage

The integration is already set up in your landing page. The collaborators will be automatically fetched when the page loads.

## API Endpoints

### GET `/api/github/collaborators`

Fetches collaborators from a GitHub repository.

**Query Parameters:**
- `owner` (required): GitHub repository owner
- `repo` (required): GitHub repository name  
- `token` (optional): GitHub personal access token

**Example:**
```
GET /api/github/collaborators?owner=octocat&repo=Hello-World
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "html_url": "https://github.com/octocat",
      "role_name": "write",
      "site_admin": false,
      // ... other GitHub API fields
    }
  ]
}
```

## Components

### GitHubService

Located in `src/lib/services/github.ts`, this class handles all GitHub API interactions:

```typescript
import { githubService } from '$lib/services/github.js';

// Fetch collaborators
const result = await githubService.getCollaborators('owner', 'repo');

// Transform for UI
const uiData = githubService.transformCollaboratorsForUI(result.data);
```

### Collaborators Store

Located in `src/lib/stores/collaborators.ts`, provides reactive state management:

```typescript
import { collaboratorsStore } from '$lib/stores/collaborators.js';

// Fetch collaborators
await collaboratorsStore.fetchCollaborators('owner', 'repo');

// Access reactive data
$: collaborators = $collaboratorsData;
$: isLoading = $collaboratorsLoading;
$: error = $collaboratorsError;
```

## Features

- **Type Safety**: Full TypeScript support with proper types
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Loading indicators and skeleton states
- **Caching**: Built-in caching to reduce API calls
- **Rate Limiting**: Respects GitHub's rate limits
- **Security**: Secure token handling
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Customization

### Styling Contributors

The contributors are displayed in the community section. You can customize the styling by modifying the HTML structure in `src/routes/(landing)/+page.svelte`:

```svelte
{#each contributors as contributor}
	<a href={contributor.profileUrl} class="contributor-link">
		<img src={contributor.avatar} alt={contributor.name} />
		{#if contributor.isAdmin}
			<div class="admin-badge">⭐</div>
		{/if}
	</a>
{/each}
```

### Adding More GitHub Data

You can extend the service to fetch additional GitHub data:

```typescript
// Add to GitHubService class
async getRepositoryInfo(owner: string, repo: string) {
	// Implementation for fetching repo info
}

async getContributors(owner: string, repo: string) {
	// Implementation for fetching contributors (different from collaborators)
}
```

## Troubleshooting

### Common Issues

1. **403 Forbidden**: Check your GitHub token permissions
2. **404 Not Found**: Verify the repository owner and name
3. **Rate Limit Exceeded**: Implement caching or use authentication
4. **CORS Issues**: The API endpoint handles CORS automatically

### Debug Mode

Enable debug logging by setting:

```typescript
// In your component
console.log('GitHub Config:', GITHUB_CONFIG);
console.log('Collaborators:', $collaboratorsData);
```

## Security Considerations

- Never commit GitHub tokens to version control
- Use environment variables for sensitive data
- Implement proper error handling to avoid exposing sensitive information
- Consider implementing rate limiting on your API endpoint

## Performance

- Contributors are cached for 5 minutes by default
- Images are loaded lazily for better performance
- API responses include proper cache headers
- Consider implementing client-side caching for better UX
