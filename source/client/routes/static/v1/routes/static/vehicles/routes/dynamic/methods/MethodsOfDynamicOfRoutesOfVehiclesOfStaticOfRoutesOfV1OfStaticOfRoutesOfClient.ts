export class MethodsOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [vehicleId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	/**
	 */
	public async delete(apiKey: string, body: unknown): Promise<unknown> {
		const bodyOfRequest = body;
		const serializedBodyOfRequest = JSON.stringify(bodyOfRequest, null, `	`);
		const response: Response = await fetch(
			`${this.baseUrl}/v1/vehicles/${this.parameters[0]}`,
			{
				body: serializedBodyOfRequest,
				headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
				method: `DELETE`,
			},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
	/**
	 */
	public async get(apiKey: string): Promise<unknown> {
		const response: Response = await fetch(
			`${this.baseUrl}/v1/vehicles/${this.parameters[0]}`,
			{headers: {"X-Api-Key": apiKey}, method: `GET`},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
	private readonly parameters: readonly [vehicleId: string];
	/**
	 */
	public async put(apiKey: string, body: unknown): Promise<unknown> {
		const bodyOfRequest = body;
		const serializedBodyOfRequest = JSON.stringify(bodyOfRequest, null, `	`);
		const response: Response = await fetch(
			`${this.baseUrl}/v1/vehicles/${this.parameters[0]}`,
			{
				body: serializedBodyOfRequest,
				headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
				method: `PUT`,
			},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
}
