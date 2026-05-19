export class MethodsOfContentOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [orderId: string, documentId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	/**
	Endpoint to download specific document */
	public async get(apiKey: string): Promise<unknown> {
		const response: Response = await fetch(
			`${this.baseUrl}/v1/orders/${this.parameters[0]}/documents/${this.parameters[1]}/content`,
			{headers: {"X-Api-Key": apiKey}, method: `GET`},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
	private readonly parameters: readonly [orderId: string, documentId: string];
}
