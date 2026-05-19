import type {NumberOfPhone} from "../NumberOfPhone.ts";
import {z} from "zod";
export const schema = z.templateLiteral([
	z.literal(`+`),
	z.string().nonempty(),
]) satisfies z.ZodType<NumberOfPhone>;
