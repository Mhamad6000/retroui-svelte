---
title: Copy Button Component Test
description: Testing the new registry-based copy button component
---

# Copy Button Component

The ComponentPreview system now uses a dedicated **CopyCodeButton** component that:

- 🎨 Uses the **registry Button** component with default styling
- 👻 **Ghost variant** for subtle appearance  
- ⚡ **Hover-based visibility** (appears only on code block hover)
- ✅ **Visual feedback** with check icon when copied
- 🎯 **Proper positioning** and z-index handling

## Button Component

<ComponentPreview name="button-style-default" />

## Badge Component

<ComponentPreview name="badge-style-default" />

## Input Component

<ComponentPreview name="input-style-default" />

## Features

### Registry Integration
- Uses `Button.Root` from the registry with proper props
- Consistent styling with the rest of the application
- Maintains hover states and visual feedback

### Copy Functionality
- Automatic clipboard integration
- Visual state changes (copy → check → copy)
- 2-second auto-reset timer
- Error handling for clipboard failures

### Design Consistency
- Matches the overall design system
- Proper opacity and hover transitions
- Dark theme optimized colors
- Accessible button sizing and positioning
