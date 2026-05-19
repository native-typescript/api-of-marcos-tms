import {DynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	public dynamic(
		orderId: string,
	): DynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				this.baseUrl,
				[...this.parameters, orderId],
			);
		return dynamic;
	}
	private readonly parameters: readonly [];
	public readonly static: StaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
