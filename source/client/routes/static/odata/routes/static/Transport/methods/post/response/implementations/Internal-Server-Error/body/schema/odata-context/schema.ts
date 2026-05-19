import {z} from "zod";
export const schema = z.templateLiteral([
	z.string(),
	z.literal(`/odata/$metadata#Edm.String`),
]);
