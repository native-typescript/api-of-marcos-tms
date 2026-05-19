import {z} from "zod";
export const schemaOfTrailerType = z.union([
	z.literal(`1`).transform(function map() {
		return `Tent`;
	}),
	z.literal(`2`).transform(function map() {
		return `Refrigerator`;
	}),
	z.literal(`3`).transform(function map() {
		return `Tautliner (Curtainsider)`;
	}),
	z.literal(`4`).transform(function map() {
		return `Box`;
	}),
	z.literal(`5`).transform(function map() {
		return `Isotherm`;
	}),
	z.literal(`6`).transform(function map() {
		return `Mega`;
	}),
	z.literal(`7`).transform(function map() {
		return `Jumbo`;
	}),
	z.literal(`8`).transform(function map() {
		return `Van`;
	}),
	z.literal(`10`).transform(function map() {
		return `Any`;
	}),
	z.literal(`11`).transform(function map() {
		return `Platform`;
	}),
	z.literal(`12`).transform(function map() {
		return `Road Train 120 m3`;
	}),
	z.literal(`13`).transform(function map() {
		return `Tanker`;
	}),
	z.literal(`14`).transform(function map() {
		return `Walking Floor`;
	}),
	z.literal(`15`).transform(function map() {
		return `CoilMulde`;
	}),
	z.literal(`16`).transform(function map() {
		return `Dump Truck (Tipper)`;
	}),
	z.literal(`17`).transform(function map() {
		return `Car Transporter`;
	}),
	z.literal(`18`).transform(function map() {
		return `Joloda`;
	}),
	z.literal(`19`).transform(function map() {
		return `Low Loader`;
	}),
	z.literal(`50`).transform(function map() {
		return `Standard`;
	}),
	z.literal(`51`).transform(function map() {
		return `Paperliner`;
	}),
	z.literal(`52`).transform(function map() {
		return `Shotgun WithMultiLog`;
	}),
]);
