import {appVersion} from "./AppVersion/module.ts";
import {handshake} from "./Handshake/module.ts";
import {odata} from "./odata/module.ts";
export class Static {
	public constructor(url: string) {
		this.appVersion = new appVersion.AppVersion(`${url}AppVersion`);
		this.handshake = new handshake.Handshake(`${url}Handshake`);
		this.odata = new odata.Odata(`${url}odata`);
	}
	public readonly appVersion: appVersion.AppVersion;
	public readonly handshake: handshake.Handshake;
	public readonly odata: odata.Odata;
}
