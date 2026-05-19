import {DynamicOfRoutesOfDriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfRoutesOfDriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfDriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfDriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	public dynamic(
		documentId: string,
	): DynamicOfRoutesOfDriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfDriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfDriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				this.baseUrl,
				[...this.parameters, documentId],
			);
		return dynamic;
	}
	private readonly parameters: readonly [];
	public readonly static: StaticOfRoutesOfDriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
