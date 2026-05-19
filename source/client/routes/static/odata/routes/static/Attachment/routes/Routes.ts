import {dynamic} from "./dynamic/module.ts";
export class Routes {
	public constructor(url: string) {
		this.url = url;
	}
	public dynamic(id: number): dynamic.Dynamic {
		const dynamicOfThis: dynamic.Dynamic = new dynamic.Dynamic(
			`${this.url}(${id.toString(10)})`,
		);
		return dynamicOfThis;
	}
	public readonly url: string;
}
