import {routes} from "./routes/module.ts";
export class Client {
	public constructor(baseUrl: string) {
		this.routes = new routes.Routes(baseUrl);
		this.url = baseUrl;
	}
	public readonly routes: routes.Routes;
	public readonly url: string;
}
