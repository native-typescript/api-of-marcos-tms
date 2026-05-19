import {schemaOfCoordinatesOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "../coordinates/index.ts";
import {schemaOfDateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "../date/index.ts";
import {schemaOfItemOfCargoOfLocationOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./item-of-cargo/index.ts";
import {z} from "zod";
export const schemaOfLocationOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.strictObject({
		cargo: z.tuple(
			[
				schemaOfItemOfCargoOfLocationOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
			],
			schemaOfItemOfCargoOfLocationOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		),
		city: z.string().nonempty(),
		coordinates: z.union([
			schemaOfCoordinatesOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
			z.strictObject({}).transform<null>(function makeNull(): null {
				return null;
			}),
		]),
		countryCode: z.string().nonempty(),
		endDate: z.union([
			schemaOfDateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		fixTime: z.union([
			z.literal(true),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		group: z.union([
			z.literal(1),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		name: z.string().nonempty(),
		normalizedCity: z.string().nonempty(),
		normalizedName: z.string().nonempty(),
		normalizedStreet: z.string().nonempty(),
		postalCode: z.string().nonempty(),
		refrenceNumbers: z.union([
			z.tuple([z.string().nonempty()]),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		sequence: z.int().positive(),
		startDate:
			schemaOfDateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		street: z.string().nonempty(),
		totalQuantity: z.union([
			z.int().positive(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		totalWeight: z.union([
			z.number().positive(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		type: z.union([z.literal(`Loading`), z.literal(`Unloading`)]),
	});
