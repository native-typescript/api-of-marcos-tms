import {MethodsOfOdataOfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfOdataOfStaticOfRoutesOfClient} from "./routes/index.ts";
export class OdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.methods = new MethodsOfOdataOfStaticOfRoutesOfClient(url);
		this.routes = new RoutesOfOdataOfStaticOfRoutesOfClient(url);
		this.url = url;
	}
	public readonly methods: MethodsOfOdataOfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
