import {z} from "zod";
export const schemaOfLoadingType = z.union([
	z.literal(`All`),
	z.literal(`Back`),
	z.literal(`Side`),
	z.literal(`Top`),
]);
