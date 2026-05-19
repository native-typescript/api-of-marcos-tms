import {z} from "zod";
export const schema = z
	.string()
	.nonempty()
	.transform<number>(function parseItemOfCargoAmount(item: string): number {
		const parsedItem: number = Number.parseFloat(item);
		return parsedItem;
	})
	.pipe(z.number().positive());
