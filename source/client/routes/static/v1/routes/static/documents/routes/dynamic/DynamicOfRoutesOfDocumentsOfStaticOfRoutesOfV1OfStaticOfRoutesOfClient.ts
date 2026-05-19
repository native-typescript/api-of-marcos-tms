import {MethodsOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class DynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [documentId: string],
	) {
		this.methods =
			new MethodsOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
