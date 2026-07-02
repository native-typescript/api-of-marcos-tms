import {handleUnexpectedStatusCode} from "../../../../../../../../handling-unexpected-status-code/index.ts";
import type {ResponseOfClient} from "../../../../../../../../response/index.ts";
import {
	type Kind,
	schemaOfBodyOf200ResponseToGetOfMethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
} from "./body-of-200-response-to-get/index.ts";
import {
	type BodyOf401ResponseToGetOfMethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
	schemaOfBodyOf401ResponseToGetOfMethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
} from "./body-of-401-response-to-get/index.ts";
export class MethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.url = url;
	}
	/**
	 * Pobierz rodzaj dla transportu
	 */
	public async get(
		apiKey: string,
		top: null | number,
	): Promise<
		| ResponseOfClient<
				BodyOf401ResponseToGetOfMethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
				401
		  >
		| ResponseOfClient<readonly Kind[], 200>
	> {
		const response: Response = await fetch(
			`${this.url}?${top === null ? `` : `$top=${top.toString(10)}`}`,
			{headers: {"ApiKey": apiKey}, method: `GET`},
		);
		switch (response.status) {
			case 200: {
				const bodyOfResponse: Uint8Array<ArrayBufferLike> =
					await response.bytes();
				const validatedBodyOfResponse: readonly Kind[] =
					schemaOfBodyOf200ResponseToGetOfMethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient.parse(
						bodyOfResponse,
					);
				const responseOfClient: ResponseOfClient<readonly Kind[], 200> = {
					body: validatedBodyOfResponse,
					status: response.status,
				};
				return responseOfClient;
			}
			case 401: {
				const bodyOfResponse: Uint8Array<ArrayBufferLike> =
					await response.bytes();
				const validatedBodyOfResponse: BodyOf401ResponseToGetOfMethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
					schemaOfBodyOf401ResponseToGetOfMethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient.parse(
						bodyOfResponse,
					);
				const responseOfClient: ResponseOfClient<
					BodyOf401ResponseToGetOfMethodsOfKindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
					401
				> = {body: validatedBodyOfResponse, status: response.status};
				return responseOfClient;
			}
			default: {
				handleUnexpectedStatusCode(response);
			}
		}
	}
	public readonly url: string;
}
