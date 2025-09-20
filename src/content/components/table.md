---
title: Table
description: A responsive table component.
section: Components
links:
  - title: "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/table"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/table.json"];
</script>

<ComponentPreview name="table-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as Table from "$lib/components/ui/table/index.js";
</script>

<Table.Root>
  <Table.Caption>A list of your recent invoices.</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.Head class="w-[100px]">Invoice</Table.Head>
      <Table.Head>Status</Table.Head>
      <Table.Head>Method</Table.Head>
      <Table.Head class="text-right">Amount</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell class="font-medium">INV001</Table.Cell>
      <Table.Cell>Paid</Table.Cell>
      <Table.Cell>Credit Card</Table.Cell>
      <Table.Cell class="text-right">$250.00</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="table-usage-example" />

