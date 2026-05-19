import {MethodsOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class DynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [freightId: string],
	) {
		this.methods =
			new MethodsOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
