import {MethodsOfResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class ResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [subscriptionId: string],
	) {
		this.methods =
			new MethodsOfResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
