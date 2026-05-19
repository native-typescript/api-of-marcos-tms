export class MethodsOfCustomOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [opportunityId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	/**
	 */
	public async get(apiKey: string): Promise<unknown> {
		const response: Response = await fetch(
			`${this.baseUrl}/v1/opportunities/${this.parameters[0]}/custom`,
			{headers: {"X-Api-Key": apiKey}, method: `GET`},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
	private readonly parameters: readonly [opportunityId: string];
}
