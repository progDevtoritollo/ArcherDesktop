export interface Shot {
	shotNumber: number;
	x: number;
	y: number;
	score: number;
}

export interface shotsSliceState {
	items: Shot[];
}
