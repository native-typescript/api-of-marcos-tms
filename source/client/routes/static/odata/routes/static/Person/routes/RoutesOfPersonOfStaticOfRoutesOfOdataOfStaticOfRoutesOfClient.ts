import {DynamicOfRoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfRoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.static =
			new StaticOfRoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.url = url;
	}
	public dynamic(
		id: number,
	): DynamicOfRoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${this.url}(${id.toString(10)})`,
			);
		return dynamic;
	}
	public readonly static: StaticOfRoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
