import {item} from "./item/module.ts";
import {z} from "zod";
export const schema = z
	.string()
	.nonempty()
	.transform<readonly string[]>(function parseCargoAmount(
		cargoAmount: string,
	): readonly string[] {
		const parsedCargoAmount: readonly string[] = cargoAmount.split(`, `);
		return parsedCargoAmount;
	})
	.pipe(z.tuple([item.schema], item.schema));
