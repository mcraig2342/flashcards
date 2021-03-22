const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should be able to store a guess', function() {
    const turn = new Turn('dog');
    expect(turn.guess).to.equal('dog');
  });

  it.skip('should be able to store a new card', function() {
    const card = new Card();
    const turn = new Turn('dog', card);
    expect(turn.currentCard).to.equal(card);
  });

  it.skip('should be able to return the guess', function() {
    const turn = new Turn('dog');
    expect(turn.returnGuess()).to.equal('dog');
  });

  it.skip('should be able to return the card', function() {
    const card = new Card();
    const turn = new Turn('dog', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it.skip('should be able to check if the guess is correct', function() {
    const card = new Card(1, "favorite animal", ['dog', 'cat', 'fish'], 'dog');
    const turn = new Turn('dog', card);
    expect(turn.evaluateGuess()).to.equal(true);
    const card2 = new Card(2, "favorite animal", ['dog', 'cat', 'fish'], 'dog');
    const turn2 = new Turn('cat');
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it.skip('should be able to give the user feedback', function() {
    const card = new Card(1, "favorite animal", ['dog', 'cat', 'fish'], 'dog');
    const turn = new Turn('dog', card);
    expect(turn.giveFeedback()).to.equal('correct!')
    const card2 = new Card(2, "favorite animal", ['dog', 'cat', 'fish'], 'dog');
    const turn2 = new Turn('cat');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });

});
