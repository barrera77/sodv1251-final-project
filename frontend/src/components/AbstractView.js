export default class {
  constructor(params) {
    this.params = params;
  }
  setTitle(title) {
    document.title = title;
  }
  async getHtml() {
    return "";
  }

  async postRender() {
    //manage DOM post-rendering logic, e.g attach event listeners, etc.
  }
}
