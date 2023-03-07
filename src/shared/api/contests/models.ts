export type Contest = {
	id: number;
	event: string;
	time: string;
	score: number;
	userName: string;
	nickname?: string;
	opponentScore?: number;
	opponentName?: string;
	competitionPlace?: number;
};

export type ContestRound = {
	eventName: string;
	score: number;
	shotsArray: [];
};
