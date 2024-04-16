/**
 * @export
 */
export const LocalesEnum = {
	CS: "cs",
} as const;

export type LocalesEnum = (typeof LocalesEnum)[keyof typeof LocalesEnum];
