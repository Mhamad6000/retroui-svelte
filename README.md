# RetroUI Svelte

<div align="center">

[![RetroUI Svelte](https://img.shields.io/badge/RetroUI-Svelte-orange?style=for-the-badge&logo=svelte)](https://retroui-svelte.dev)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Svelte](https://img.shields.io/badge/Svelte-5.0+-ff3e00?style=for-the-badge&logo=svelte)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**A comprehensive UI component library that brings the beautiful design system of [RetroUI](https://www.retroui.dev) to the Svelte ecosystem.**

[🌐 Website](https://retroui-svelte.dev) • [📚 Documentation](https://retroui-svelte.dev/docs) • [🐛 Issues](https://github.com/Mhamad6000/retroui-svelte/issues) • [💬 Discussions](https://github.com/Mhamad6000/retroui-svelte/discussions)

</div>

---

## ✨ Features

- **🎨 16 Beautiful Themes** - Choose from Green, Orange, Yellow, Teal, Purple, Gold, Coral, Cyan, Blue, Red, Pink, Indigo, Lime, Rose, Sky, and Slate
- **🌓 Light & Dark Mode** - All themes support both light and dark modes with smooth transitions
- **🔧 Highly Customizable** - Extensive customization through props, CSS variables, and theme overrides
- **📱 Responsive Design** - Mobile-first approach with responsive components
- **♿ Accessible** - Built with accessibility in mind following WCAG guidelines
- **🔄 Unofficial Port** - Community-driven port from the original RetroUI library

## 🚀 Quick Start

### Prerequisites

**Important**: RetroUI Svelte requires [shadcn-svelte](https://www.shadcn-svelte.com/) to be installed and configured in your project.

### Installation

```bash
# Install components
npx shadcn-svelte@latest add button
npx shadcn-svelte@latest add input
npx shadcn-svelte@latest add card
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
    <Button variant="primary">Get Started</Button>
  </CardContent>
</Card>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original RetroUI**: This is an unofficial port of the original [RetroUI](https://www.retroui.dev) library
- **shadcn-svelte**: Built on top of the excellent [shadcn-svelte](https://www.shadcn-svelte.com/) registry system
- **SvelteKit**: Powered by [SvelteKit](https://kit.svelte.dev/) for the documentation site
- **Community**: Thanks to all contributors and users!

## 📞 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/Mhamad6000/retroui-svelte/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Mhamad6000/retroui-svelte/discussions)
- 📖 **Documentation**: [Full Documentation](https://retroui-svelte.dev/docs)

---

<div align="center">

**Built with ❤️ by the RetroUI Community**

[🌐 Visit Website](https://retroui-svelte.dev) • [📚 Read Docs](https://retroui-svelte.dev/docs) • [🐙 GitHub](https://github.com/Mhamad6000/retroui-svelte)

</div>
