import {MethodsOfRejectTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfRejectTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./routes/index.ts";
export class RejectTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.methods =
			new MethodsOfRejectTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.routes =
			new RoutesOfRejectTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.url = url;
	}
	public readonly methods: MethodsOfRejectTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfRejectTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
