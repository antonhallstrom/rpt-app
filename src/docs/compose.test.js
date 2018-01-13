import { basic, compose } from './compose'

describe('compose', () => {
  it('return n functions', () => {
    //arrange
    const fn1 = jest.fn(() => 1)
    const fn2 = jest.fn(() => 1)

    //act
    const result = compose(fn1, fn2)
    result()
    //assert
    expect(result).toBeDefined()
    expect(fn1).toBeCalled()
    expect(fn2).toBeCalled()
  })
  it('return a result of two functions', () => {
    //arrange
    const fn1 = jest.fn(() => 1)
    const fn2 = jest.fn(() => 1)

    //act
    const result = basic(fn1, fn2)
    result()
    //assert
    expect(result).toBeDefined()
    expect(fn1).toBeCalled()
    expect(fn2).toBeCalled()
    expect(fn1).toBeCalledWith(1)
    expect(fn1).toHaveBeenLastCalledWith(1)
  })
})



