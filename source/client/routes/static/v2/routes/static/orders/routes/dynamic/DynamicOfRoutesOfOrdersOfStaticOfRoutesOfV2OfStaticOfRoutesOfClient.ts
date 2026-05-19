import {MethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class DynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly [orderId: string]) {
		this.methods =
			new MethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient;
}
