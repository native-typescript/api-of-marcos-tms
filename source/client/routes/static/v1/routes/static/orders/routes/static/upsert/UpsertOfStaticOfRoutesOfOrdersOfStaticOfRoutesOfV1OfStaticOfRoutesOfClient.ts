import {MethodsOfUpsertOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfUpsertOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class UpsertOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.methods =
			new MethodsOfUpsertOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfUpsertOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfUpsertOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfUpsertOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
