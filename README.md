# RetroUI Svelte

<div align="center">

[![RetroUI Svelte](https://img.shields.io/badge/RetroUI-Svelte-orange?style=for-the-badge&logo=svelte)](https://retroui-svelte.netlify.app)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Svelte](https://img.shields.io/badge/Svelte-5.0+-ff3e00?style=for-the-badge&logo=svelte)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**A comprehensive UI component library that brings the beautiful design system of [RetroUI](https://www.retroui.dev) to the Svelte ecosystem.**

[🌐 Website](https://retroui-svelte.netlify.app) • [📚 Documentation](https://retroui-svelte.netlify.app/docs) • [🐛 Issues](https://github.com/Mhamad6000/retroui-svelte/issues)

</div>

---

## ✨ Features

- **🎨 16 Beautiful Themes**. Choose from a curated collection of themes including Green, Orange, Yellow, Teal, Purple, Gold, Coral, Cyan, Blue, Red, Pink, Indigo, Lime, Rose, Sky, and Slate
- **🌓 Light & Dark Mode**. All themes support both light and dark modes with smooth transitions
- **🔧 Highly Customizable**. Extensive customization options through props, CSS variables, and theme overrides
- **📚 Rich Documentation**. Detailed documentation with examples and usage guides
- **🔄 Unofficial Port**. Community-driven port from the original RetroUI library created by [Mhamad6000](https://github.com/Mhamad6000)

## 🚀 Quick Start

### Prerequisites

**Important**: RetroUI Svelte requires [shadcn-svelte](https://www.shadcn-svelte.com/) to be installed and configured in your project.

### Installation

```bash
# Install components
npx shadcn-svelte@latest add https://retroui-svelte.netlify.app/r/button.json
npx shadcn-svelte@latest add https://retroui-svelte.netlify.app/r/input.json
npx shadcn-svelte@latest add https://retroui-svelte.netlify.app/r/card.json
```

### Usage

```svelte
<script>
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
</script>

<Card class="w-96">
  <CardHeader>
    <CardTitle>Welcome to RetroUI</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Get Started</Button>
  </CardContent>
</Card>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original RetroUI**: This is an unofficial port of the original [RetroUI](https://www.retroui.dev) library
- **shadcn-svelte**: Built on top of the excellent [shadcn-svelte](https://www.shadcn-svelte.com/) registry system
- **Community**: Thanks to all contributors and users!


