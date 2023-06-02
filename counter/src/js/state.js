let count = 0;

class State {
  get count() {
    return count;
  }
  set count(value) {
    value >= 0 ? (count = value) : (count = 0);
  }
}

export default new State();
