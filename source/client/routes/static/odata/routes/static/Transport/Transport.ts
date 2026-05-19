import {methods} from "./methods/module.ts";
import {routes} from "./routes/module.ts";
export class Transport {
	public constructor(url: string) {
		this.methods = new methods.Methods(url);
		this.routes = new routes.Routes(url);
		this.url = url;
	}
	public readonly methods: methods.Methods;
	public readonly routes: routes.Routes;
	public readonly url: string;
}
