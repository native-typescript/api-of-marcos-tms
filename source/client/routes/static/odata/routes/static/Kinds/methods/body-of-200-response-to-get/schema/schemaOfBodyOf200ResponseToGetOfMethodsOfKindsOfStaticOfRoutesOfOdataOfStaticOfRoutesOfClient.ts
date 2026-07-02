import type {Kind} from "../Kind/index.ts";
import {z} from "zod";
export const schemaOfBodyOf200ResponseToGetOfMethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
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
						z.literal(`/odata/$metadata#Kinds`),
					]),
					"value": z.array(
						z
							.strictObject({
								/**
								 * Archiwalny
								 */
								"Archive": z.literal(false),
								/**
								 * Id
								 */
								"Id": z.int().positive(),
								/**
								 * Nazwa
								 */
								"Name": z.string().nonempty(),
								"ShipmentKindId": z.union([z.int().positive(), z.null()]),
								/**
								 * Nazwa skrócona
								 */
								"ShortName": z.string().nonempty(),
								/**
								 * Typ rodzaju
								 */
								"Type": z.union([z.literal(4), z.literal(5), z.literal(7)]),
							})
							.transform<Kind>(function parseKind(kind): Kind {
								const parsedKind: Kind = {
									/**
									 * Archiwalny
									 */
									archive: kind.Archive,
									/**
									 * Id
									 */
									id: kind.Id,
									/**
									 * Nazwa
									 */
									name: kind.Name,
									shipmentKindId: kind.ShipmentKindId,
									/**
									 * Nazwa skrócona
									 */
									shortName: kind.ShortName,
									/**
									 * Typ rodzaju
									 */
									type: kind.Type,
								};
								return parsedKind;
							}),
					),
				})
				.transform(function extractValue(body) {
					return body.value;
				}),
		);
