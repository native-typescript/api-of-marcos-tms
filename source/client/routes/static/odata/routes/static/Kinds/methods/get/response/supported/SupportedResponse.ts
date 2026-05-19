import type {implementations} from "../implementations/module.ts";
export type SupportedResponse =
	| implementations.ok.Response
	| implementations.unauthorized.Response;
