import {cancel} from "./Cancel/module.ts";
import {removeTruckTrailerAndDrivers} from "./RemoveTruckTrailerAndDrivers/module.ts";
import {unlock} from "./Unlock/module.ts";
export class Static {
	public constructor(url: string) {
		this.cancel = new cancel.Cancel(url);
		this.removeTruckTrailerAndDrivers =
			new removeTruckTrailerAndDrivers.RemoveTruckTrailerAndDrivers(url);
		this.unlock = new unlock.Unlock(url);
	}
	public readonly cancel: cancel.Cancel;
	public readonly removeTruckTrailerAndDrivers: removeTruckTrailerAndDrivers.RemoveTruckTrailerAndDrivers;
	public readonly unlock: unlock.Unlock;
}
