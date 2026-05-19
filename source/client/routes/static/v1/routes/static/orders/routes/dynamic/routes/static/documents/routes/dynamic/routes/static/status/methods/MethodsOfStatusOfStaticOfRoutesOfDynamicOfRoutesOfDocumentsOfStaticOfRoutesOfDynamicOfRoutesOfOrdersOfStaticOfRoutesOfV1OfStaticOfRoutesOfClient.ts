export class MethodsOfStatusOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [orderId: string, documentId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [orderId: string, documentId: string];
	/**
	 */
	public async post(apiKey: string, body: unknown): Promise<unknown> {
		const bodyOfRequest = body;
		const serializedBodyOfRequest = JSON.stringify(bodyOfRequest, null, `	`);
		const response: Response = await fetch(
			`${this.baseUrl}/v1/orders/${this.parameters[0]}/documents/${this.parameters[1]}/status`,
			{
				body: serializedBodyOfRequest,
				headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
				method: `POST`,
			},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
}
