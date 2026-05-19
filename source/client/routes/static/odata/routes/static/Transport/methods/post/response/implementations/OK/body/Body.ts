import type {schema} from "./schema/module.ts";
import type {z} from "zod";
export type Body = z.output<typeof schema.schema>;
