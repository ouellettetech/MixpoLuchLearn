
import { ReversePipe } from './reverse.pipe';
describe('reversePipe', () => {

  it('should reverse Hello', () => {
      let reversePipe = new ReversePipe();
      expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
