import {decodingBody} from "./decoding-body/module.ts";
import {parsingDecodedBody} from "./parsing-decoded-body/module.ts";
export function decodeThenParse(body: Uint8Array<ArrayBufferLike>): unknown {
	const decodedBody: string = decodingBody.decode(body);
	const parsedDecodedBody: unknown = parsingDecodedBody.parse(decodedBody);
	return parsedDecodedBody;
}
