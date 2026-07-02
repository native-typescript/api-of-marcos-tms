import {MethodsOfPackagingTurnoverOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./methods/index.ts";
import {RoutesOfPackagingTurnoverOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./routes/index.ts";
export class PackagingTurnoverOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.methods =
			new MethodsOfPackagingTurnoverOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.routes =
			new RoutesOfPackagingTurnoverOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.url = url;
	}
	public readonly methods: MethodsOfPackagingTurnoverOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly routes: RoutesOfPackagingTurnoverOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
