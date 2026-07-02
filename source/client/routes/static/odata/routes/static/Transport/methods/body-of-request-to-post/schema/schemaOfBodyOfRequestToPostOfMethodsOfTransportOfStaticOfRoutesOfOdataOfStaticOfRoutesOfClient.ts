import {schemaOfDateOfBodyOfRequestToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient} from "./date/index.ts";
import {z} from "zod";
export const schemaOfBodyOfRequestToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
	z
		.strictObject({
			carrier: z.string(),
			carrierCharge: z.number(),
			carrierChargeCurrency: z.string(),
			carrierReferenceNumber: z.string(),
			driver1: z
				.strictObject({firstName: z.string(), lastName: z.string()})
				.transform(function parseDriver1(driver1) {
					return {"FirstName": driver1.firstName, "LastName": driver1.lastName};
				}),
			driver2: z
				.strictObject({id: z.number()})
				.transform(function parseDriver2(driver2) {
					return {"Id": driver2.id};
				}),
			driverFirstName: z.string(),
			driverLastName: z.string(),
			externalNumber: z.string(),
			idKind: z.number(),
			importOrigin: z.number(),
			shipments: z.array(
				z
					.strictObject({
						customer: z.string(),
						customerReference: z.string(),
						externalNumber: z.string(),
						freight: z.number(),
						freightCurrency: z.string(),
						idKind: z.number(),
						importOrigin: z.number(),
						loads: z.array(
							z
								.strictObject({
									adr: z.number(),
									height: z.number(),
									id: z.number(),
									lenght: z.number(),
									loadingMeters: z.number(),
									name: z.string(),
									package: z.string(),
									quantity: z.number(),
									temperatureMax: z.number(),
									temperatureMin: z.number(),
									temperatureRequired: z.boolean(),
									volume: z.number(),
									weight: z.number(),
									weightGross: z.number(),
									weightGrossKg: z.number(),
									width: z.number(),
								})
								.transform(function parseLoad(load) {
									return {
										"Adr": load.adr,
										"Height": load.height,
										"Id": load.id,
										"Lenght": load.lenght,
										"LoadingMeters": load.loadingMeters,
										"Name": load.name,
										"Package": load.package,
										"Quantity": load.quantity,
										"TemperatureMax": load.temperatureMax,
										"TemperatureMin": load.temperatureMin,
										"TemperatureRequired": load.temperatureRequired,
										"Volume": load.volume,
										"Weight": load.weight,
										"WeightGross": load.weightGross,
										"WeightGrossKg": load.weightGrossKg,
										"Width": load.width,
									};
								}),
						),
						loadStationConnections: z.array(
							z
								.strictObject({
									date: schemaOfDateOfBodyOfRequestToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
									dateEnd:
										schemaOfDateOfBodyOfRequestToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient,
									id: z.number(),
									idLoad: z.number(),
									idStation: z.number(),
									loadingMeters: z.number(),
									notes: z.string(),
									number: z.string(),
									quantity: z.number(),
									type: z.number(),
									volume: z.number(),
									weight: z.number(),
									weightGross: z.number(),
								})
								.transform(
									function parseLoadStationConnection(loadStationConnection) {
										return {
											"Date": loadStationConnection.date,
											"DateEnd": loadStationConnection.dateEnd,
											"Id": loadStationConnection.id,
											"IdLoad": loadStationConnection.idLoad,
											"IdStation": loadStationConnection.idStation,
											"LoadingMeters": loadStationConnection.loadingMeters,
											"Notes": loadStationConnection.notes,
											"Number": loadStationConnection.number,
											"Quantity": loadStationConnection.quantity,
											"Type": loadStationConnection.type,
											"Volume": loadStationConnection.volume,
											"Weight": loadStationConnection.weight,
											"WeightGross": loadStationConnection.weightGross,
										};
									},
								),
						),
						stations: z.array(
							z
								.strictObject({
									apartmentNumber: z.string(),
									buildingNumber: z.string(),
									city: z.string(),
									country: z.string(),
									countrySymbol: z.string(),
									id: z.number(),
									name: z.string(),
									postalCode: z.string(),
									street: z.string(),
								})
								.transform(function parseStation(station) {
									return {
										"ApartmentNumber": station.apartmentNumber,
										"BuildingNumber": station.buildingNumber,
										"City": station.city,
										"Country": station.country,
										"CountrySymbol": station.countrySymbol,
										"Id": station.id,
										"Name": station.name,
										"PostalCode": station.postalCode,
										"Street": station.street,
									};
								}),
						),
					})
					.transform(function parseShipment(shipment) {
						return {
							"Customer": shipment.customer,
							"CustomerReference": shipment.customerReference,
							"ExternalNumber": shipment.externalNumber,
							"Freight": shipment.freight,
							"FreightCurrency": shipment.freightCurrency,
							"IdKind": shipment.idKind,
							"ImportOrigin": shipment.importOrigin,
							"Loads": shipment.loads,
							"LoadStationConnections": shipment.loadStationConnections,
							"Stations": shipment.stations,
						};
					}),
			),
			trailer: z.string(),
			truck: z.string(),
			truckDescription: z.string(),
			truckNotes: z.string(),
		})
		.transform(function parseBody(body) {
			return {
				"Carrier": body.carrier,
				"CarrierCharge": body.carrierCharge,
				"CarrierChargeCurrency": body.carrierChargeCurrency,
				"CarrierReferenceNumber": body.carrierReferenceNumber,
				"Driver1": body.driver1,
				"Driver2": body.driver2,
				"DriverFirstName": body.driverFirstName,
				"DriverLastName": body.driverLastName,
				"ExternalNumber": body.externalNumber,
				"IdKind": body.idKind,
				"ImportOrigin": body.importOrigin,
				"Shipments": body.shipments,
				"Trailer": body.trailer,
				"Truck": body.truck,
				"TruckDescription": body.truckDescription,
				"TruckNotes": body.truckNotes,
			};
		})
		.transform<string>(function encodeBody(body) {
			const encodedBody: string = JSON.stringify(body);
			return encodedBody;
		})
		.transform<Uint8Array<ArrayBufferLike>>(function encodeBody(
			body: string,
		): Uint8Array<ArrayBufferLike> {
			const encodedBody: Uint8Array<ArrayBufferLike> = new TextEncoder().encode(
				body,
			);
			return encodedBody;
		});
