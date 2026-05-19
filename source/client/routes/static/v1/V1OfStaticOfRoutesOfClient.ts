import {MethodsOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class V1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.methods = new MethodsOfV1OfStaticOfRoutesOfClient(baseUrl, parameters);
		this.routes = new RoutesOfV1OfStaticOfRoutesOfClient(baseUrl, parameters);
	}
	public readonly methods: MethodsOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfV1OfStaticOfRoutesOfClient;
}
