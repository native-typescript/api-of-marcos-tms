export class MethodsOfDefaultOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [opportunityId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	/**
	These endpoints add default data on top of raw data. Extending loading, unloading location times, automatically calculating transit time, setting default trailer types, and other things. This endpoint could be used when a company wants to process freight quotes and, after the response, upload them to SpotGo as freight or import them into a freight platform. */
	public async get(apiKey: string): Promise<unknown> {
		const response: Response = await fetch(
			`${this.baseUrl}/v1/opportunities/${this.parameters[0]}/default`,
			{headers: {"X-Api-Key": apiKey}, method: `GET`},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
	private readonly parameters: readonly [opportunityId: string];
}
