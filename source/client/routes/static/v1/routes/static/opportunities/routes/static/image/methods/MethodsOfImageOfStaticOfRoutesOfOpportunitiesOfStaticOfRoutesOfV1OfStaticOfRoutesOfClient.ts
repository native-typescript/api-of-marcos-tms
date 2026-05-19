export class MethodsOfImageOfStaticOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	/**
	Depreceated endpoint, use /opportunities/file endpoint for images processing. */
	public async post(apiKey: string, body: unknown): Promise<unknown> {
		const bodyOfRequest = body;
		const serializedBodyOfRequest = JSON.stringify(bodyOfRequest, null, `	`);
		const response: Response = await fetch(
			`${this.baseUrl}/v1/opportunities/image`,
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
