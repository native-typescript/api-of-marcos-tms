import {AccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./accounts/index.ts";
import {DocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./documents/index.ts";
import {DriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./drivers-documents/index.ts";
import {FeedbackOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./feedback/index.ts";
import {FreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./freights/index.ts";
import {OpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./opportunities/index.ts";
import {OrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./orders/index.ts";
import {VehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./vehicles/index.ts";
import {WebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./webhooks/index.ts";
export class StaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.orders = new OrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
			baseUrl,
			parameters,
		);
		this.opportunities =
			new OpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.freights = new FreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
			baseUrl,
			parameters,
		);
		this.vehicles = new VehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
			baseUrl,
			parameters,
		);
		this.feedback = new FeedbackOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
			baseUrl,
			parameters,
		);
		this.webhooks = new WebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
			baseUrl,
			parameters,
		);
		this.documents = new DocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
			baseUrl,
			parameters,
		);
		this.accounts = new AccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
			baseUrl,
			parameters,
		);
		this.driversDocuments =
			new DriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly accounts: AccountsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly documents: DocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly driversDocuments: DriversDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly feedback: FeedbackOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly freights: FreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly opportunities: OpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly orders: OrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly vehicles: VehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly webhooks: WebhooksOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
