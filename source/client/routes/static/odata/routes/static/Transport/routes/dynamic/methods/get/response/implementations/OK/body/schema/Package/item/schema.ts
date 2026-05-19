import {z} from "zod";
export const schema = z.union([
	z.literal(`CLL`),
	z.literal(`EWP`),
	z.literal(`paleta`),
]);
