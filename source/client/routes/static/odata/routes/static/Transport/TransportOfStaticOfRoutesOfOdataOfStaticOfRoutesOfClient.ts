import {MethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./routes/index.ts";
export class TransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.methods =
			new MethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.routes =
			new RoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(url);
		this.url = url;
	}
	public readonly methods: MethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
