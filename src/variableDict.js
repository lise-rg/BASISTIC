export { VariableDict };

class Variable {
  /**
   * 
   * @param {string} name 
   * @param {string} type ('integer', 'real', 'string', 'non')
   * @param {*} value 
   */
  constructor(name, type, value) {
    this.name = name;
    this.type = type; 
    this.value = value;
  }
}

class VariableDict {

  constructor() {
    this.dict = [];
    this.size = 0;
  }

  /**
   * 
   * @param {string} name 
   * @param {string} type 
   * @param {*} value 
   */
  add(name, type, value) {
    this.dict.push(new Variable(name, type, value));
    this.size++;
  }

  /**
   * 
   * @param {string} name 
   */
  remove(name) {
    for (let i = 0; i < this.size; i++) {
      if (this.dict[i].name === name) {
        this.dict.splice(i, 1);
      }
    }
    size--;
  }

  /**
   * 
   * @param {string} name 
   * @returns 
   */
  contains(name) {
    for (let i = 0; i < this.size; i++) {
      if (this.dict[i].name === name)
        return true;
    }
    return false;
  }

  /**
   * 
   * @param {string} name 
   * @returns 
   */
  getType(name) {
    let i = 0;
    while (i < this.size && this.dict[i].name !== name) {
      i++;
    }
    return this.dict[i].type;
  }

  /**
   * 
   * @param {string} name 
   * @param {*} value 
   */
  assign(name, value) {
    let i = 0;
    while (i < this.size && this.dict[i].name !== name) {
      i++;
    }
    this.dict[i].value = value;
  }

  /**
   * 
   * @param {string} name 
   * @returns 
   */
  getValue(name) {
    let i = 0;
    while (i < this.size && this.dict[i].name !== name) {
      i++;
    }
    return this.dict[i].value;
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      console.log(this.dict[i].name + '\t|' + this.dict[i].type + '\t|' + this.dict[i].value + '\t');
    }
  }
}