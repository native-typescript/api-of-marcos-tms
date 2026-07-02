import {z} from "zod";
export const schemaOfBodyOf401ResponseToGetOfMethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
	z
		.instanceof(Uint8Array)
		.refine(function checkIfBodyIsEmpty(body: Uint8Array): boolean {
			return body.length === 0;
		}, `Body of 401 response to GET of methods of Kinds of static of routes of odata of static of routes of client should be an empty Uint8Array`)
		.transform<null>(function makeNull(body: Uint8Array): null {
			return null;
		});
