import {MethodsOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./routes/index.ts";
export class PersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.methods =
			new MethodsOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(url);
		this.routes =
			new RoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(url);
		this.url = url;
	}
	public readonly methods: MethodsOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfPersonOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
