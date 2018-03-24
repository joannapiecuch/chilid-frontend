import {OrderByPipe} from './orderByPipe';


describe('Pipe: Default', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('orders data properly when not sorted', () => {
    const younger = {creationDate: new Date('2010-01-01T00:00:00+00:00')};
    const older = {creationDate: new Date('2000-01-01T00:00:00+00:00')};
    const sorted = pipe.transform([younger, older]);

    expect(sorted[0]).toBe(older);
    expect(sorted[1]).toBe(younger);
  });

  it('orders data properly when already sorted', () => {
    const younger = {creationDate: new Date('2010-01-01T00:00:00+00:00')};
    const older = {creationDate: new Date('2000-01-01T00:00:00+00:00')};
    const sorted = pipe.transform([older, younger]);

    expect(sorted[0]).toBe(older);
    expect(sorted[1]).toBe(younger);
  });

  it('orders data properly when dates are the same', () => {
    const date1 = {creationDate: new Date('2010-01-01T00:00:00+00:00')};
    const date2 = {creationDate: new Date('2010-01-01T00:00:00+00:00')};
    const date3 = {creationDate: new Date('2000-01-01T00:00:00+00:00')};
    const sorted = pipe.transform([date1, date3, date2]);

    expect(sorted[0]).toBe(date3);
    expect(sorted[1]).toBe(date1);
    expect(sorted[2]).toBe(date2);
  });
});
