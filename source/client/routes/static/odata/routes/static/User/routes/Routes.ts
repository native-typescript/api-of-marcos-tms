import {static_} from "./static/module.ts";
export class Routes {
	public constructor(url: string) {
		this.static = new static_.Static(url);
		this.url = url;
	}
	public readonly static: static_.Static;
	public readonly url: string;
}
