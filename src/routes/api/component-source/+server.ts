import { error } from '@sveltejs/kit';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET({ params, url }) {
	const componentName = url.searchParams.get('name');
	
	if (!componentName) {
		throw error(400, 'Component name is required');
	}

	try {
		// Read the component file from src/preview/components
		const filePath = join(process.cwd(), 'src', 'preview', 'components', `${componentName}.svelte`);
		const sourceCode = await readFile(filePath, 'utf-8');
		
		return new Response(sourceCode, {
			headers: {
				'Content-Type': 'text/plain',
				'Cache-Control': 'no-cache'
			}
		});
	} catch (err) {
		console.error('Error reading component file:', err);
		throw error(404, `Component "${componentName}" not found`);
	}
}
