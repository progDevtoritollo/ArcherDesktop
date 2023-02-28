export type Event = {
	id: number;
	event: string;
	time: string;
	score: number;
	userName: string;
	nickname?: string;
	userPhoto?: string;
	opponentScore?: number;
	opponentName?: string;
	competitionPlace?: number;
};
