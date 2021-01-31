export class Team {
  constructor(
    private _id: string,
    private _name: string,
    private _logo: string,
    private _position: string,
    private _playedGames: string,
    private _form: string,
    private _won: string,
    private _draw: string,
    private _lost: string,
    private _points: string,
    private _goalsFor: string,
    private _goalsAgainst: string,
    private _goalsDifference: string
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get logo(): string {
    return this._logo;
  }

  get position(): string {
    return this._position;
  }

  get playedGames(): string {
    return this._playedGames;
  }

  get form(): string {
    return this._form;
  }

  get won(): string {
    return this._won;
  }

  get draw(): string {
    return this._draw;
  }

  get lost(): string {
    return this._lost;
  }

  get points(): string {
    return this._points;
  }

  get goalsFor(): string {
    return this._goalsFor;
  }

  get goalsAgainst(): string {
    return this._goalsAgainst;
  }

  get goalsDifference(): string {
    return this._goalsDifference;
  }
}
