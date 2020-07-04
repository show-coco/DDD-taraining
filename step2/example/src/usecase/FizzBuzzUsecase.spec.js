import FizzBuzz from '../domain/FizzBuzz';
import { randomFizzBuzz } from './FizzBuzzUsecase';

jest.mock('../domain/FizzBuzz');

const mockCallback = jest.fn();

beforeEach(() => {
  FizzBuzz.mockClear();
});

describe('randomFizzBuzz', () => {
  it('callback 100 times', () => {
    randomFizzBuzz(mockCallback);
    expect(mockCallback.mock.calls.length).toBe(100);
  });
  it('calls FizzBuzz constructer 1 times', () => {
    randomFizzBuzz(mockCallback);
    expect(FizzBuzz).toHaveBeenCalledTimes(1);
  });
  it('calls FizzBuzz.checkFizzBuzz() 100 times', () => {
    randomFizzBuzz(mockCallback);
    expect(FizzBuzz.mock.instances[0].checkFizzBuzz.mock.calls.length).toBe(100);
  });
})