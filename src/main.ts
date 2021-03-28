export class BowlingGame {
  private _score = 0;
  private _firstLaunchInFrame = true;
  private _scoreInFrame = 0;
  private _isSpare = false;
  private _isStrike = false;

  get score() {
    return this._score;
  }

  public countThrow(pinsDown: number) {
    if (this._firstLaunchInFrame) {
      this._scoreInFrame = pinsDown;
      pinsDown += this.calculateSparesAndStrikesExtraPoints(pinsDown);
    }

    this._isSpare = this._scoreInFrame + pinsDown === 10;

    if (pinsDown === 10) {
      this._isStrike = true;
    }

    this._firstLaunchInFrame = !this._firstLaunchInFrame || this._isStrike;
    this._score += pinsDown;
  }

  private calculateSparesAndStrikesExtraPoints = (pinsDown: number): number => {
    if (this._isSpare || this._isStrike) {
      this._isSpare = false;
      return pinsDown;
    }
    return 0;
  };
}
