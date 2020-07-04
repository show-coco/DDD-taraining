import FizzBuzz from '../domain/FizzBuzz';
import { runFizzBuzz } from './FizzBuzzUsecase';

jest.mock('../domain/FizzBuzz');

const mockCallback = jest.fn();

beforeEach(() => {
  FizzBuzz.mockClear();
});

describe('runFizzBuzz', () => {
  it('callback 100 times', () => {
    runFizzBuzz(mockCallback);
    expect(mockCallback.mock.calls.length).toBe(100);
  });
  it('calls FizzBuzz constructer 1 times', () => {
    runFizzBuzz(mockCallback);
    expect(FizzBuzz).toHaveBeenCalledTimes(1);
  });
  it('calls FizzBuzz.checkFizzBuzz() 100 times', () => {
    runFizzBuzz(mockCallback);
    expect(FizzBuzz.mock.instances[0].checkFizzBuzz.mock.calls.length).toBe(100);
  });
})