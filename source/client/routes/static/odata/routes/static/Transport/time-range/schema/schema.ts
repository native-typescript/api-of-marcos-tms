import {time} from "../../time/module.ts";
import type {TimeRange} from "../TimeRange.ts";
import {z} from "zod";
export const schema = z
	.templateLiteral([
		z.string().nonempty(),
		z.literal(`:`),
		z.string().nonempty(),
		z.literal(` - `),
		z.string().nonempty(),
		z.literal(`:`),
		z.string().nonempty(),
	])
	.transform<readonly string[]>(function splitHoursAndMinutes(
		timeRange: string,
	): readonly string[] {
		const parts: readonly string[] = timeRange.split(` - `);
		return parts;
	})
	.pipe(
		z
			.tuple([time.schema.schema, time.schema.schema])
			.transform<TimeRange>(function parseTimeRange(
				timeRange: readonly [time.Time, time.Time],
			): TimeRange {
				const [start, end] = timeRange;
				const parsedTimeRange: TimeRange = {end: end, start: start};
				return parsedTimeRange;
			}),
	);
