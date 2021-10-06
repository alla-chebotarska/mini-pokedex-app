export default class Ability {
  private name: string;
  private isHidden: boolean;

	constructor(name: string, isHidden: boolean) {
		this.name = name;
		this.isHidden = isHidden;
	}

	public getName(): string {
		return this.name;
	}

	public getIsHidden(): boolean {
		return this.isHidden;
	}


}

	
