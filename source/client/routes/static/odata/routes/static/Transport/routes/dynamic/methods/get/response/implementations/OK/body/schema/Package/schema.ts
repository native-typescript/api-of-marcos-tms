import {item} from "./item/module.ts";
import {z} from "zod";
export const schema = z
	.string()
	.nonempty()
	.transform<readonly string[]>(function parsePackage(
		package_: string,
	): readonly string[] {
		const parsedPackage: readonly string[] = package_.split(`, `);
		return parsedPackage;
	})
	.pipe(z.tuple([item.schema], item.schema));
