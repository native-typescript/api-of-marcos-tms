export type ResponseOfClient<Body, StatusCode extends number> = {
	readonly body: Body;
	readonly status: StatusCode;
};
