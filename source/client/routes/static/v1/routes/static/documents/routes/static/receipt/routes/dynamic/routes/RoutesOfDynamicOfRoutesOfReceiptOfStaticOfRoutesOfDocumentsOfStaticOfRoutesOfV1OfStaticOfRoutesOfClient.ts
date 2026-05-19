import {StaticOfRoutesOfDynamicOfRoutesOfReceiptOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfDynamicOfRoutesOfReceiptOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [documentId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfDynamicOfRoutesOfReceiptOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [documentId: string];
	public readonly static: StaticOfRoutesOfDynamicOfRoutesOfReceiptOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
