import type {schema} from "./schema/module.ts";
import type {z} from "zod";
export type Body = z.input<typeof schema.schema>;
