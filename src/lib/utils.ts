import { docs, type Doc } from "$content/index.js";
import { error } from "@sveltejs/kit";
import type { Component } from "svelte";

export function getDocMetadata(slug: string = "index") {
	return docs.find((doc:any) => doc.slug === slug);
}

export function getAllDocs() {
	return docs;
}

function slugFromPath(path: string) {
	return path.replace("/src/content/", "").replace(".md", "");
}

export type DocResolver = () => Promise<{ default: Component; metadata: Doc }>;

export async function getDoc(slug: string = "index") {
	const modules = import.meta.glob("/src/content/**/*.md");

	let match: { path?: string; resolver?: DocResolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === slug) {
			match = { path, resolver: resolver as unknown as DocResolver };
			break;
		}
	}
	const doc = await match?.resolver?.();
	const metadata = getDocMetadata(slug);
	if (!doc || !metadata) {
		error(404, "Could not find the document.");
	}

	return {
		component: doc.default,
		metadata,
	};
}

/**
 * Transform internal registry imports to user-facing imports
 */
export function transformImportAliases(sourceCode: string): string {
    const aliasMap = {
        '$registry/lib': '$lib',
        '$registry/ui': '$lib/components/ui',
        '$registry/lib/utils': '$lib/utils',
        '$registry/hooks': '$lib/hooks',
        // Add any other aliases as needed
    };

    let transformedCode = sourceCode;

    // Transform each alias
    Object.entries(aliasMap).forEach(([registryPath, userPath]) => {
        // Match import statements with the registry path
        const importRegex = new RegExp(
            `(import\\s+.*?from\\s+['"\`])${registryPath.replace('$', '\\$')}([^'"\`]*['"\`])`,
            'g'
        );
        
        transformedCode = transformedCode.replace(importRegex, `$1${userPath}$2`);
    });

    return transformedCode;
}