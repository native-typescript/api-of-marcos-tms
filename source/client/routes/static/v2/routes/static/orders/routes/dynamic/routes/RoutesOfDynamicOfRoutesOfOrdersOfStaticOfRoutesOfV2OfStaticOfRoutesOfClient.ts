import {StaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly [orderId: string]) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [orderId: string];
	public readonly static: StaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient;
}
