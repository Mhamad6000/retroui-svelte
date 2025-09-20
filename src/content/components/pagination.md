---
title: Pagination
description: Displays data in smaller chunks, or "pages," to make it more manageable.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/pagination"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/pagination#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/pagination"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/pagination"];
</script>

<ComponentPreview name="pagination-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as Pagination from "$lib/components/ui/pagination/index.js";
</script>
 
<Pagination.Root count={100} perPage={10}>
 {#snippet children({ pages, currentPage })}
  <Pagination.Content>
   <Pagination.Item>
    <Pagination.PrevButton />
   </Pagination.Item>
   {#each pages as page (page.key)}
    {#if page.type === "ellipsis"}
     <Pagination.Item>
      <Pagination.Ellipsis />
     </Pagination.Item>
    {:else}
     <Pagination.Item>
      <Pagination.Link {page} isActive={currentPage === page.value}>
       {page.value}
      </Pagination.Link>
     </Pagination.Item>
    {/if}
   {/each}
   <Pagination.Item>
    <Pagination.NextButton />
   </Pagination.Item>
  </Pagination.Content>
 {/snippet}
</Pagination.Root>
```