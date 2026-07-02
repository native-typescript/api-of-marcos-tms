import {AppVersionOfStaticOfRoutesOfClient} from "./AppVersion/index.ts";
import {HandshakeOfStaticOfRoutesOfClient} from "./Handshake/index.ts";
import {OdataOfStaticOfRoutesOfClient} from "./odata/index.ts";
export class StaticOfRoutesOfClient {
	public constructor(url: string) {
		this.appVersion = new AppVersionOfStaticOfRoutesOfClient(
			`${url}AppVersion`,
		);
		this.handshake = new HandshakeOfStaticOfRoutesOfClient(`${url}Handshake`);
		this.odata = new OdataOfStaticOfRoutesOfClient(`${url}odata`);
	}
	public readonly appVersion: AppVersionOfStaticOfRoutesOfClient;
	public readonly handshake: HandshakeOfStaticOfRoutesOfClient;
	public readonly odata: OdataOfStaticOfRoutesOfClient;
}
