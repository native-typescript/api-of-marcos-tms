import {StaticOfRoutesOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [vehicleId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [vehicleId: string];
	public readonly static: StaticOfRoutesOfDynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
