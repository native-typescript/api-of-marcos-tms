import {MethodsOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class OrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.methods =
			new MethodsOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfOrdersOfStaticOfRoutesOfV2OfStaticOfRoutesOfClient;
}
