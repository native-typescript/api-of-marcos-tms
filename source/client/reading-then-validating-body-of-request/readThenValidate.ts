import {decodingThenParsingBodyOfResponse} from "../decoding-then-parsing-body-of-response/module.ts";
import type {z} from "zod";
export async function readThenValidate<Body>(
	request: Response,
	schema: z.ZodType<Body, unknown>,
): Promise<Body> {
	const bodyOfRequest: Uint8Array<ArrayBufferLike> = await request.bytes();
	const parsedDecodedBodyOfRequest: unknown =
		decodingThenParsingBodyOfResponse.decodeThenParse(bodyOfRequest);
	const validatedDecodedBodyOfRequest: Body = schema.parse(
		parsedDecodedBodyOfRequest,
	);
	return validatedDecodedBodyOfRequest;
}
