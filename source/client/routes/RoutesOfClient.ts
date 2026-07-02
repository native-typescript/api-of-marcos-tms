import {StaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfClient {
	public constructor(url: string) {
		this.static = new StaticOfRoutesOfClient(`${url}/`);
		this.url = url;
	}
	public readonly static: StaticOfRoutesOfClient;
	public readonly url: string;
}
