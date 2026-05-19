import {timestamp} from "../../../../../../../../../../../../timestamp/module.ts";
import {time} from "../../../../../../../../../../time/module.ts";
import {id} from "../../id/module.ts";
import {amountOfKilometers} from "../amount-of-kilometers/module.ts";
import {carrier} from "../Carrier/module.ts";
import {carrierFullName} from "../carrierFullName/module.ts";
import {currency} from "../currency/module.ts";
import {customer} from "../Customer/module.ts";
import {driver} from "../driver/module.ts";
import {number} from "../Number/module.ts";
import {numericalNumber} from "../NumericalNumber/module.ts";
import {numericalTransportNumber} from "../NumericalTransportNumber/module.ts";
import {order} from "../order/module.ts";
import {registrationPlate} from "../registration-plate/module.ts";
import {route} from "../Route/module.ts";
import {transportNumber} from "../TransportNumber/module.ts";
import {unitAmountType} from "../UnitAmountType/module.ts";
import {z} from "zod";
export const schema = z.intersection(
	z.strictObject({
		"AcceptanceStatus": z.literal(0),
		"AttachmentsExist": z.literal(false),
		"Cancelled": z.literal(true),
		"CargoAmount": z.literal(``),
		"Carrier": carrier.schema,
		"CarrierCharges": z.literal(0),
		"CarrierChargesCurrency": currency.schema,
		"CarrierChargesWitoutDiscount": z.literal(0),
		"CarrierChargesWitoutDiscountCurrency": currency.schema,
		"CarrierDaysOfDefermentOfPayment": z.literal(0),
		"CarrierFAAccount": z.literal(``),
		"CarrierFullName": carrierFullName.schema,
		"CarrierId": id.schema.schema,
		"CarrierReferenceNumber": z.literal(``),
		"CarrierRefNo": z.literal(``),
		"CommentsForCarrier": z.literal(``),
		"CompanyId": id.schema.schema,
		"CostInvoiceNumber": z.literal(``),
		"CostInvoiceStatus": z.literal(``),
		"CustomerLoadedKm": amountOfKilometers.schema,
		"Description": z.literal(``),
		"Driver1": driver.schema,
		"Driver1BusinessPhone": z.literal(``),
		"Driver1Id": id.schema.schema,
		"Driver1IdentityCard": z.literal(` `),
		"Driver2": z.literal(``),
		"Driver2BusinessPhone": z.literal(null),
		"Driver2Id": z.literal(0),
		"EInvoiceAcceptance": z.literal(false),
		"ExternalNumber": z.literal(``),
		"FinishDate": timestamp.schema.schema,
		"FinishRealDate": z.literal(null),
		"ImportOrigin": z.literal(0),
		"InvoicedCosts": z.literal(false),
		"InvoiceState": z.literal(``),
		"KmTotal": z.literal(0),
		"KmWithCargo": z.literal(0),
		"KmWithoutCargo": z.literal(0),
		"ModificationDate": z.literal(null),
		"Number": number.schema,
		"NumericalNumber": numericalNumber.schema,
		"NumericalTransportNumber": numericalTransportNumber.schema,
		"Package": z.literal(``),
		"Requirements": z.literal(``),
		"SemiTrailer": z.literal(``),
		"SemiTrailerId": z.literal(0),
		"StartDate": timestamp.schema.schema,
		"StartRealDate": z.literal(null),
		"State": z.literal(2),
		"StatusKindDescription": z.literal(null),
		"StatusKindId": z.literal(null),
		"TollCurrency": currency.schema,
		"Trailer": z.literal(``),
		"TrailerId": z.literal(0),
		"TransportAuthorId": id.schema.schema,
		"TransportNumber": transportNumber.schema,
		"Truck": registrationPlate.schema,
		"TruckId": id.schema.schema,
		"UnitAmount": z.literal(1),
		"UnitAmountType": unitAmountType.schema,
		"UnitPrice": z.literal(0),
		"UnitPriceCurrency": currency.schema,
		"UnloadingTime": time.schema.schema,
		"WeightInKg": z.literal(0),
	}),
	z.union([
		z.strictObject({
			"Customer": customer.schema,
			"FinishDateOrder": order.schema,
			"FinishDateRange": time.schema,
			"GMP": z.literal(false),
			"LoadingTime": time.schema,
			"LTL": z.literal(false),
			"Route": route.schema,
			"StartDateOrder": order.schema,
			"StartDateRange": time.schema,
			"TAPA": z.literal(false),
		}),
		z.strictObject({
			"Customer": z.literal(``),
			"FinishDateOrder": z.literal(null),
			"FinishDateRange": z.literal(null),
			"GMP": z.literal(true),
			"LoadingTime": z.literal(``),
			"LTL": z.literal(true),
			"Route": z.literal(``),
			"StartDateOrder": z.literal(null),
			"StartDateRange": z.literal(null),
			"TAPA": z.literal(true),
		}),
	]),
);
