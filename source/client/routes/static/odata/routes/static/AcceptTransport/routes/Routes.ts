import {dynamic} from "./dynamic/module.ts";
import {static_} from "./static/module.ts";
export class Routes {
	public constructor(url: string) {
		this.static = new static_.Static(url);
		this.url = url;
	}
	public dynamic(id: number): dynamic.Dynamic {
		const dynamicOfThis: dynamic.Dynamic = new dynamic.Dynamic(
			`${this.url}/${id.toString(10)}`,
		);
		return dynamicOfThis;
	}
	public readonly static: static_.Static;
	public readonly url: string;
}
