import {RoutesOfAccountOfStaticOfRoutesOfUserOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./routes/index.ts";
export class AccountOfStaticOfRoutesOfUserOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.routes =
			new RoutesOfAccountOfStaticOfRoutesOfUserOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				url,
			);
		this.url = url;
	}
	public readonly routes: RoutesOfAccountOfStaticOfRoutesOfUserOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient;
	public readonly url: string;
}
