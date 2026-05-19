import {MethodsOfBlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfBlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class BlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.methods =
			new MethodsOfBlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfBlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfBlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfBlockOfStaticOfRoutesOfAccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
