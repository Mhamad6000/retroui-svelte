
export function enhanceCodeBlocks() {
	// Find all code blocks with svelte language
	const svelteCodeBlocks = document.querySelectorAll('pre code.language-svelte');
	
	svelteCodeBlocks.forEach((codeElement) => {
		const codeContent = codeElement.textContent || '';
		
		// Check if this is a code block that should be enhanced
		if (codeContent.includes('from "@svecodocs/kit"') && codeContent.includes('<Button')) {
			enhanceSvelteCodeBlock(codeElement.parentElement as HTMLPreElement, codeContent);
		}
	});
}

function enhanceSvelteCodeBlock(preElement: HTMLPreElement, codeContent: string) {
	// Create a wrapper div for the enhanced code block
	const wrapper = document.createElement('div');
	wrapper.className = 'relative mb-6 mt-4 rounded-lg border';
	
	// Create header with preview label and copy button
	const header = document.createElement('div');
	header.className = 'flex items-center justify-between border-b px-4 py-2';
	header.innerHTML = `
		<div class="flex items-center gap-2">
			<span class="text-sm font-medium">Preview</span>
		</div>
		<button class="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded" onclick="navigator.clipboard.writeText('${codeContent.replace(/'/g, "\\'")}')">
			Copy
		</button>
	`;
	
	// Create preview section
	const preview = document.createElement('div');
	preview.className = 'p-6';
	
	// Create buttons container
	const buttonsContainer = document.createElement('div');
	buttonsContainer.className = 'flex gap-2 justify-center flex-wrap';
	
	// Add buttons based on the code content
	const buttonConfigs = [
		{ text: 'Default', variant: '' },
		{ text: 'Secondary', variant: 'secondary' },
		{ text: 'Ghost', variant: 'ghost' },
		{ text: 'Outline', variant: 'outline' },
		{ text: 'Link', variant: 'link' }
	];
	
	buttonConfigs.forEach(config => {
		const button = document.createElement('button');
		button.textContent = config.text;
		button.className = getButtonClasses(config.variant);
		buttonsContainer.appendChild(button);
	});
	
	preview.appendChild(buttonsContainer);
	
	// Create collapsible code section
	const codeSection = document.createElement('div');
	codeSection.className = 'border-t';
	codeSection.innerHTML = `
		<details class="group">
			<summary class="cursor-pointer px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
				View Code
			</summary>
			<div class="border-t p-4">
				<pre class="language-svelte overflow-auto rounded-lg bg-gray-950 p-4 text-sm text-gray-100"><code>${escapeHtml(codeContent)}</code></pre>
			</div>
		</details>
	`;
	
	// Assemble the wrapper
	wrapper.appendChild(header);
	wrapper.appendChild(preview);
	wrapper.appendChild(codeSection);
	
	// Replace the original pre element
	preElement.parentNode?.replaceChild(wrapper, preElement);
}

function getButtonClasses(variant: string): string {
	const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-4 py-2';
	
	switch (variant) {
		case 'secondary':
			return `${baseClasses} bg-secondary text-secondary-foreground hover:bg-secondary/80 border-2 border-border transition hover:translate-y-1`;
		case 'ghost':
			return `${baseClasses} hover:bg-accent hover:text-accent-foreground bg-transparent border-transparent hover:border-border transition border-2 hover:text-foreground`;
		case 'outline':
			return `${baseClasses} border border-input hover:bg-accent hover:text-accent-foreground bg-transparent border-2 transition hover:translate-y-1`;
		case 'link':
			return `${baseClasses} underline-offset-4 hover:underline text-primary bg-transparent`;
		default:
			return `${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-border transition hover:translate-y-1 hover:bg-primary-hover`;
	}
}

function escapeHtml(text: string): string {
	const div = document.createElement('div');
	div.textContent = text;
	return div.innerHTML;
}
