import { BowlingGame } from './main';

describe('BowlingGame', () => {
  let bowlingGame: BowlingGame;
  beforeEach(() => {
    bowlingGame = new BowlingGame();
  });

  describe('open frames only', () => {
    it('score is 0 when all throws went to the gutter', () => {
      gutterThrows(20);
      expect(bowlingGame.score).toEqual(0);
    });

    it('score is 1 when only one pin was knocked down', () => {
      gutterThrows(19);
      bowlingGame.countThrow(1);
      expect(bowlingGame.score).toEqual(1);
    });

    it('score is 11 in 4 succedeed throws', () => {
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(3);
      bowlingGame.countThrow(2);
      bowlingGame.countThrow(1);
      gutterThrows(16);
      expect(bowlingGame.score).toEqual(11);
    });

    it('score is 15 in 5 throws', () => {
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(3);
      bowlingGame.countThrow(0);
      bowlingGame.countThrow(2);
      bowlingGame.countThrow(5);
      gutterThrows(15);
      expect(bowlingGame.score).toEqual(15);
    });
  });

  describe('open frames and spare(s)', () => {
    it('score is 16 with one spare and 3 pin down', () => {
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(3);
      gutterThrows(17);
      expect(bowlingGame.score).toEqual(16);
    });

    it('score is 22 with one spare and 4 succedeed throws', () => {
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(0);
      bowlingGame.countThrow(3);
      bowlingGame.countThrow(7);
      bowlingGame.countThrow(1);
      bowlingGame.countThrow(1);
      gutterThrows(13);
      expect(bowlingGame.score).toEqual(22);
    });

    it('score is 22 with 2 spare and 3 succedeed throws', () => {
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(0);
      bowlingGame.countThrow(0);
      bowlingGame.countThrow(7);
      bowlingGame.countThrow(3);
      bowlingGame.countThrow(1);
      gutterThrows(13);
      expect(bowlingGame.score).toEqual(22);
    });
  });

  describe('open frames and strike(s)', () => {
    it('score is 10 with 1 strike', () => {
      bowlingGame.countThrow(10);
      gutterThrows(19);
      expect(bowlingGame.score).toEqual(10);
    });

    it('score is 16 with 1 strike and 2 throws', () => {
      bowlingGame.countThrow(10);
      bowlingGame.countThrow(1);
      bowlingGame.countThrow(2);
      gutterThrows(17);
      expect(bowlingGame.score).toEqual(16);
    });
  });

  describe('open frames, spares and strikes', () => {
    it('score is 34 with 1 strike and 2 spares', () => {
      bowlingGame.countThrow(10);
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(2);
      expect(bowlingGame.score).toEqual(34);
    });

    it('score is 70 with 2 strike and 2 spares', () => {
      bowlingGame.countThrow(10);
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(10);
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(5);
      expect(bowlingGame.score).toEqual(70);
    });
  });

  const gutterThrows = (numberOfThrows: number) => {
    [...Array(numberOfThrows)].map(() => {
      bowlingGame.countThrow(0);
    });
  };
});
