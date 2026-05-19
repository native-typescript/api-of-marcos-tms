export class MethodsOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	/**
	 */
	public async get(apiKey: string): Promise<unknown> {
		const response: Response = await fetch(`${this.baseUrl}/v1/vehicles`, {
			headers: {"X-Api-Key": apiKey},
			method: `GET`,
		});
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
	private readonly parameters: readonly [];
	/**
	 */
	public async post(apiKey: string, body: unknown): Promise<unknown> {
		const bodyOfRequest = body;
		const serializedBodyOfRequest = JSON.stringify(bodyOfRequest, null, `	`);
		const response: Response = await fetch(`${this.baseUrl}/v1/vehicles`, {
			body: serializedBodyOfRequest,
			headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
			method: `POST`,
		});
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
}
