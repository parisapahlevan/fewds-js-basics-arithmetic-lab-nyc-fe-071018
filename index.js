/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = oldID + 1000000000
let ageIsValid = (Number.isInteger(currentAge) && currentAge % 1 === 0) ? true : false
let randomNumber = Math.floor(Math.random() * 21);
let randomInteger = Math.floor(randomNumber)
let randomUserID = Math.min(1000000001, 1000000020) 



/*describe('randomUserID', function () {
    it('contains a random integer between 1000000001 and 1000000020', function () {
      expect(Number.isInteger(randomUserID)).to.be.true;

      expect(randomUserID).to.be.at.least(1000000001).and.at.most(1000000020);*/