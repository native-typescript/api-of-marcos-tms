export type Response<Body, StatusCode extends number> = {
	readonly body: Body;
	readonly status: StatusCode;
};
