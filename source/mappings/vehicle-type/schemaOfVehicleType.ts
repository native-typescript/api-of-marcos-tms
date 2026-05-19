import {z} from "zod";
export const schemaOfVehicleType = z.union([
	z.literal(1).transform(function map() {
		return `SemiTrailer`;
	}),
	z.literal(2).transform(function map() {
		return `12t Solo`;
	}),
	z.literal(3).transform(function map() {
		return `7.5 Solo`;
	}),
	z.literal(4).transform(function map() {
		return `Van/Bus`;
	}),
	z.literal(5).transform(function map() {
		return `Double Trailer`;
	}),
]);
