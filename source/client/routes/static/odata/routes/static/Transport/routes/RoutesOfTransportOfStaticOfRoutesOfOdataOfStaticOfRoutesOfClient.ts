import {DynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.static =
			new StaticOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.url = url;
	}
	public dynamic(
		id: number,
	): DynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${this.url}(${id.toString(10)})`,
			);
		return dynamic;
	}
	public readonly static: StaticOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
