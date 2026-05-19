import {StaticOfRoutesOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [freightId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [freightId: string];
	public readonly static: StaticOfRoutesOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
