export function decode(body: Uint8Array<ArrayBufferLike>): string {
	const decodedBody: string = new TextDecoder(`utf-8`, {
		fatal: true,
		ignoreBOM: true,
	}).decode(body);
	return decodedBody;
}
