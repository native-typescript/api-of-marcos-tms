import {z} from "zod";
const schemaOfDateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z
		.string()
		.nonempty()
		.transform(function parseDate(date) {
			const parsedDate: Date = new Date(date);
			return parsedDate;
		})
		.pipe(z.date());
export {schemaOfDateOfDataOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient};
