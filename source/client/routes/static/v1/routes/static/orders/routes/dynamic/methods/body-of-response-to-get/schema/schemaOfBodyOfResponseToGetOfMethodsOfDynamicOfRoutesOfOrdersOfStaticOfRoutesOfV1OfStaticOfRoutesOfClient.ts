import {schemaOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./data/index.ts";
import {z} from "zod";
export const schemaOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.union([
		z.strictObject({
			data: schemaOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
			message: z.union([
				z.literal(
					`Order validation failed. Reason: Loading and Unloading locations match based on country code and postal code.`,
				),
				z.literal(
					`Order validation failed. Reason: Order date must be in the current year.`,
				),
			]),
			orderSubType: z.literal(`Regular`),
			sequenceId: z.literal(0),
			status: z.literal(`Partial`),
		}),
		z.strictObject({
			data: schemaOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
			orderSubType: z.literal(`Regular`),
			sequenceId: z.literal(0),
			status: z.literal(`Succeeded`),
		}),
		z.strictObject({
			errorCode: z.literal(`input_not_freight`),
			message: z.string().nonempty(),
			sequenceId: z.number().nonnegative(),
			status: z.literal(`Failed`),
		}),
	]);
