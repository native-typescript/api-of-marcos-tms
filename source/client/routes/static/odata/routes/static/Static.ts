import {acceptTransport} from "./AcceptTransport/module.ts";
import {attachment} from "./Attachment/module.ts";
import {attachmentFile} from "./AttachmentFile/module.ts";
import {contractors} from "./Contractors/module.ts";
import {customerPerson} from "./CustomerPerson/module.ts";
import {fileExtensions} from "./FileExtensions/module.ts";
import {getAddressHistory} from "./GetAddressHistory/module.ts";
import {kinds} from "./Kinds/module.ts";
import {loadsForPlaces} from "./LoadsForPlaces/module.ts";
import {packagingTurnover} from "./PackagingTurnover/module.ts";
import {person} from "./Person/module.ts";
import {rejectTransport} from "./RejectTransport/module.ts";
import {shipment} from "./Shipment/module.ts";
import {shipmentView} from "./ShipmentView/module.ts";
import {transport} from "./Transport/module.ts";
import {transportShipment} from "./TransportShipment/module.ts";
import {user} from "./User/module.ts";
import {vehicles} from "./Vehicles/module.ts";
export class Static {
	public constructor(url: string) {
		this.acceptTransport = new acceptTransport.AcceptTransport(
			`${url}AcceptTransport`,
		);
		this.attachment = new attachment.Attachment(`${url}Attachment`);
		this.attachmentFile = new attachmentFile.AttachmentFile(
			`${url}AttachmentFile`,
		);
		this.contractors = new contractors.Contractors(`${url}Contractors`);
		this.customerPerson = new customerPerson.CustomerPerson(
			`${url}CustomerPerson`,
		);
		this.fileExtensions = new fileExtensions.FileExtensions(
			`${url}FileExtensions`,
		);
		this.getAddressHistory = new getAddressHistory.GetAddressHistory(
			`${url}GetAddressHistory`,
		);
		this.kinds = new kinds.Kinds(`${url}Kinds`);
		this.loadsForPlaces = new loadsForPlaces.LoadsForPlaces(
			`${url}LoadsForPlaces`,
		);
		this.packagingTurnover = new packagingTurnover.PackagingTurnover(
			`${url}PackagingTurnover`,
		);
		this.person = new person.Person(`${url}Person`);
		this.rejectTransport = new rejectTransport.RejectTransport(
			`${url}RejectTransport`,
		);
		this.shipment = new shipment.Shipment(`${url}Shipment`);
		this.shipmentView = new shipmentView.ShipmentView(`${url}ShipmentView`);
		this.transport = new transport.Transport(`${url}Transport`);
		this.transportShipment = new transportShipment.TransportShipment(
			`${url}TransportShipment`,
		);
		this.user = new user.User(`${url}User`);
		this.vehicles = new vehicles.Vehicles(`${url}Vehicles`);
	}
	public readonly acceptTransport: acceptTransport.AcceptTransport;
	public readonly attachment: attachment.Attachment;
	public readonly attachmentFile: attachmentFile.AttachmentFile;
	public readonly contractors: contractors.Contractors;
	public readonly customerPerson: customerPerson.CustomerPerson;
	public readonly fileExtensions: fileExtensions.FileExtensions;
	public readonly getAddressHistory: getAddressHistory.GetAddressHistory;
	public readonly kinds: kinds.Kinds;
	public readonly loadsForPlaces: loadsForPlaces.LoadsForPlaces;
	public readonly packagingTurnover: packagingTurnover.PackagingTurnover;
	public readonly person: person.Person;
	public readonly rejectTransport: rejectTransport.RejectTransport;
	public readonly shipment: shipment.Shipment;
	public readonly shipmentView: shipmentView.ShipmentView;
	public readonly transport: transport.Transport;
	public readonly transportShipment: transportShipment.TransportShipment;
	public readonly user: user.User;
	public readonly vehicles: vehicles.Vehicles;
}
