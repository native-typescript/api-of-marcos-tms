import {NotifyOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./notify/index.ts";
import {ResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./reset/index.ts";
export class StaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [subscriptionId: string],
	) {
		this.reset =
			new ResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.notify =
			new NotifyOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly notify: NotifyOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly reset: ResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
