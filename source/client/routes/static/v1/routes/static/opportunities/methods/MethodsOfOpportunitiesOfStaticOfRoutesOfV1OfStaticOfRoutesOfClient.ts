import {handleUnexpectedStatusCode} from "../../../../../../../../handling-unexpected-status-code/index.ts";
import type {ResponseOfClient} from "../../../../../../../../response/index.ts";
import type {BodyOfRequestToPostOfMethodsOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./body-of-request-to-post/index.ts";
export class MethodsOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	/**
	Endpoint to provide text base input for freight conversion. */
	public async post(
		body: BodyOfRequestToPostOfMethodsOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
	): Promise<ResponseOfClient<string, 503>> {
		const bodyOfRequest = {
			file:
				body.file === null ?
					null
				:	body.file.toBase64({alphabet: `base64`, omitPadding: false}),
			fileName: body.fileName,
			fileType: body.fileType,
			metadata: body.metadata,
			type: body.type,
		} as const;
		const serializedBodyOfRequest = JSON.stringify(bodyOfRequest, null, `	`);
		const response: Response = await fetch(`${this.baseUrl}/v1/opportunities`, {
			body: serializedBodyOfRequest,
			headers: {"Content-Type": `application/json`},
			method: `POST`,
		});
		switch (response.status) {
			case 503: {
				const bodyOfResponse: string = await response.text();
				const bodyOfResponseOfClient: string = bodyOfResponse;
				const responseOfClient: ResponseOfClient<string, 503> = {
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
