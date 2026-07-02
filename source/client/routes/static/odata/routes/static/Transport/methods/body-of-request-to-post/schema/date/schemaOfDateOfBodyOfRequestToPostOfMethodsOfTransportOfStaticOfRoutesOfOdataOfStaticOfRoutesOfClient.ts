import {z} from "zod";
export const schemaOfDateOfBodyOfRequestToPostOfMethodsOfTransportOfStaticOfRoutesOfOdataOfStaticOfRoutesOfClient =
	z.date().transform<string>(function parseDate(date: Date): string {
		const year: string = date.getFullYear().toString(10).padStart(4, `0`);
		const month: string = (date.getMonth() + 1).toString(10).padStart(2, `0`);
		const day: string = date.getDate().toString(10).padStart(2, `0`);
		const hours: string = date.getHours().toString(10).padStart(2, `0`);
		const minutes: string = date.getMinutes().toString(10).padStart(2, `0`);
		const seconds: string = date.getSeconds().toString(10).padStart(2, `0`);
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	});
