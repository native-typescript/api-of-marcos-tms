import {handleUnexpectedStatusCode} from "../../../../../../../../../../handling-unexpected-status-code/index.ts";
import type {ResponseOfClient} from "../../../../../../../../../../response/index.ts";
import {
	type BodyOf200ResponseToGetOfMethodsOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
	schemaOfBodyOf200ResponseToGetOfMethodsOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
} from "./body-of-200-response-to-get/index.ts";
export class MethodsOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.url = url;
	}
	/**
	 * Pobierz transport
	 */
	public async get(
		apiKey: string,
	): Promise<
		ResponseOfClient<
			BodyOf200ResponseToGetOfMethodsOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
			200
		>
	> {
		const response: Response = await fetch(this.url, {
			headers: {"ApiKey": apiKey},
			method: `GET`,
		});
		switch (response.status) {
			case 200: {
				const bodyOfResponse: string = await response.text();
				const bodyOfResponseAsUint8Array: Uint8Array<ArrayBufferLike> =
					new TextEncoder().encode(bodyOfResponse);
				const validatedBodyOfResponse: BodyOf200ResponseToGetOfMethodsOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
					schemaOfBodyOf200ResponseToGetOfMethodsOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient.parse(
						bodyOfResponseAsUint8Array,
					);
				const responseOfClient: ResponseOfClient<
					BodyOf200ResponseToGetOfMethodsOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
					200
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
