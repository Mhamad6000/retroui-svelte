---
title: Pagination
description: Displays data in smaller chunks, or "pages," to make it more manageable.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/pagination"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="pagination-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "pagination"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Pagination from "$lib/components/ui/pagination/index.js";

  let currentPage = $state(1);
</script>

<Pagination.Root count={10} bind:value={currentPage} let:pages>
  <Pagination.Content>
    <Pagination.Item>
      <Pagination.PrevButton />
    </Pagination.Item>
    {#each pages as page (page.key)}
      <Pagination.Item>
        <Pagination.Button {page} />
      </Pagination.Item>
    {/each}
    <Pagination.Item>
      <Pagination.NextButton />
    </Pagination.Item>
  </Pagination.Content>
</Pagination.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="pagination-default" />

### With Count

<ComponentPreview name="pagination-with-count" />

### Controlled

<ComponentPreview name="pagination-controlled" />

### Ellipsis

<ComponentPreview name="pagination-ellipsis" />
