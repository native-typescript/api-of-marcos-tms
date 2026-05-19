import {MethodsOfInsuranceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfInsuranceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class InsuranceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.methods =
			new MethodsOfInsuranceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfInsuranceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfInsuranceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfInsuranceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
