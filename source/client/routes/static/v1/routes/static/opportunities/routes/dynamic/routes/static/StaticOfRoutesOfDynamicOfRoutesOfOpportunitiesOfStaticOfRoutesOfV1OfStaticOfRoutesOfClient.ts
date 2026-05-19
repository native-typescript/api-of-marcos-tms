import {CustomOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./custom/index.ts";
import {DefaultOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./default/index.ts";
export class StaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [opportunityId: string],
	) {
		this.custom =
			new CustomOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.default =
			new DefaultOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly custom: CustomOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly default: DefaultOfStaticOfRoutesOfDynamicOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
