import {MethodsOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./routes/index.ts";
export class DynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [vehicleId: string],
	) {
		this.methods =
			new MethodsOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
		this.routes =
			new RoutesOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	public readonly methods: MethodsOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
