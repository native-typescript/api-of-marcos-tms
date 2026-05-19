import {DynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	public dynamic(
		orderId: string,
	): DynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient(
				this.baseUrl,
				[...this.parameters, orderId],
			);
		return dynamic;
	}
	private readonly parameters: readonly [];
	public readonly static: StaticOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient;
}
