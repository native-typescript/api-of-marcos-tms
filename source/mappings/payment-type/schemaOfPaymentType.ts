import {z} from "zod";
export const schemaOfPaymentType = z.union([
	z.literal(`Card`),
	z.literal(`BankTransfer`),
	z.literal(`Cash`),
]);
