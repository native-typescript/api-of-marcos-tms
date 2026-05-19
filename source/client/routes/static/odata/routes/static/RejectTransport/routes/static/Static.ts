import {limit} from "./Limit/module.ts";
export class Static {
	public constructor(url: string) {
		this.limit = new limit.Limit(url);
	}
	public readonly limit: limit.Limit;
}
