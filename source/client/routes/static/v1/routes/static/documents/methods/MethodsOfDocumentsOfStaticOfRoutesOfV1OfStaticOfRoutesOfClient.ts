import type {BodyOfRequestToPostOfMethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./body-of-request-to-post/index.ts";
export class MethodsOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	public async post(
		body: BodyOfRequestToPostOfMethodsOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		apiKey: string,
	): Promise<unknown> {
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
		const response: Response = await fetch(`${this.baseUrl}/v1/documents`, {
			body: serializedBodyOfRequest,
			headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
			method: `POST`,
		});
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
}
