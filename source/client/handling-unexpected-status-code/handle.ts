export function handle(response: Response): never {
	console.error(response);
	const error: Error = new Error(
		`Got an unexpected status code of "${response.status.toString(10)}".`,
	);
	throw error;
}
