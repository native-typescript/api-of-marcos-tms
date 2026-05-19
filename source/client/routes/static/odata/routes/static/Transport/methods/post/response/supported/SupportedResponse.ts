import type {implementations} from "../implementations/module.ts";
export type SupportedResponse =
	| implementations.internalServerError.Response
	| implementations.ok.Response;
