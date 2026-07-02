import {DynamicOfRoutesOfContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfRoutesOfContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.static =
			new StaticOfRoutesOfContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.url = url;
	}
	public dynamic(
		id: number,
	): DynamicOfRoutesOfContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${this.url}(${id.toString(10)})`,
			);
		return dynamic;
	}
	public readonly static: StaticOfRoutesOfContractorsOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
