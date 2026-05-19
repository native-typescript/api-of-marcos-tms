import {MethodsOfFileOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfFileOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class FileOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.methods =
			new MethodsOfFileOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfFileOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfFileOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfFileOfStaticOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
