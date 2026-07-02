import {StaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.static = new StaticOfRoutesOfOdataOfStaticOfRoutesOfClient(`${url}/`);
		this.url = url;
	}
	public readonly static: StaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
