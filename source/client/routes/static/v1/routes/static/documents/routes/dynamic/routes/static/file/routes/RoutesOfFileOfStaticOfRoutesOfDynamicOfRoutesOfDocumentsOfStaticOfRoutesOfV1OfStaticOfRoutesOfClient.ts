import {StaticOfRoutesOfFileOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfFileOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [documentId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfFileOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [documentId: string];
	public readonly static: StaticOfRoutesOfFileOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
