import {z} from "zod";
export const schemaOfBodyOf200ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
	z
		.instanceof(Uint8Array)
		.transform<string>(function parseBody(body: Uint8Array): string {
			const parsedBody: string = new TextDecoder(`utf-8`, {
				fatal: true,
				ignoreBOM: true,
			}).decode(body);
			return parsedBody;
		})
		.transform<unknown>(function parseJson(parsedBody: string): unknown {
			const parsedJson: unknown = JSON.parse(parsedBody);
			return parsedJson;
		})
		.pipe(
			z
				.strictObject({
					"@odata.context": z.templateLiteral([
						z.string(),
						z.literal(`/odata/$metadata#Edm.Int32`),
					]),
					"value": z.int().positive(),
				})
				.transform(function extractValue(body) {
					return body.value;
				}),
		);
