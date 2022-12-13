import MathUtils from "./core/MathUtils";
export default class Fluctuation {
  constructor(_seed, _selector, _cssVal) {
    this.seed = _seed;
    this.cssVal = _cssVal;
    this.bindUpdate = this.update.bind(this);
    this.elem = document.querySelector(_selector);
    this.bindUpdate();
  }

  update() {
    // 値の更新
    this.seed = this.fluctuate(this.seed);

    this.elem.style.setProperty(this.cssVal, this.seed * 255);
    setTimeout(() => {
      this.bindUpdate();
    }, 100);
  }

  fluctuate(x) {
    if (x < 0.5) {
      x = x + 2 * x * x;
    } else {
      x = x - 2 * (1.0 - x) * (1.0 - x);
    }
    if (x < 0.05 || x > 0.95) {
      x = MathUtils.randomRange(100, 900) / 1000.0;
    }
    return x;
  }
}
