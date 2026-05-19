import {schemaOfContactPersonOfCustomerOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./contact-person/index.ts";
import {z} from "zod";
export const schemaOfCustomerOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.strictObject({
		city: z.string().nonempty(),
		contactPerson:
			schemaOfContactPersonOfCustomerOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		country: z.string().nonempty(),
		name: z.string().nonempty(),
		postalCode: z.string().nonempty(),
		street: z.string().nonempty(),
		vatCode: z.string().nonempty(),
	});
