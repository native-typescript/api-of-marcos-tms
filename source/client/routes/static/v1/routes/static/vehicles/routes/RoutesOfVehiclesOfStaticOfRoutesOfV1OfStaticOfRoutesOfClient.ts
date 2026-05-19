import {DynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./dynamic/index.ts";
import {StaticOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./static/index.ts";
export class RoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
		this.static =
			new StaticOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				baseUrl,
				parameters,
			);
	}
	private readonly baseUrl: string;
	public dynamic(
		vehicleId: string,
	): DynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient(
				this.baseUrl,
				[...this.parameters, vehicleId],
			);
		return dynamic;
	}
	private readonly parameters: readonly [];
	public readonly static: StaticOfRoutesOfVehiclesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient;
}
