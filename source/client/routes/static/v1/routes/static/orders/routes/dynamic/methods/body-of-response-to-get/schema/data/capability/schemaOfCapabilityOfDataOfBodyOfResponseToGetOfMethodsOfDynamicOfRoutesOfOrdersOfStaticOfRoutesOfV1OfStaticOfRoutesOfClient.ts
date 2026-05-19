import {z} from "zod";
export const schemaOfCapabilityOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.union([
		z.literal(`PalletsExchange`).transform(function makeObject() {
			return `palletsExchange` as const;
		}),
		z.literal(`SecureParking`).transform(function makeObject() {
			return `secureParking` as const;
		}),
	]);
