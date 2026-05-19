import {CmrOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./cmr/index.ts";
import {InsuranceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./insurance/index.ts";
import {InvoiceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./invoice/index.ts";
import {ReceiptOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./receipt/index.ts";
export class StaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.invoice =
			new InvoiceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.receipt =
			new ReceiptOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.cmr =
			new CmrOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.insurance =
			new InsuranceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly cmr: CmrOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly insurance: InsuranceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly invoice: InvoiceOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly receipt: ReceiptOfStaticOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
