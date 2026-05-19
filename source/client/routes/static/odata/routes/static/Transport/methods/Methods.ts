import {handlingUnexpectedStatusCode} from "../../../../../../../handling-unexpected-status-code/module.ts";
import {readingThenValidatingBodyOfRequest} from "../../../../../../../reading-then-validating-body-of-request/module.ts";
import {get} from "./get/module.ts";
import {post} from "./post/module.ts";
export class Methods {
	public constructor(url: string) {
		this.url = url;
	}
	/**
	 * Pobierz
	 *
	 * Umożliwia pobranie transportów. Endpoint umożliwia wykorzystanie odata query.
	 */
	public async get(
		apiKey: string,
		skip: null | number,
		top: null | number,
	): Promise<get.response.supported.SupportedResponse> {
		const response: Response = await fetch(
			`${this.url}?${skip === null ? `` : `$skip=${skip.toString(10)}`}${
				top === null ? `` : `&$top=${top.toString(10)}`
			}`,
			{headers: {"ApiKey": apiKey}, method: `GET`},
		);
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
	/**
	 * Dodaj transport całopojazdowy
	 *
	 * Umożliwia dodanie transportu całopojazdowego.
	 */
	public async post(
		apiKey: string,
		bodyOfRequest: post.request.body.Body,
	): Promise<post.response.supported.SupportedResponse> {
		const encodedBodyOfRequest: Uint8Array<ArrayBuffer> =
			new TextEncoder().encode(JSON.stringify(bodyOfRequest));
		const response: Response = await fetch(this.url, {
			body: encodedBodyOfRequest,
			headers: {"ApiKey": apiKey, "Content-Type": `application/json`},
			method: `POST`,
		});
		switch (response.status) {
			case 200: {
				const validatedBodyOfResponse: post.response.implementations.ok.body.Body =
					await readingThenValidatingBodyOfRequest.readThenValidate(
						response,
						post.response.implementations.ok.body.schema.schema,
					);
				const responseOfClient: post.response.implementations.ok.Response = {
					body: validatedBodyOfResponse,
					status: response.status,
				};
				return responseOfClient;
			}
			case 500: {
				const validatedBodyOfResponse: post.response.implementations.internalServerError.body.Body =
					await readingThenValidatingBodyOfRequest.readThenValidate(
						response,
						post.response.implementations.internalServerError.body.schema
							.schema,
					);
				const responseOfClient: post.response.implementations.internalServerError.Response =
					{body: validatedBodyOfResponse, status: response.status};
				return responseOfClient;
			}
			default: {
				handlingUnexpectedStatusCode.handle(response);
			}
		}
	}
	private readonly url: string;
}
