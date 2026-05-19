import type {Timestamp} from "../Timestamp.ts";
import {z} from "zod";
export const schema = z.codec(z.string().nonempty(), z.date(), {
	decode: function decodeTimestamp(timestamp: string): Timestamp {
		const parsedTimestamp: Timestamp = new Date(timestamp);
		return parsedTimestamp;
	},
	encode: function encodeTimestamp(timestamp: Timestamp): string {
		const encodedTimestamp: string = timestamp.toISOString();
		return encodedTimestamp;
	},
});
