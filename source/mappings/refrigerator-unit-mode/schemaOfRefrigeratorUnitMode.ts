import {z} from "zod";
export const schemaOfRefrigeratorUnitMode = z.union([
	z.literal(`Auto`),
	z.literal(`Off`),
	z.literal(`Continuous`),
]);
