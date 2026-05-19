import {z} from "zod";
export const schemaOfContactPersonOfCarrierOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.strictObject({
		email: z.email(),
		name: z.string().nonempty(),
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
