import {z} from "zod";
export const schemaOfRegime = z.union([
	z.literal(`Off`),
	z.literal(`Auto`),
	z.literal(`Continous`),
]);
