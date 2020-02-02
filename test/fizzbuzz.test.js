import { expect } from 'chai'
import fizzbuzz from '../app/libs/fizzbuzz'

describe('FizzBuzz', function() {
    let output = fizzbuzz(15)
    it('should be an array', function(done) {
        expect(output).to.be.an('array')
        done()
    });

    it('should return a list of the correct size', function(done) {
        expect(output).to.lengthOf(15)
        done()
    });
    
    it('should return Fizz for multiples of 3', function(done){
        expect(output[2]).to.equals('fizz')
        expect(output[5]).to.equals('fizz')
        expect(output[8]).to.equals('fizz')
        done()
      });

      it('should return Buzz for multiples of 5', function(done){
        expect(output[4]).to.equals('buzz')
        expect(output[9]).to.equals('buzz')
        done()
      });

      it('should return fizzbuzz for multiples of 3 & 5', function(done){
        expect(output[14]).to.equals('fizzbuzz')
        done()
      });
});
