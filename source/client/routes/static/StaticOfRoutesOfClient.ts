import {V1OfStaticOfRoutesOfClient} from "./v1/index.ts";
import {V2OfStaticOfRoutesOfClient} from "./v2/index.ts";
export class StaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.v1 = new V1OfStaticOfRoutesOfClient(baseUrl, parameters);
		this.v2 = new V2OfStaticOfRoutesOfClient(baseUrl, parameters);
	}
	public readonly v1: V1OfStaticOfRoutesOfClient;
	public readonly v2: V2OfStaticOfRoutesOfClient;
}
