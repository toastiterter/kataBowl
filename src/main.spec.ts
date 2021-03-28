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
      bowlingGame.countThrow(1);
      gutterThrows(19);
      expect(bowlingGame.score).toEqual(1);
    });

    it('score is correct for a typical game', () => {
      bowlingGame.countThrow(5);
      bowlingGame.countThrow(3);
      gutterThrows(10);
      bowlingGame.countThrow(2);
      bowlingGame.countThrow(1);
      gutterThrows(6);
      expect(bowlingGame.score).toEqual(11);
    });
  });

  describe('open frames and spare(s)', () => {
    it('score is correct for one spare only', () => {
      spare(5, 5);
      bowlingGame.countThrow(3);
      gutterThrows(17);
      expect(bowlingGame.score).toEqual(16);
    });

    it('score is correct for multiple spares', () => {
      spare(5, 5);
      gutterThrows(2);
      spare(7, 3);
      bowlingGame.countThrow(1);
      gutterThrows(13);
      expect(bowlingGame.score).toEqual(22);
    });
  });

  describe('open frames and strike(s)', () => {
    it('score is correct for one strike and gutter throws only', () => {
      strike();
      gutterThrows(19);
      expect(bowlingGame.score).toEqual(10);
    });

    it('score is correct with 1 strike and 2 throws', () => {
      strike();
      bowlingGame.countThrow(1);
      bowlingGame.countThrow(2);
      gutterThrows(17);
      expect(bowlingGame.score).toEqual(16);
    });
  });

  describe('open frames, spares and strikes', () => {
    it('score is correct with 1 strike and 2 spares', () => {
      strike();
      spare(5, 5);
      bowlingGame.countThrow(2);
      expect(bowlingGame.score).toEqual(34);
    });

    it('score is correct with 2 strike and 2 spares', () => {
      strike();
      spare(5, 5);
      strike();
      spare(5, 5);
      expect(bowlingGame.score).toEqual(70);
    });
  });

  const gutterThrows = (numberOfThrows: number) => {
    [...Array(numberOfThrows)].map(() => {
      bowlingGame.countThrow(0);
    });
  };

  const spare = (pinsDownOnFirstThrow: number, pinsDownOnSecondThrow: number) => {
    bowlingGame.countThrow(pinsDownOnFirstThrow);
    bowlingGame.countThrow(pinsDownOnSecondThrow);
  };

  const strike = () => {
    bowlingGame.countThrow(10);
  };
});
