import {z} from "zod";
export const schemaOfPaymentsOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.strictObject({
		additionalCharges: z.number().nonnegative(),
		basePrice: z.number().positive(),
		currency: z.string().nonempty(),
		isVatInPln: z.union([
			z.literal(true),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		paymentDays: z.union([
			z.int().positive(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		price: z.number().positive(),
		priceBreakdown: z.tuple([
			z.strictObject({
				amount: z.number().positive(),
				type: z.literal(`BaseCharge`),
			}),
		]),
		totalNetAmount: z.number().positive(),
	});
