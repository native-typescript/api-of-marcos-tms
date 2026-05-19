import {MethodsOfStatusOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfStatusOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class StatusOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [orderId: string, documentId: string],
	) {
		this.methods =
			new MethodsOfStatusOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfStatusOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfStatusOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfStatusOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
