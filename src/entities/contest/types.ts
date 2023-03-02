export interface Shot {
	shotNumber: number;
	x: number;
	y: number;
	score: number;
}
export enum contestTypeEnum {
	duel = 'full target',
	round = 'triple',
}

export interface contestSliceState {
	items: Shot[];
	contestType: string;
}
