import {z} from "zod";
export const schemaOfFreightCapability = z.union([
	z.literal(1).transform(function map() {
		return `ADR`;
	}),
	z.literal(2).transform(function map() {
		return `Double Deck`;
	}),
	z.literal(3).transform(function map() {
		return `CodeXL`;
	}),
	z.literal(4).transform(function map() {
		return `Lift (TailLift)`;
	}),
	z.literal(5).transform(function map() {
		return `ForkLift`;
	}),
	z.literal(6).transform(function map() {
		return `Two Drivers`;
	}),
	z.literal(7).transform(function map() {
		return `GPS`;
	}),
	z.literal(8).transform(function map() {
		return `Multi temperature refrigerator`;
	}),
	z.literal(10).transform(function map() {
		return `Crane mounted on the truck HDS`;
	}),
	z.literal(11).transform(function map() {
		return `Round Trip`;
	}),
	z.literal(12).transform(function map() {
		return `Pallet Lifter (Pallet Jack)`;
	}),
	z.literal(13).transform(function map() {
		return `Waste Certificate (A plate)`;
	}),
	z.literal(14).transform(function map() {
		return `Ramp Height`;
	}),
]);
