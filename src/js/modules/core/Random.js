export default class Random {
  constructor(seed = 886) {
    this.x = 123;
    this.y = 362;
    this.z = 521;
    this.w = seed;
  }

  // XorShift algorithm
  xOrShift() {
    const t = this.x ^ (this.x << 11); // x XOR xを11bit左にシフトした値
    this.x = this.y; // xにyを代入
    this.y = this.z; // yにzを代入
    this.z = this.w; // zにwを代入
    // wを更新: w XOR wを19bit右にシフトした値 XOR (t XOR tを右に8bitシフトした値)
    return (this.w = this.w ^ (this.w >>> 19) ^ (t ^ (t >>> 8)));
  }

  // min 以上 max 以下の乱数を生成する
  nextInt(min, max) {
    const r = Math.abs(this.xOrShift());
    console.log(r, "🍓");
    return min + (r % (max + 1 - min));
  }
}
