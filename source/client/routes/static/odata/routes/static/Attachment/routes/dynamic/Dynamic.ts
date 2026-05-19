import {methods} from "./methods/module.ts";
export class Dynamic {
	public constructor(url: string) {
		this.methods = new methods.Methods(url);
		this.url = url;
	}
	public readonly methods: methods.Methods;
	public readonly url: string;
}
