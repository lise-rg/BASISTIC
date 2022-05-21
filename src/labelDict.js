export { LabelDict };

class Label {
  constructor(name, node) {
    this.name = name;
    this.node = node;
  }
}

class LabelDict {
  constructor() {
    this.dict = [];
    this.size = 0;
  }

  /**
   * 
   * @param {string} name 
   * @param {RuleNode} node 
   */
  add(name, node) {
    this.dict.push(new Label(name, node));
    this.size++;
  }

  /**
   * 
   * @param {string} name 
   * @returns true if dictionnary contains label with given name
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
   * @returns the node corresponding to the label
   */
  getNode(name) {
    for (let i = 0; i < this.size; i++) {
      if (this.dict[i].name === name)
        return this.dict[i].node;
    }

    return null;
  }
}