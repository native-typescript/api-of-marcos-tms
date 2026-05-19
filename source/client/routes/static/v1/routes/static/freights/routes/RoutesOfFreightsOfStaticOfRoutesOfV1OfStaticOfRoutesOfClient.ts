import {DynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	public dynamic(
		freightId: string,
	): DynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				this.baseUrl,
				[...this.parameters, freightId],
			);
		return dynamic;
	}
	private readonly parameters: readonly [];
	public readonly static: StaticOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
