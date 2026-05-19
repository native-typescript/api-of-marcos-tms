import {schemaOfContactPersonOfCarrierOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./contact-person/index.ts";
import {z} from "zod";
export const schemaOfCarrierOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.strictObject({
		city: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		contactPerson: z.union([
			z.strictObject({}),
			schemaOfContactPersonOfCarrierOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		]),
		country: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		drivers: z.union([
			z.tuple([z.strictObject({name: z.string().nonempty()})]),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		name: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		postalCode: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		street: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		vatCode: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
	});
