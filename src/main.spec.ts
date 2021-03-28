import { BowlingGame } from './main';

describe('bowlingGame', () => {
  const addThrows = (numberOfThrows: number, numberOfPinsDown: number) => {
    [...Array(numberOfThrows)].map(() => {
      bowlingGame.countThrow(numberOfPinsDown);
    });
  };

  let bowlingGame: BowlingGame;
  beforeEach(() => {
    bowlingGame = new BowlingGame();
  });

  it('score is 0 when all throws went to the gutter', () => {
    addThrows(20, 0);
    expect(bowlingGame.score).toEqual(0);
  });

  it('return 1 score when only one throw touch only one pin', () => {
    addThrows(19, 0);
    bowlingGame.countThrow(1);
    expect(bowlingGame.score).toEqual(1);
  });

  it('score is 16 with one spare and 3 pin down', () => {
    addThrows(1, 5);
    addThrows(1, 5);
    addThrows(1, 3);
    addThrows(17, 0);
    expect(bowlingGame.score).toEqual(16);
  });

  it('score is 11 in 4 succedeed throws', () => {
    addThrows(1, 5);
    addThrows(1, 3);
    addThrows(1, 2);
    addThrows(1, 1);
    addThrows(16, 0);
    expect(bowlingGame.score).toEqual(11);
  });

  it('score is 15 in 5 throws', () => {
    addThrows(1, 5);
    addThrows(1, 3);
    addThrows(1, 0);
    addThrows(1, 2);
    addThrows(1, 5);
    addThrows(15, 0);
    expect(bowlingGame.score).toEqual(15);
  });

  it('score is 22 with one spare and 4 succedeed throws', () => {
    addThrows(1, 5);
    addThrows(1, 5);
    addThrows(1, 0);
    addThrows(1, 3);
    addThrows(1, 7);
    addThrows(1, 1);
    addThrows(1, 1);
    addThrows(13, 0);
    expect(bowlingGame.score).toEqual(22);
  });

  it('score is 22 with 2 spare and 3 succedeed throws', () => {
    addThrows(1, 5);
    addThrows(1, 5);
    addThrows(1, 0);
    addThrows(1, 0);
    addThrows(1, 7);
    addThrows(1, 3);
    addThrows(1, 1);
    addThrows(13, 0);
    expect(bowlingGame.score).toEqual(22);
  });

  it('score is 10 with 1 strike', () => {
    addThrows(1, 10);
    addThrows(19, 0);
    expect(bowlingGame.score).toEqual(10);
  });

  it('score is 16 with 1 strike and 2 throws', () => {
    addThrows(1, 10);
    addThrows(1, 1);
    addThrows(1, 2);
    addThrows(17, 0);
    expect(bowlingGame.score).toEqual(16);
  });

  it('score is 34 with 1 strike and 2 spares', () => {
    addThrows(1, 10);
    addThrows(1, 5);
    addThrows(1, 5);
    addThrows(1, 2);
    expect(bowlingGame.score).toEqual(34);
  });
  it('score is 70 with 2 strike and 2 spares', () => {
    addThrows(1, 10);
    addThrows(1, 5);
    addThrows(1, 5);
    addThrows(1, 10);
    addThrows(1, 5);
    addThrows(1, 5);
    expect(bowlingGame.score).toEqual(70);
  });
});
