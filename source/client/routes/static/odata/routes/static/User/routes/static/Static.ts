import {account} from "./Account/module.ts";
export class Static {
	public constructor(url: string) {
		this.account = new account.Account(url);
	}
	public readonly account: account.Account;
}
