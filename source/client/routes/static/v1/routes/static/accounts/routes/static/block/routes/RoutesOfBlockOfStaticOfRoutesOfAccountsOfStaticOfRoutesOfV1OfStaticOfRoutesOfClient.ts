import {StaticOfRoutesOfBlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfBlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfBlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	public readonly static: StaticOfRoutesOfBlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
