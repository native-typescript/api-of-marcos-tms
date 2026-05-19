import {StaticOfRoutesOfCustomOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfCustomOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [opportunityId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfCustomOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [opportunityId: string];
	public readonly static: StaticOfRoutesOfCustomOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
