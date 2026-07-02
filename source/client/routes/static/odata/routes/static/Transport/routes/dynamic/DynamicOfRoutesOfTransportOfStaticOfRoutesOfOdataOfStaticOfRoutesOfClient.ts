import {MethodsOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./routes/index.ts";
export class DynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.methods =
			new MethodsOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.routes =
			new RoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.url = url;
	}
	public readonly methods: MethodsOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfDynamicOfRoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
