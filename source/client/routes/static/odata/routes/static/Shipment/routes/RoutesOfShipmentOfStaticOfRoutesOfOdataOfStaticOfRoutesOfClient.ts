import {DynamicOfRoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfRoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.static =
			new StaticOfRoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.url = url;
	}
	public dynamic(
		id: number,
	): DynamicOfRoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${this.url}(${id.toString(10)})`,
			);
		return dynamic;
	}
	public readonly static: StaticOfRoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
