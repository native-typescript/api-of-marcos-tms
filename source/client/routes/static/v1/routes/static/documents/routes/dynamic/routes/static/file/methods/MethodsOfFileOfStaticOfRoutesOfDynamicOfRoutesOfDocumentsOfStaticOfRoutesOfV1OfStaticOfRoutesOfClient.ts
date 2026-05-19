export class MethodsOfFileOfStaticOfRoutesOfDynamicOfRoutesOfDocumentsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [documentId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	/**
	 */
	public async get(apiKey: string): Promise<unknown> {
		const response: Response = await fetch(
			`${this.baseUrl}/v1/documents/${this.parameters[0]}/file`,
			{headers: {"X-Api-Key": apiKey}, method: `GET`},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
	private readonly parameters: readonly [documentId: string];
}
