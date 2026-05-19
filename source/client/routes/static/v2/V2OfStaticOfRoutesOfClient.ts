import {MethodsOfV2OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfV2OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class V2OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.methods = new MethodsOfV2OfStaticOfRoutesOfClient(baseUrl, parameters);
		this.routes = new RoutesOfV2OfStaticOfRoutesOfClient(baseUrl, parameters);
	}
	public readonly methods: MethodsOfV2OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfV2OfStaticOfRoutesOfClient;
}
