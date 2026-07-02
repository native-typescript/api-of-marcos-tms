import {DynamicOfRoutesOfAttachmentFileOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./dynamic/index.ts";
export class RoutesOfAttachmentFileOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
	public constructor(url: string) {
		this.url = url;
	}
	public dynamic(
		id: number,
	): DynamicOfRoutesOfAttachmentFileOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient {
		const dynamic: DynamicOfRoutesOfAttachmentFileOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
			new DynamicOfRoutesOfAttachmentFileOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient(
				`${this.url}(${id.toString(10)})`,
			);
		return dynamic;
	}
	public readonly url: string;
}
