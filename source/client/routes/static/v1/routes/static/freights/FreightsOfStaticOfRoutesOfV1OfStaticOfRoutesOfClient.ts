import {MethodsOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class FreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.methods =
			new MethodsOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
