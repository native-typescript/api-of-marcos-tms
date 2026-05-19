import {MethodsOfShareOfStaticOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfShareOfStaticOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class ShareOfStaticOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.methods =
			new MethodsOfShareOfStaticOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfShareOfStaticOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfShareOfStaticOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfShareOfStaticOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
