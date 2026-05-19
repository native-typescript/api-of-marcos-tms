import type {Id} from "../Id.ts";
import {z} from "zod";
export const schema = z.int().min(100000000) satisfies z.ZodType<Id>;
