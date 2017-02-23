import func from '../../../../src/evaluate-by-operator/operator/power';

describe('power operator', () => {
  it('should set SYMBOL const', () => {
    expect(func.SYMBOL).to.eq('^');
  });

  it('should correctly process values', () => {
    expect(func(2, 8)).to.eq(256);
    expect(func('2', 8)).to.eq(256);
    expect(func('2', '8')).to.eq(256);
    expect(func('2', '8', 6, 0.4)).to.eq(256);
    expect(() => func('foo', ' ', 'bar', ' baz')).to.throw('VALUE');
    expect(() => func('foo', 2)).to.throw('VALUE');
  });
});
