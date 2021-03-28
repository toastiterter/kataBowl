export class BowlingGame {
  private _score = 0;
  private _firstLaunchInFrame = true;
  private _scoreInFrame = 0;
  private _isSpare = false;
  private _isStrike = false;

  get score() {
    return this._score;
  }

  public countThrow(pinDown: number) {
    if (this._firstLaunchInFrame) {
      this._scoreInFrame = pinDown;

      if (this._isSpare || this._isStrike) {
        pinDown += pinDown;
        this._isSpare = false;
      }
    }

    if (!this._firstLaunchInFrame && this._scoreInFrame + pinDown === 10) {
      this._isSpare = true;
    }

    if (this._isStrike && !this._firstLaunchInFrame) {
      pinDown += pinDown;
      this._isStrike = false;
    }

    if (pinDown === 10) {
      this._isStrike = true;
    }

    this._firstLaunchInFrame = !this._firstLaunchInFrame;

    if (this._isStrike) {
      this._firstLaunchInFrame = true;
    }

    this._score += pinDown;
  }
}
