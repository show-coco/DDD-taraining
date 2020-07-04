import { runFizzBuzz } from './FizzBuzzPresenter';
import { randomFizzBuzz } from '../usecase/FizzBuzzUsecase';

jest.mock('../usecase/FizzBuzzUsecase');

describe('runFizzBuzz', () => {
  it('call randomFizzBuzz()', () => {
    runFizzBuzz();
    expect(randomFizzBuzz.mock.calls.length).toBe(1);
  });
})