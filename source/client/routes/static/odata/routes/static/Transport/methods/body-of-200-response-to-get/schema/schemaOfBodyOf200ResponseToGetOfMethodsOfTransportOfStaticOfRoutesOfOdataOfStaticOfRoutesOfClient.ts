import type {Transport} from "../../../Transport/index.ts";
import {z} from "zod";
export const schemaOfBodyOf200ResponseToGetOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
	z
		.instanceof(Uint8Array)
		.transform<string>(function parseBody(body: Uint8Array): string {
			const parsedBody: string = new TextDecoder(`utf-8`, {
				fatal: true,
				ignoreBOM: true,
			}).decode(body);
			return parsedBody;
		})
		.transform<unknown>(function parseJson(parsedBody: string): unknown {
			const parsedJson: unknown = JSON.parse(parsedBody);
			return parsedJson;
		})
		.pipe(
			z
				.strictObject({
					"@odata.context": z.templateLiteral([
						z.string(),
						z.literal(`/odata/$metadata#Transport`),
					]),
					"value": z.array(
						z
							.strictObject({
								"AcceptanceStatus": z.literal(0),
								"ArchivalPortal": z.literal(false),
								"AttachmentsExist": z.literal(true),
								"Cancelled": z.literal(false),
								"CargoAmount": z.literal(``),
								"Carrier": z.string().nonempty(),
								"CarrierAcceptation": z.literal(null),
								"CarrierAcceptationDate": z.literal(null),
								"CarrierAcceptationUser": z.literal(null),
								"CarrierAcceptationUserId": z.literal(null),
								"CarrierCharges": z.literal(0),
								"CarrierChargesCurrency": z.string().nonempty(),
								"CarrierChargesWitoutDiscount": z.literal(0),
								"CarrierChargesWitoutDiscountCurrency": z.string().nonempty(),
								"CarrierDaysOfDefermentOfPayment": z.literal(0),
								"CarrierFAAccount": z.literal(``),
								"CarrierFullName": z.string().nonempty(),
								"CarrierId": z.int().positive(),
								"CarrierReferenceNumber": z.literal(``),
								"CarrierRefNo": z.literal(``),
								"CommentsForCarrier": z.literal(``),
								"CommentsFromCarrier": z.literal(null),
								"CompanyId": z.int().positive(),
								"CostInvoiceNumber": z.literal(``),
								"CostInvoiceStatus": z.literal(``),
								"Customer": z.string().nonempty(),
								"CustomerLoadedKm": z.int().positive(),
								"Description": z.literal(``),
								"Discount": z.literal(0),
								"Driver1": z.string().nonempty(),
								"Driver1BusinessPhone": z.literal(``),
								"Driver1Id": z.int().positive(),
								"Driver1IdentityCard": z.literal(` `),
								"Driver2": z.literal(``),
								"Driver2BusinessPhone": z.literal(null),
								"Driver2Id": z.union([z.int().positive(), z.literal(0)]),
								"Driver2IdentityCard": z.literal(` `),
								"EInvoiceAcceptance": z.literal(false),
								"ExternalNumber": z.literal(``),
								"FinishDate": z
									.string()
									.nonempty()
									.transform<Date>(function parseDate(date: string): Date {
										const parsedDate: Date = new Date(date);
										return parsedDate;
									})
									.pipe(z.date()),
								"FinishDateOrder": z.literal(0),
								"FinishDateRange": z.literal(`00:00`),
								"FinishRealDate": z.literal(null),
								"GMP": z.literal(false),
								/**
								 * Id transportu
								 */
								"Id": z.int().positive(),
								"IdKind": z.literal(100000010),
								"ImportOrigin": z.literal(0),
								"InvoicedCosts": z.literal(false),
								"InvoiceState": z.literal(``),
								"KmTotal": z.literal(0),
								"KmWithCargo": z.literal(0),
								"KmWithoutCargo": z.literal(0),
								"LoadingTime": z.literal(`00:00`),
								"LTL": z.literal(false),
								"ModificationDate": z.literal(null),
								"Number": z.string().nonempty(),
								"NumericalNumber": z.int().positive(),
								"NumericalTransportNumber": z.int().positive(),
								"Package": z.literal(``),
								"PortalAccess": z.literal(false),
								"PortalAttachmentsExist": z.literal(false),
								"Requirements": z.literal(``),
								"Route": z.string().nonempty(),
								"SemiTrailer": z.literal(``),
								"SemiTrailerId": z.literal(0),
								"StartDate": z
									.string()
									.nonempty()
									.transform<Date>(function parseDate(date: string): Date {
										const parsedDate: Date = new Date(date);
										return parsedDate;
									})
									.pipe(z.date()),
								"StartDateOrder": z.literal(0),
								"StartDateRange": z.literal(`00:00`),
								"StartRealDate": z.literal(null),
								"State": z.literal(1),
								"StatusKindDescription": z.literal(null),
								"StatusKindId": z.literal(null),
								"TAPA": z.literal(false),
								"Toll": z.literal(0),
								"TollCurrency": z.string().nonempty(),
								"TollType": z.literal(false),
								"Trailer": z.literal(``),
								"TrailerId": z.literal(0),
								"TransportAuthorId": z.int().positive(),
								"TransportNumber": z.string().nonempty(),
								"Truck": z.string().nonempty(),
								"TruckId": z.int().positive(),
								"UnitAmount": z.literal(1),
								"UnitAmountType": z.literal(null),
								"UnitPrice": z.literal(0),
								"UnitPriceCurrency": z.string().nonempty(),
								"UnloadingTime": z.literal(`00:00`),
								"WeightInKg": z.literal(0),
							})
							.transform<Transport>(
								function parseTransport(transport): Transport {
									const parsedTransport: Transport = {
										acceptanceStatus: transport.AcceptanceStatus,
										archivalPortal: transport.ArchivalPortal,
										attachmentsExist: transport.AttachmentsExist,
										cancelled: transport.Cancelled,
										cargoAmount: transport.CargoAmount,
										carrier: transport.Carrier,
										carrierAcceptation: transport.CarrierAcceptation,
										carrierAcceptationDate: transport.CarrierAcceptationDate,
										carrierAcceptationUser: transport.CarrierAcceptationUser,
										carrierAcceptationUserId:
											transport.CarrierAcceptationUserId,
										carrierCharges: transport.CarrierCharges,
										carrierChargesCurrency: transport.CarrierChargesCurrency,
										carrierChargesWitoutDiscount:
											transport.CarrierChargesWitoutDiscount,
										carrierChargesWitoutDiscountCurrency:
											transport.CarrierChargesWitoutDiscountCurrency,
										carrierDaysOfDefermentOfPayment:
											transport.CarrierDaysOfDefermentOfPayment,
										carrierFAAccount: transport.CarrierFAAccount,
										carrierFullName: transport.CarrierFullName,
										carrierId: transport.CarrierId,
										carrierReferenceNumber: transport.CarrierReferenceNumber,
										carrierRefNo: transport.CarrierRefNo,
										commentsForCarrier: transport.CommentsForCarrier,
										commentsFromCarrier: transport.CommentsFromCarrier,
										companyId: transport.CompanyId,
										costInvoiceNumber: transport.CostInvoiceNumber,
										costInvoiceStatus: transport.CostInvoiceStatus,
										customer: transport.Customer,
										customerLoadedKm: transport.CustomerLoadedKm,
										description: transport.Description,
										discount: transport.Discount,
										driver1: transport.Driver1,
										driver1BusinessPhone: transport.Driver1BusinessPhone,
										driver1Id: transport.Driver1Id,
										driver1IdentityCard: transport.Driver1IdentityCard,
										driver2: transport.Driver2,
										driver2BusinessPhone: transport.Driver2BusinessPhone,
										driver2Id: transport.Driver2Id,
										driver2IdentityCard: transport.Driver2IdentityCard,
										eInvoiceAcceptance: transport.EInvoiceAcceptance,
										externalNumber: transport.ExternalNumber,
										finishDate: transport.FinishDate,
										finishDateOrder: transport.FinishDateOrder,
										finishDateRange: transport.FinishDateRange,
										finishRealDate: transport.FinishRealDate,
										gmp: transport.GMP,
										/**
										 * Id
										 */
										id: transport.Id,
										idKind: transport.IdKind,
										importOrigin: transport.ImportOrigin,
										invoicedCosts: transport.InvoicedCosts,
										invoiceState: transport.InvoiceState,
										kmTotal: transport.KmTotal,
										kmWithCargo: transport.KmWithCargo,
										kmWithoutCargo: transport.KmWithoutCargo,
										loadingTime: transport.LoadingTime,
										ltl: transport.LTL,
										modificationDate: transport.ModificationDate,
										number: transport.Number,
										numericalNumber: transport.NumericalNumber,
										numericalTransportNumber:
											transport.NumericalTransportNumber,
										package: transport.Package,
										portalAccess: transport.PortalAccess,
										portalAttachmentsExist: transport.PortalAttachmentsExist,
										requirements: transport.Requirements,
										route: transport.Route,
										semiTrailer: transport.SemiTrailer,
										semiTrailerId: transport.SemiTrailerId,
										startDate: transport.StartDate,
										startDateOrder: transport.StartDateOrder,
										startDateRange: transport.StartDateRange,
										startRealDate: transport.StartRealDate,
										state: transport.State,
										statusKindDescription: transport.StatusKindDescription,
										statusKindId: transport.StatusKindId,
										tapa: transport.TAPA,
										toll: transport.Toll,
										tollCurrency: transport.TollCurrency,
										tollType: transport.TollType,
										trailer: transport.Trailer,
										trailerId: transport.TrailerId,
										transportAuthorId: transport.TransportAuthorId,
										transportNumber: transport.TransportNumber,
										truck: transport.Truck,
										truckId: transport.TruckId,
										unitAmount: transport.UnitAmount,
										unitAmountType: transport.UnitAmountType,
										unitPrice: transport.UnitPrice,
										unitPriceCurrency: transport.UnitPriceCurrency,
										unloadingTime: transport.UnloadingTime,
										weightInKg: transport.WeightInKg,
									};
									return parsedTransport;
								},
							),
					),
				})
				.transform(function extractValue(body) {
					return body.value;
				}),
		);
