import {element} from "./element/module.ts";
import {z} from "zod";
export const schema = z.array(element.schema);
