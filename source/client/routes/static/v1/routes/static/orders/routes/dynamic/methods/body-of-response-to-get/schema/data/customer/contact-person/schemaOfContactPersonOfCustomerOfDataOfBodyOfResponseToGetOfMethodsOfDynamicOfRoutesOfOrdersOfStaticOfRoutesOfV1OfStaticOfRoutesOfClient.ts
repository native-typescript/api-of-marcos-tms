import {z} from "zod";
export const schemaOfContactPersonOfCustomerOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.strictObject({
		email: z.email(),
		name: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		phone: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
	});
