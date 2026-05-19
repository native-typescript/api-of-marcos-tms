import {StaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static = new StaticOfRoutesOfV1OfStaticOfRoutesOfClient(
			baseUrl,
			parameters,
		);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	public readonly static: StaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
