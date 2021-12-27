import Player from './Player';

export interface IPlayerList {
	// index: uuid
	[index: string]: Player;
}

export default class PlayerList {
	public playerList: IPlayerList;

	constructor() {
		this.playerList = {};
	}

	public removeWithPlayerId(id: string) {
		delete this.playerList[id];
	}
}
