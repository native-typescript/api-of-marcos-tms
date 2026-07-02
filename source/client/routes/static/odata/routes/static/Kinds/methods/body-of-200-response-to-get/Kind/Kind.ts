export type Kind = {
	/**
	 * Archiwalny
	 */
	readonly archive: false;
	/**
	 * Id
	 */
	readonly id: number;
	/**
	 * Nazwa
	 */
	readonly name: string;
	readonly shipmentKindId: null | number;
	/**
	 * Nazwa skrócona
	 */
	readonly shortName: string;
	/**
	 * Typ rodzaju
	 */
	readonly type: 4 | 5 | 7;
};
