import {DynamicOfRoutesOfAttachmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./dynamic/index.ts";
export class RoutesOfAttachmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.url = url;
	}
	public dynamic(
		id: number,
	): DynamicOfRoutesOfAttachmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfAttachmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfAttachmentOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${this.url}(${id.toString(10)})`,
			);
		return dynamic;
	}
	public readonly url: string;
}
