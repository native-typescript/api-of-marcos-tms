import {MethodsOfAppVersionOfStaticOfRoutesOfClient} from "./methods/index.ts";
export class AppVersionOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.methods = new MethodsOfAppVersionOfStaticOfRoutesOfClient(url);
		this.url = url;
	}
	public readonly methods: MethodsOfAppVersionOfStaticOfRoutesOfClient;
	public readonly url: string;
}
