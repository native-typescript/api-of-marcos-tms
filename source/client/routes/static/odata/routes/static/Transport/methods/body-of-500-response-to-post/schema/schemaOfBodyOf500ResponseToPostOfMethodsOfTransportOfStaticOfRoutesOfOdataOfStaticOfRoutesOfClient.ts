import {z} from "zod";
export const schemaOfBodyOf500ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
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
						z.literal(`/odata/$metadata#Edm.String`),
					]),
					"value": z.union([
						z.literal(
							`Brak możliwości ponownego pobrania zaimportowanego transportu`,
						),
						z.literal(
							`Wystąpił błąd podczas dodawania transportu!
Brak rodzaju transportu.`,
						),
					]),
				})
				.transform(function extractValue(body) {
					return body.value;
				}),
		);
