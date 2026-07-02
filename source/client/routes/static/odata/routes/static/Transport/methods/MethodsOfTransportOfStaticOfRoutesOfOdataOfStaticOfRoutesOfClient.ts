import {handleUnexpectedStatusCode} from "../../../../../../../../handling-unexpected-status-code/index.ts";
import type {ResponseOfClient} from "../../../../../../../../response/index.ts";
import {
	schemaOfBodyOf200ResponseToGetOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
	type Transport,
} from "./body-of-200-response-to-get/index.ts";
import {
	type BodyOf200ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
	schemaOfBodyOf200ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
} from "./body-of-200-response-to-post/index.ts";
import {
	type BodyOf500ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
	schemaOfBodyOf500ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
} from "./body-of-500-response-to-post/index.ts";
import {
	type BodyOfRequestToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
	schemaOfBodyOfRequestToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
} from "./body-of-request-to-post/index.ts";
export class MethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.url = url;
	}
	/**
	 * Pobierz
	 *
	 * Umożliwia pobranie transportów. Endpoint umożliwia wykorzystanie odata query.
	 */
	public async get(
		apiKey: string,
		top: null | number,
	): Promise<ResponseOfClient<readonly Transport[], 200>> {
		const response: Response = await fetch(
			`${this.url}?${top === null ? `` : `$top=${top.toString(10)}`}`,
			{headers: {"ApiKey": apiKey}, method: `GET`},
		);
		switch (response.status) {
			case 200: {
				const bodyOfResponse: Uint8Array<ArrayBufferLike> =
					await response.bytes();
				const validatedBodyOfResponse: readonly Transport[] =
					schemaOfBodyOf200ResponseToGetOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient.parse(
						bodyOfResponse,
					);
				const responseOfClient: ResponseOfClient<readonly Transport[], 200> = {
					body: validatedBodyOfResponse,
					status: response.status,
				};
				return responseOfClient;
			}
			default: {
				handleUnexpectedStatusCode(response);
			}
		}
	}
	/**
	 * Dodaj transport całopojazdowy
	 *
	 * Umożliwia dodanie transportu całopojazdowego.
	 */
	public async post(
		apiKey: string,
		bodyOfRequest: BodyOfRequestToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
	): Promise<
		| ResponseOfClient<
				BodyOf200ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
				200
		  >
		| ResponseOfClient<
				BodyOf500ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
				500
		  >
	> {
		const validatedBodyOfRequest: Uint8Array<ArrayBufferLike> =
			schemaOfBodyOfRequestToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient.parse(
				bodyOfRequest,
			);
		const response: Response = await fetch(this.url, {
			body: validatedBodyOfRequest,
			headers: {"ApiKey": apiKey, "Content-Type": `application/json`},
			method: `POST`,
		});
		switch (response.status) {
			case 200: {
				const bodyOfResponse: Uint8Array<ArrayBufferLike> =
					await response.bytes();
				const validatedBodyOfResponse: BodyOf200ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
					schemaOfBodyOf200ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient.parse(
						bodyOfResponse,
					);
				const responseOfClient: ResponseOfClient<
					BodyOf200ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
					200
				> = {body: validatedBodyOfResponse, status: response.status};
				return responseOfClient;
			}
			case 500: {
				const bodyOfResponse: Uint8Array<ArrayBufferLike> =
					await response.bytes();
				const validatedBodyOfResponse: BodyOf500ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
					schemaOfBodyOf500ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient.parse(
						bodyOfResponse,
					);
				const responseOfClient: ResponseOfClient<
					BodyOf500ResponseToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
					500
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
