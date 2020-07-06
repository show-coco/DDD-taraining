import FizzBuzz from '../domain/FizzBuzz';
import { runFizzBuzz } from './FizzBuzzUsecase';

const mockOutput = jest.fn();

let mockCheckFizzBuzz = jest.fn();
jest.mock('../domain/FizzBuzz', () => {
  return jest.fn().mockImplementation(() => {
    return { checkFizzBuzz: mockCheckFizzBuzz };
  });
});

beforeEach(() => {
  FizzBuzz.mockClear();
  mockCheckFizzBuzz.mockClear();
  mockOutput.mockClear();
});

describe('runFizzBuzz', () => {
  it('finishes the process if FizzBuzz.checkFizzBuzz() returns "FizzBuzz"', () => {
    // expect that checkFizzBuzz is called only one time
    mockCheckFizzBuzz = jest.fn(() => 'FizzBuzz');
    runFizzBuzz(mockOutput);
    expect(mockCheckFizzBuzz.mock.calls.length).toBe(1);
  });

  it('throws an error if FizzBuzz.checkFizzBuzz() does not return "FizzBuzz"', () => {
    mockCheckFizzBuzz = jest.fn(() => '');
    try {
      runFizzBuzz(mockOutput);
    } catch(e) {
      expect(e.message).toBe('Did not return error in 1000 times');
    }
  });

  it('call output 1000 times if FizzBuzz.checkFizzBuzz() does not return "FizzBuzz"', () => {
    mockCheckFizzBuzz = jest.fn(() => '');
    try {
      runFizzBuzz(mockOutput);
    } catch {
      expect(mockOutput.mock.calls.length).toBe(1000);
    }
  });

  // it('calls FizzBuzz.checkFizzBuzz() random times', () => {
  //   runFizzBuzz(mockOutput);
  //   const numberOf1stTry = mockCheckFizzBuzz.mock.calls.length;
  //   mockCheckFizzBuzz.mockClear();
  //   runFizzBuzz(mockOutput);
  //   const numberOf2ndTry = mockCheckFizzBuzz.mock.calls.length;
  //   expect(numberOf1stTry).not.toBe(numberOf2ndTry);
  // });

  // it('callback 100 times', () => {
  //   runFizzBuzz(mockOutput);
  //   expect(mockOutput.mock.calls.length).toBe(100);
  // });
  // it('calls FizzBuzz constructer 1 times', () => {
  //   runFizzBuzz(mockOutput);
  //   expect(FizzBuzz).toHaveBeenCalledTimes(1);
  // });
  // it('calls FizzBuzz.checkFizzBuzz() 100 times', () => {
  //   runFizzBuzz(mockOutput);
  //   expect(FizzBuzz.mock.instances[0].checkFizzBuzz.mock.calls.length).toBe(100);
  // });
});
