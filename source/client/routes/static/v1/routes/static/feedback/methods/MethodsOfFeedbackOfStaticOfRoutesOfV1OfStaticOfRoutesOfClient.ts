export class MethodsOfFeedbackOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	/**
	 * This endpoint is used to provide feedback about good or bad freight, orders or another document conversion.
	 * We recommend implementing this for the TMS, ERP providers who have more clients to manage errors.
	After we receive feedback, we process it and plan the improvements. */
	public async post(apiKey: string, body: unknown): Promise<unknown> {
		const bodyOfRequest = body;
		const serializedBodyOfRequest = JSON.stringify(bodyOfRequest, null, `	`);
		const response: Response = await fetch(`${this.baseUrl}/v1/feedback`, {
			body: serializedBodyOfRequest,
			headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
			method: `POST`,
		});
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
}
