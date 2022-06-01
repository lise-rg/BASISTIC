export { OutputConsole };

class OutputConsole {

  /**
   * 
   * @param {string} element the id of the console element 
   */
  constructor(element) {
    this.element = element;
  }

  /**
     * prints text to the console
     * @param {string} msg
     * @param {boolean} nl prints a newline after the message if set to true
     */
  print(msg, nl = true) {
    document.getElementById(this.element).value += msg;
    if (nl)
      document.getElementById(this.element).value += '\n';
    document.getElementById(this.element).scrollTop = document.getElementById(this.element).scrollHeight;
  }
}