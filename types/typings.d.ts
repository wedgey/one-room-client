declare module '*.json' {
	const value: any;
	export default value;
}

declare module '*.jpg';
declare module '*.png';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
