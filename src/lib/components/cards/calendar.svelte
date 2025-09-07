<script lang="ts">
	import * as Card from "$registry/ui/card/index.js";
	import { RangeCalendar } from "$registry/ui/range-calendar/index.js";
	import { CalendarDate } from "@internationalized/date";

	const start = new CalendarDate(2023, 5, 5);
</script>

<Card.Root class="hidden max-w-[260px] p-0 sm:flex">
	<Card.Content class="p-0 h-full">
		<RangeCalendar
			class="h-full"
			placeholder={start}
			value={{ start, end: start.add({ days: 8 }) }}
		/>
	</Card.Content>
</Card.Root>
