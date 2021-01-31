export class League {

  constructor(private _id: string,
              private _title: string,
              private _country: string,
              private _countryCode: string,
              private _logo: string) {
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get country(): string {
    return this._country;
  }

  get countryCode(): string {
    return this._countryCode;
  }

  get logo(): string {
    return this._logo;
  }
}
