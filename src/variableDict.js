export { VariableDict };

class Variable {
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

  add(name, type, value) {
    this.dict.push(new Variable(name, type, value));
    this.size++;
  }

  remove(name) {
    for (let i = 0; i < this.size; i++) {
      if (this.dict[i].name === name) {
        this.dict.splice(i, 1);
      }
    }
    size--;
  }

  contains(name) {
    for (let i = 0; i < this.size; i++) {
      if (this.dict[i].name === name)
        return true;
    }
    return false;
  }

  getType(name) {
    let i = 0;
    while (i < this.size && this.dict[i].name !== name) {
      i++;
    }
    return this.dict[i].type;
  }

  assign(name, value) {
    let i = 0;
    while (i < this.size && this.dict[i].name !== name) {
      i++;
    }
    this.dict[i].value = value;
  }

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