---
title: Sidebar
description: A collapsible sidebar component.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/sidebar"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="sidebar-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "sidebar"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
</script>

<Sidebar.Provider>
  <Sidebar.Root>
    <Sidebar.Content>
      <Sidebar.Group>
        <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <HomeIcon />
                <span>Home</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <SettingsIcon />
                <span>Settings</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    </Sidebar.Content>
    <Sidebar.Footer>
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            <UserIcon />
            <span>Account</span>
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Footer>
  </Sidebar.Root>
</Sidebar.Provider>
```

<br />

## Examples

### Default

<ComponentPreview name="sidebar-default" />

### Collapsible

<ComponentPreview name="sidebar-collapsible" />

### With Header

<ComponentPreview name="sidebar-with-header" />

### Nested

<ComponentPreview name="sidebar-nested" />
