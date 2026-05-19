import {z} from "zod";
export const schemaOfAdditionalCapability = z.union([
	z.literal(`adr`).transform(function map() {
		return `ADR`;
	}),
	z.literal(`doubleDeck`).transform(function map() {
		return `Double Floor Trailer`;
	}),
	z.literal(`codeXL`).transform(function map() {
		return `XL Certificate`;
	}),
	z.literal(`twoDrivers`).transform(function map() {
		return `Two Drivers required`;
	}),
	z.literal(`lift`).transform(function map() {
		return `Tail Lift`;
	}),
	z.literal(`forklift`).transform(function map() {
		return `Forklift`;
	}),
	z.literal(`gps`).transform(function map() {
		return `GPS tracking required`;
	}),
	z.literal(`multiTemp`).transform(function map() {
		return `Multi temperature freight`;
	}),
]);
