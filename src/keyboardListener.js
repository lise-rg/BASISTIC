export { KeyboardListener };

class KeyboardListener {
  constructor() {
    this.pressedKeys = [];
    this.releasedKeys = [];
  }

  clearKeys() {
    this.pressedKeys = [];
    this.releasedKeys = [];
  }

  updatePressedKeys(event) {
    let key = event.key;
    this.pressedKeys[key] = true;
  }

  updateReleasedKeys(event) {
    let key = event.key;
    this.releasedKeys[key] = true;
  }

  isPressed(name) {
    if (this.pressedKeys[name] === undefined)
      return false;

    let res = this.pressedKeys[name];
    this.pressedKeys[name] = false;
    return res;
  }

  isReleased(name) {
    if (this.releasedKeys[name] === undefined)
      return false;

    let res = this.releasedKeys[name];
    this.releasedKeys[name] = false;
    return res;
  }
}