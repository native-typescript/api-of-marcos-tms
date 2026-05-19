import {handleUnexpectedStatusCode} from "../../../../../../../../handling-unexpected-status-code/index.ts";
import type {ResponseOfClient} from "../../../../../../../../response/index.ts";
import type {BodyOfRequestToPostOfMethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./body-of-request-to-post/index.ts";
import {
	type BodyOfResponseToPostOfMethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
	schemaOfBodyOfResponseToPostOfMethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
} from "./body-of-response-to-post/index.ts";
export class MethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	/**
	 * Start order processing
	 */
	public async post(
		apiKey: string,
		body: BodyOfRequestToPostOfMethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
	): Promise<
		| ResponseOfClient<
				BodyOfResponseToPostOfMethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
				200
		  >
		| ResponseOfClient<string, 401>
	> {
		const bodyOfRequest = body;
		const serializedBodyOfRequest = JSON.stringify(bodyOfRequest, null, `	`);
		const response: Response = await fetch(`${this.baseUrl}/v1/orders`, {
			body: JSON.stringify(
				{
					file: body.file.toBase64({alphabet: `base64`, omitPadding: false}),
					fileName: body.fileName,
					type: body.type,
				},
				null,
				`	`,
			),
			headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
			method: `POST`,
		});
		switch (response.status) {
			case 200: {
				const bodyOfResponse: unknown = await response.json();
				const bodyOfResponseOfClient: BodyOfResponseToPostOfMethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
					schemaOfBodyOfResponseToPostOfMethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient.parse(
						bodyOfResponse,
					);
				const responseOfClient: ResponseOfClient<
					BodyOfResponseToPostOfMethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
					200
				> = {body: bodyOfResponseOfClient, status: response.status};
				return responseOfClient;
			}
			case 401: {
				const bodyOfResponse: string = await response.text();
				const bodyOfResponseOfClient: string = bodyOfResponse;
				const responseOfClient: ResponseOfClient<string, 401> = {
					body: bodyOfResponseOfClient,
					status: response.status,
				};
				return responseOfClient;
			}
			default: {
				handleUnexpectedStatusCode(response);
			}
		}
	}
}
