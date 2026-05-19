import {odataContext} from "./odata-context/module.ts";
import {value} from "./value/module.ts";
import {z} from "zod";
export const schema = z
	.strictObject({"@odata.context": odataContext.schema, "value": value.schema})
	.transform(function extractValue(body) {
		return body.value;
	});
