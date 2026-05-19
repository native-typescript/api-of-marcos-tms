import {z} from "zod";
export const schema = z.templateLiteral([
	z.literal(`+`),
	z.string().nonempty(),
]);
