import {StaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static = new StaticOfRoutesOfClient(baseUrl, parameters);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	public readonly static: StaticOfRoutesOfClient;
}
