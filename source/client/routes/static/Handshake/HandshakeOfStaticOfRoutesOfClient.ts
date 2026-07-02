import {MethodsOfHandshakeOfStaticOfRoutesOfClient} from "./methods/index.ts";
export class HandshakeOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.methods = new MethodsOfHandshakeOfStaticOfRoutesOfClient(url);
		this.url = url;
	}
	public readonly methods: MethodsOfHandshakeOfStaticOfRoutesOfClient;
	public readonly url: string;
}
