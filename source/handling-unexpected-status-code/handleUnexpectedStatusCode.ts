export function handleUnexpectedStatusCode(response: Response): never {
	console.error(response);
	const error: Error = new Error(
		`Unexpected status code: ${response.status.toString(10)}`,
	);
	throw error;
}
