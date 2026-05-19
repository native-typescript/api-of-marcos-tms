import {schemaOfTrailerType} from "../../../../../../../../../../../../../mappings/index.ts";
import {schemaOfCapabilityOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./capability/index.ts";
import {schemaOfCarrierOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./carrier/index.ts";
import {schemaOfCustomerOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./customer/index.ts";
import {schemaOfDateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./date/index.ts";
import {schemaOfDocumentSubmissionMethodOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./document-submission-method/index.ts";
import {schemaOfLicensePlateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./license-plate/index.ts";
import {schemaOfLinkOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./link/index.ts";
import {schemaOfLocationOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./location/index.ts";
import {schemaOfPaymentsOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./payments/index.ts";
import {schemaOfTrailerLicensePlateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./trailer-license-plate/index.ts";
import {schemaOfVehicleLicensePlateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient} from "./vehicle-license-plate/index.ts";
import {z} from "zod";
export const schemaOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.strictObject({
		capabilities: z.union([
			z
				.array(
					schemaOfCapabilityOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
				)
				.transform(function parseCapabilities(capabilities) {
					const parsedCapabilities = capabilities.reduce<{
						palletsExchange: boolean;
						secureParking: boolean;
					}>(
						function accumulateCapability(
							accumulatedParsedCapabilities,
							capability,
						) {
							accumulatedParsedCapabilities[capability] = true;
							return accumulatedParsedCapabilities;
						},
						{palletsExchange: false, secureParking: false},
					);
					return parsedCapabilities;
				}),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		cargoValue: z.strictObject({}),
		carrier:
			schemaOfCarrierOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		comments: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		customer:
			schemaOfCustomerOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		customerBranch: z.union([
			z.strictObject({}),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		distance: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		documentSubmissionMethods: z.union([
			z
				.array(
					schemaOfDocumentSubmissionMethodOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
				)
				.transform(function parseMethods(methods) {
					const parsedMethods = methods.reduce<{
						email: boolean;
						originalByPost: boolean;
						portalUpload: boolean;
					}>(
						function accumulateMethod(accumulatedParsedMethods, method) {
							accumulatedParsedMethods[method] = true;
							return accumulatedParsedMethods;
						},
						{email: false, originalByPost: false, portalUpload: false},
					);
					return parsedMethods;
				}),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		invoiceEmail: z.union([
			z.email(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		licensePlates: z.union([
			z.tuple(
				[
					schemaOfLicensePlateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
				],
				schemaOfLicensePlateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
			),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		links: z.union([
			z.tuple(
				[
					schemaOfLinkOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
				],
				schemaOfLinkOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
			),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		locations: z.tuple(
			[
				schemaOfLocationOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
			],
			schemaOfLocationOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		),
		orderDate:
			schemaOfDateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		orderNumber: z.string().nonempty(),
		payer: z.strictObject({}),
		payments:
			schemaOfPaymentsOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		penalties: z.union([
			z.string().nonempty(),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		trailersLicensePlates: z.array(
			schemaOfTrailerLicensePlateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		),
		trailerTypes: z.union([
			z.array(schemaOfTrailerType),
			z
				.undefined()
				.optional()
				.transform<null>(function makeNull(): null {
					return null;
				}),
		]),
		vehiclesLicensePlates: z.array(
			schemaOfVehicleLicensePlateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient,
		),
	});
