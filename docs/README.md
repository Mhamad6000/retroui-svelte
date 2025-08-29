# Zeno UI Documentation

This is the documentation website for Zeno UI - a collection of beautiful, accessible, and customizable components built with SvelteKit and Tailwind CSS.

## Features

- 📖 Comprehensive documentation for all 47+ components
- 🔍 Full-text search powered by Pagefind
- 🌙 Dark mode support
- 📱 Mobile-responsive design
- 🎨 Color palette documentation
- 🧱 Pre-built block components
- 📊 Chart components
- ⚡ Fast and lightweight

## Development

### Prerequisites

- Node.js 16.14 or later
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Project Structure

```
docs/
├── src/
│   ├── lib/
│   │   ├── components/          # Reusable components
│   │   └── layouts/             # Layout components
│   └── routes/
│       ├── docs/
│       │   ├── components/      # Component documentation
│       │   ├── blocks/          # Block documentation
│       │   ├── charts/          # Chart documentation
│       │   └── colors/          # Color documentation
│       └── +page.md             # Home page
├── static/                      # Static assets
└── package.json
```

## Features

### Search

The documentation includes full-text search powered by Pagefind. The search index is built automatically during the build process.

### Navigation

- Responsive sidebar navigation
- Previous/Next page navigation
- Mobile-friendly hamburger menu
- Keyboard shortcuts (⌘K for search)

### Components

Each component page includes:

- Live preview
- Installation instructions
- Usage examples
- API reference
- Multiple installation methods (CLI, manual, package managers)

### Theming

The documentation supports multiple color themes and includes comprehensive color palette documentation.

## Building

The site is built as a static site using SvelteKit's static adapter. The build process includes:

1. Building the SvelteKit app
2. Generating the Pagefind search index
3. Optimizing assets

## Deployment

The documentation can be deployed to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Contributing

To add new documentation:

1. Create a new markdown file in the appropriate directory
2. Add frontmatter with title and description
3. Write the documentation content
4. Add the page to the navigation in `Sidebar.svelte`

## License

This documentation is part of the Zeno UI project.
