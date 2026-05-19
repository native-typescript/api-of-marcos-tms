import {MethodsOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class DocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly [orderId: string]) {
		this.methods =
			new MethodsOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
