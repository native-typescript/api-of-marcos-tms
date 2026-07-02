import {AcceptTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./AcceptTransport/index.ts";
import {AttachmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./Attachment/index.ts";
import {AttachmentFileOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./AttachmentFile/index.ts";
import {ContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./Contractors/index.ts";
import {CustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./CustomerPerson/index.ts";
import {FileExtensionsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./FileExtensions/index.ts";
import {GetAddressHistoryOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./GetAddressHistory/index.ts";
import {KindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./Kinds/index.ts";
import {LoadsForPlacesOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./LoadsForPlaces/index.ts";
import {PackagingTurnoverOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./PackagingTurnover/index.ts";
import {PersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./Person/index.ts";
import {RejectTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./RejectTransport/index.ts";
import {ShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./Shipment/index.ts";
import {ShipmentViewOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./ShipmentView/index.ts";
import {TransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./Transport/index.ts";
import {TransportShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./TransportShipment/index.ts";
import {UserOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./User/index.ts";
import {VehiclesOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./Vehicles/index.ts";
export class StaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.acceptTransport =
			new AcceptTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}AcceptTransport`,
			);
		this.attachment =
			new AttachmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}Attachment`,
			);
		this.attachmentFile =
			new AttachmentFileOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}AttachmentFile`,
			);
		this.contractors =
			new ContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}Contractors`,
			);
		this.customerPerson =
			new CustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}CustomerPerson`,
			);
		this.fileExtensions =
			new FileExtensionsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}FileExtensions`,
			);
		this.getAddressHistory =
			new GetAddressHistoryOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}GetAddressHistory`,
			);
		this.kinds = new KindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
			`${url}Kinds`,
		);
		this.loadsForPlaces =
			new LoadsForPlacesOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}LoadsForPlaces`,
			);
		this.packagingTurnover =
			new PackagingTurnoverOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}PackagingTurnover`,
			);
		this.person = new PersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
			`${url}Person`,
		);
		this.rejectTransport =
			new RejectTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}RejectTransport`,
			);
		this.shipment = new ShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
			`${url}Shipment`,
		);
		this.shipmentView =
			new ShipmentViewOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}ShipmentView`,
			);
		this.transport =
			new TransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}Transport`,
			);
		this.transportShipment =
			new TransportShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${url}TransportShipment`,
			);
		this.user = new UserOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
			`${url}User`,
		);
		this.vehicles = new VehiclesOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
			`${url}Vehicles`,
		);
	}
	public readonly acceptTransport: AcceptTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly attachment: AttachmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly attachmentFile: AttachmentFileOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly contractors: ContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly customerPerson: CustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly fileExtensions: FileExtensionsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly getAddressHistory: GetAddressHistoryOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly kinds: KindsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly loadsForPlaces: LoadsForPlacesOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly packagingTurnover: PackagingTurnoverOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly person: PersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly rejectTransport: RejectTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly shipment: ShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly shipmentView: ShipmentViewOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly transport: TransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly transportShipment: TransportShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly user: UserOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly vehicles: VehiclesOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
}
