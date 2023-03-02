export interface Shot {
	shotNumber: number;
	x: number;
	y: number;
	score: number;
}
export enum contestTypeEnum {
	duel = 'duel',
	round = 'round',
}

export interface contestSliceState {
	items: Shot[];
	contestType: string;
}
