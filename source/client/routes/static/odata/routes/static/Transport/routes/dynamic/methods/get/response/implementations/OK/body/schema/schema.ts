import {id} from "../id/module.ts";
import {odataContext} from "./odata-context/module.ts";
import {withStatusOf0} from "./with-status-of-0/module.ts";
import {withStatusOf1} from "./with-status-of-1/module.ts";
import {withStatusOf2} from "./with-status-of-2/module.ts";
import {withStatusOf3} from "./with-status-of-3/module.ts";
import {withStatusOf4} from "./with-status-of-4/module.ts";
import {withStatusOf5} from "./with-status-of-5/module.ts";
import {withStatusOf6} from "./with-status-of-6/module.ts";
import {z} from "zod";
export const schema = z.intersection(
	z.strictObject({
		"@odata.context": odataContext.schema,
		"ArchivalPortal": z.literal(false),
		"CarrierAcceptation": z.literal(null),
		"CarrierAcceptationDate": z.literal(null),
		"CarrierAcceptationUser": z.literal(null),
		"CarrierAcceptationUserId": z.literal(null),
		"CommentsFromCarrier": z.literal(null),
		"Discount": z.literal(0),
		"Driver2IdentityCard": z.literal(` `),
		"Id": id.schema.schema,
		"IdKind": id.schema.schema,
		"PortalAccess": z.literal(false),
		"PortalAttachmentsExist": z.literal(false),
		"Toll": z.literal(0),
		"TollType": z.literal(false),
	}),
	z.union([
		withStatusOf1.schema,
		withStatusOf4.schema,
		withStatusOf3.schema,
		withStatusOf0.schema,
		withStatusOf5.schema,
		withStatusOf2.schema,
		withStatusOf6.schema,
	]),
);
