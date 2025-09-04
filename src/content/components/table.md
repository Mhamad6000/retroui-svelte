---
title: Table
description: A responsive table component.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/table"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="table-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "table"]} />

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
    <Table.Row>
      <Table.Cell class="font-medium">INV002</Table.Cell>
      <Table.Cell>Pending</Table.Cell>
      <Table.Cell>PayPal</Table.Cell>
      <Table.Cell class="text-right">$150.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell class="font-medium">INV003</Table.Cell>
      <Table.Cell>Unpaid</Table.Cell>
      <Table.Cell>Bank Transfer</Table.Cell>
      <Table.Cell class="text-right">$350.00</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="table-default" />

### With Caption

<ComponentPreview name="table-with-caption" />

### Striped

<ComponentPreview name="table-striped" />

### Sortable

<ComponentPreview name="table-sortable" />

### Dense

<ComponentPreview name="table-dense" />
