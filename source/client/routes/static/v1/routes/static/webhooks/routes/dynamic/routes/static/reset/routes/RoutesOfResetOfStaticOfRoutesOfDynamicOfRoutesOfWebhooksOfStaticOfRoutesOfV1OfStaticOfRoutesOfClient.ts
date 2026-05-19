import {StaticOfRoutesOfResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [subscriptionId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [subscriptionId: string];
	public readonly static: StaticOfRoutesOfResetOfStaticOfRoutesOfDynamicOfRoutesOfWebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
