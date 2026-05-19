import type {hours} from "./hours/module.ts";
import type {minutes} from "./minutes/module.ts";
export type Time = {
	readonly hours: hours.Hours;
	readonly minutes: minutes.Minutes;
};
