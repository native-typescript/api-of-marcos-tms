import {z} from "zod";
export const schemaOfDocumentSubmissionMethodOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.union([
		z.literal(`Email`).transform(function makeObject() {
			return `email` as const;
		}),
		z.literal(`OriginalByPost`).transform(function makeObject() {
			return `originalByPost` as const;
		}),
		z.literal(`PortalUpload`).transform(function makeObject() {
			return `portalUpload` as const;
		}),
	]);
