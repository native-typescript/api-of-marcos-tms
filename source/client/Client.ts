import {MethodsOfClient} from "./methods/index.ts";
import {RoutesOfClient} from "./routes/index.ts";
export class Client {
	public constructor(baseUrl: string) {
		this.methods = new MethodsOfClient(baseUrl);
		this.routes = new RoutesOfClient(baseUrl);
		this.url = baseUrl;
	}
	public readonly methods: MethodsOfClient;
	public readonly routes: RoutesOfClient;
	public readonly url: string;
}
