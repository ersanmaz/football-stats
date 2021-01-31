import {League} from './league.model';

describe('League', () => {
  it('should create an instance', () => {
    expect(new League('1', 'some league', 'unknown', 'unknown', 'unknown')).toBeTruthy();
  });
});
