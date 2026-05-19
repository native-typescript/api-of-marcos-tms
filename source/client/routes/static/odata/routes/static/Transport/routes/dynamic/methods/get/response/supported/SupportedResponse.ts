import type {implementations} from "../implementations/module.ts";
export type SupportedResponse =
	| implementations.noContent.Response
	| implementations.ok.Response;
