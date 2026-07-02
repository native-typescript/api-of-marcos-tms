import {DynamicOfCustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfCustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./static/index.ts";
export class CustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.static =
			new StaticOfCustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.url = url;
	}
	public dynamic(
		id: number,
	): DynamicOfCustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
		const dynamic: DynamicOfCustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
			new DynamicOfCustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${this.url}(${id.toString(10)})`,
			);
		return dynamic;
	}
	public readonly static: StaticOfCustomerPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
