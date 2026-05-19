import {DynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	public dynamic(
		documentId: string,
	): DynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				this.baseUrl,
				[...this.parameters, documentId],
			);
		return dynamic;
	}
	private readonly parameters: readonly [];
	public readonly static: StaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
