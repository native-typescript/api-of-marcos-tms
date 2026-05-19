import {timestamp} from "../../../../../../../../../../../../timestamp/module.ts";
import {time} from "../../../../../../../../../../time/module.ts";
import {id} from "../../id/module.ts";
import {amountOfKilometers} from "../amount-of-kilometers/module.ts";
import {cargoAmount} from "../CargoAmount/module.ts";
import {carrier} from "../Carrier/module.ts";
import {carrierFullName} from "../carrierFullName/module.ts";
import {currency} from "../currency/module.ts";
import {customer} from "../Customer/module.ts";
import {driver} from "../driver/module.ts";
import {number} from "../Number/module.ts";
import {numericalNumber} from "../NumericalNumber/module.ts";
import {numericalTransportNumber} from "../NumericalTransportNumber/module.ts";
import {order} from "../order/module.ts";
import {package_} from "../Package/module.ts";
import {registrationPlate} from "../registration-plate/module.ts";
import {route} from "../Route/module.ts";
import {transportNumber} from "../TransportNumber/module.ts";
import {unitAmountType} from "../UnitAmountType/module.ts";
import {amountOfKilograms} from "../amount-of-kilograms/module.ts";
import {z} from "zod";
export const schema = z.intersection(
	z.strictObject({
		"AcceptanceStatus": z.literal(0),
		"AttachmentsExist": z.literal(true),
		"Cancelled": z.literal(false),
		"CargoAmount": cargoAmount.schema,
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
		"Customer": customer.schema,
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
		"FinishDateOrder": order.schema,
		"FinishDateRange": time.schema.schema,
		"FinishRealDate": z.literal(null),
		"GMP": z.literal(false),
		"ImportOrigin": z.literal(0),
		"InvoicedCosts": z.literal(false),
		"InvoiceState": z.literal(``),
		"KmTotal": z.literal(0),
		"KmWithCargo": z.literal(0),
		"KmWithoutCargo": z.literal(0),
		"LoadingTime": time.schema.schema,
		"LTL": z.literal(false),
		"ModificationDate": z.literal(null),
		"Number": number.schema,
		"NumericalNumber": numericalNumber.schema,
		"NumericalTransportNumber": numericalTransportNumber.schema,
		"Package": package_.schema,
		"Requirements": z.literal(``),
		"Route": route.schema,
		"SemiTrailer": registrationPlate.schema,
		"SemiTrailerId": id.schema.schema,
		"StartDate": timestamp.schema.schema,
		"StartDateOrder": order.schema,
		"StartDateRange": time.schema.schema,
		"StartRealDate": z.literal(null),
		"State": z.literal(6),
		"StatusKindDescription": z.literal(null),
		"StatusKindId": z.literal(null),
		"TAPA": z.literal(false),
		"TollCurrency": currency.schema,
		"Trailer": registrationPlate.schema,
		"TrailerId": id.schema.schema,
		"TransportAuthorId": id.schema.schema,
		"TransportNumber": transportNumber.schema,
		"Truck": registrationPlate.schema,
		"TruckId": id.schema.schema,
		"UnitAmount": z.literal(1),
		"UnitAmountType": unitAmountType.schema,
		"UnitPrice": z.literal(0),
		"UnitPriceCurrency": currency.schema,
		"UnloadingTime": time.schema.schema,
		"WeightInKg": amountOfKilograms.schema,
	}),
	z.union([z.strictObject({})]),
);
