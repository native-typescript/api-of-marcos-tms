import {z} from "zod";
export const schema = z
	.templateLiteral([
		z.string().nonempty(),
		z.literal(`:`),
		z.string().nonempty(),
	])
	.transform<readonly string[]>(function splitHoursAndMinutes(
		hoursAndMinutes: string,
	): readonly string[] {
		const parts: readonly string[] = hoursAndMinutes.split(`:`);
		return parts;
	})
	.pipe(
		z
			.tuple([
				z
					.string()
					.nonempty()
					.transform<number>(function parseHours(hours: string): number {
						const parsedHours: number = parseInt(hours, 10);
						return parsedHours;
					})
					.pipe(z.number().int().min(0).max(23)),
				z
					.string()
					.nonempty()
					.transform<number>(function parseMinutes(minutes: string): number {
						const parsedMinutes: number = parseInt(minutes, 10);
						return parsedMinutes;
					})
					.pipe(z.number().int().min(0).max(59)),
			])
			.transform(function parseHoursAndMinutes(
				hoursAndMinutes: readonly [number, number],
			) {
				const [hours, minutes] = hoursAndMinutes;
				const parsedHoursAndMinutesObject = {
					hours: hours,
					minutes: minutes,
				} as const;
				return parsedHoursAndMinutesObject;
			}),
	);
