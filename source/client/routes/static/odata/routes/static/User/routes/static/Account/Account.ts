import {routes} from "./routes/module.ts";
export class Account {
	public constructor(url: string) {
		this.routes = new routes.Routes(url);
		this.url = url;
	}
	public readonly routes: routes.Routes;
	public readonly url: string;
}
