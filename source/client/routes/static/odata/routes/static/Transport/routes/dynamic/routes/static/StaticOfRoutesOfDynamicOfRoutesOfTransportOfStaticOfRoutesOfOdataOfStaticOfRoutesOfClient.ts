import {CancelOfStaticOfRoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./Cancel/index.ts";
import {RemoveTruckTrailerAndDriversOfStaticOfRoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./RemoveTruckTrailerAndDrivers/index.ts";
import {UnlockOfStaticOfRoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./Unlock/index.ts";
export class StaticOfRoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.cancel =
			new CancelOfStaticOfRoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.removeTruckTrailerAndDrivers =
			new RemoveTruckTrailerAndDriversOfStaticOfRoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.unlock =
			new UnlockOfStaticOfRoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
	}
	public readonly cancel: CancelOfStaticOfRoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly removeTruckTrailerAndDrivers: RemoveTruckTrailerAndDriversOfStaticOfRoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly unlock: UnlockOfStaticOfRoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
}
