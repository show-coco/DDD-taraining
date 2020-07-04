import { presentFizzBuzz } from './FizzBuzzPresenter';
import { runFizzBuzz } from '../usecase/FizzBuzzUsecase';

jest.mock('../usecase/FizzBuzzUsecase');

describe('presentFizzBuzz', () => {
  it('call runFizzBuzz()', () => {
    presentFizzBuzz();
    expect(runFizzBuzz.mock.calls.length).toBe(1);
  });
})