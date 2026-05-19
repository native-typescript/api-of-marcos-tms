import {token} from "./Token/module.ts";
export class Static {
	public constructor(url: string) {
		this.token = new token.Token(url);
	}
	public readonly token: token.Token;
}
