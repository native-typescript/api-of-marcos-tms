export class MethodsOfUpsertOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	/**
	 * Used for creating and updating order information.
	 * Uniqueness checked by orderNumber if the carrier information changed VATCode the unique link will be regenerated.
	Always returns the link to the documents upload site. */
	public async post(apiKey: string, body: unknown): Promise<unknown> {
		const bodyOfRequest = body;
		const serializedBodyOfRequest = JSON.stringify(bodyOfRequest, null, `	`);
		const response: Response = await fetch(`${this.baseUrl}/v1/orders/upsert`, {
			body: serializedBodyOfRequest,
			headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
			method: `POST`,
		});
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
}
