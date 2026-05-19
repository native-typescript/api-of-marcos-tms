import {handlingUnexpectedStatusCode} from "../../../../handling-unexpected-status-code/module.ts";
import {readingThenValidatingBodyOfRequest} from "../../../../reading-then-validating-body-of-request/module.ts";
import {get} from "./get/module.ts";
export class Methods {
	public constructor(url: string) {
		this.url = url;
	}
	/**
	 * TODO
	 */
	public async get(): Promise<get.response.supported.SupportedResponse> {
		const response: Response = await fetch(this.url);
		switch (response.status) {
			case 200: {
				const validatedBodyOfResponse: get.response.implementations.ok.body.Body =
					await readingThenValidatingBodyOfRequest.readThenValidate(
						response,
						get.response.implementations.ok.body.schema.schema,
					);
				const responseOfClient: get.response.implementations.ok.Response = {
					body: validatedBodyOfResponse,
					status: response.status,
				};
				return responseOfClient;
			}
			default: {
				handlingUnexpectedStatusCode.handle(response);
			}
		}
	}
	private readonly url: string;
}
