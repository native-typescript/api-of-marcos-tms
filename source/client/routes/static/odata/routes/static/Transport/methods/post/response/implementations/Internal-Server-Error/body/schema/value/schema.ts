import {z} from "zod";
export const schema = z.union([
	z.literal(`Brak możliwości ponownego pobrania zaimportowanego transportu`),
	z.literal(
		`Wystąpił błąd podczas dodawania transportu!
Brak rodzaju transportu.`,
	),
]);
