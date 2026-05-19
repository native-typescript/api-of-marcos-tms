import {z} from "zod";
export const schema = z
	.strictObject({
		"@odata.context": z.templateLiteral([
			z.string(),
			z.literal(`/odata/$metadata#Edm.Int32`),
		]),
		"value": z.int().positive(),
	})
	.transform(function extractValue(body) {
		return body.value;
	});
