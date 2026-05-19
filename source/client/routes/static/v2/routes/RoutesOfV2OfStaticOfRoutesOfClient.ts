import {StaticOfRoutesOfV2OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfV2OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static = new StaticOfRoutesOfV2OfStaticOfRoutesOfClient(
			baseUrl,
			parameters,
		);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	public readonly static: StaticOfRoutesOfV2OfStaticOfRoutesOfClient;
}
