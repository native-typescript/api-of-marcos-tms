import {z} from "zod";
export const schemaOfItemOfCargoOfLocationOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.strictObject({
		cargoType: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		ftl: z.union([
			z.literal(true),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		ldm: z.union([
			z.number().positive(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		pallets: z.union([
			z.int().positive(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		palletsExchange: z.union([
			z.literal(false),
			z.literal(true),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		quantity: z.union([
			z.int().positive(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		stackable: z.union([
			z.literal(false),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		volume: z.union([
			z.number().positive(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		weight: z.union([
			z.number().positive(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
	});
