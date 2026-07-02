import {MethodsOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./routes/index.ts";
export class ShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.methods =
			new MethodsOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(url);
		this.routes =
			new RoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(url);
		this.url = url;
	}
	public readonly methods: MethodsOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfShipmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
