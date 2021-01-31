import {Team} from './team.model';

export class Table {

  constructor(private _id: string,
              private _name: string,
              private _logo: string,
              private _teams: Team[]) {
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get logo(): string {
    return this._logo;
  }

  get teams(): Team[] {
    return this._teams;
  }
}
