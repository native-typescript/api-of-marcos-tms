export function parse(decodedBody: string): unknown {
	const parsedDecodedBody: unknown = JSON.parse(decodedBody);
	return parsedDecodedBody;
}
