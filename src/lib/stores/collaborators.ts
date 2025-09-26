import { writable, derived } from 'svelte/store';
import type { GitHubCollaborator } from '$lib/types/github.js';

export interface CollaboratorUI {
	name: string;
	avatar: string;
	profileUrl: string;
	role: string;
	isAdmin: boolean;
	id: number;
}

interface CollaboratorsState {
	data: CollaboratorUI[];
	loading: boolean;
	error: string | null;
	lastFetched: Date | null;
}

// Create the main store
const createCollaboratorsStore = () => {
	const { subscribe, set, update } = writable<CollaboratorsState>({
		data: [],
		loading: false,
		error: null,
		lastFetched: null
	});

	return {
		subscribe,
		
		/**
		 * Set loading state
		 */
		setLoading: (loading: boolean) => {
			update(state => ({ ...state, loading }));
		},

		/**
		 * Set collaborators data
		 */
		setCollaborators: (collaborators: CollaboratorUI[]) => {
			update(state => ({
				...state,
				data: collaborators,
				loading: false,
				error: null,
				lastFetched: new Date()
			}));
		},

		/**
		 * Set error state
		 */
		setError: (error: string) => {
			update(state => ({
				...state,
				error,
				loading: false
			}));
		},

		/**
		 * Clear all data
		 */
		clear: () => {
			set({
				data: [],
				loading: false,
				error: null,
				lastFetched: null
			});
		},

		/**
		 * Fetch collaborators from API
		 */
		fetchCollaborators: async (owner: string, repo: string, token?: string) => {
			update(state => ({ ...state, loading: true, error: null }));

			try {
				const params = new URLSearchParams({ owner, repo });
				if (token) params.append('token', token);

				const response = await fetch(`/api/github/collaborators?${params}`);
				const result = await response.json();

				if (result.success && result.data) {
					// Transform GitHub data to UI format
					const uiCollaborators: CollaboratorUI[] = result.data.map((collaborator: GitHubCollaborator) => ({
						name: collaborator.login,
						avatar: collaborator.avatar_url,
						profileUrl: collaborator.html_url,
						role: collaborator.role_name,
						isAdmin: collaborator.site_admin,
						id: collaborator.id
					}));

					update(state => ({
						...state,
						data: uiCollaborators,
						loading: false,
						error: null,
						lastFetched: new Date()
					}));
				} else {
					update(state => ({
						...state,
						loading: false,
						error: result.error || 'Failed to fetch collaborators'
					}));
				}
			} catch (error) {
				update(state => ({
					...state,
					loading: false,
					error: error instanceof Error ? error.message : 'Unknown error occurred'
				}));
			}
		}
	};
};

export const collaboratorsStore = createCollaboratorsStore();

// Derived stores for specific data
export const collaboratorsData = derived(collaboratorsStore, $store => $store.data);
export const collaboratorsLoading = derived(collaboratorsStore, $store => $store.loading);
export const collaboratorsError = derived(collaboratorsStore, $store => $store.error);
export const collaboratorsCount = derived(collaboratorsStore, $store => $store.data.length);
