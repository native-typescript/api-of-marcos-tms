export class MethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly [orderId: string]) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	/**
	 * Used to retrieve the information about the extracted data from the document.
	If it returns 404 Not Found, this means that the document has not yet been processed. */
	public async get(apiKey: string): Promise<unknown> {
		const response: Response = await fetch(
			`${this.baseUrl}/v2/orders/${this.parameters[0]}`,
			{headers: {"X-Api-Key": apiKey}, method: `GET`},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
	private readonly parameters: readonly [orderId: string];
}
