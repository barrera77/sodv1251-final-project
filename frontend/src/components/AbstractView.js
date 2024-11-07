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
}

/* export default class {
  constructor(params) {
    this.params = params;
  }

  // Set the document title
  setTitle(title) {
    document.title = title;
  }

  // Method to pre-render HTML, child classes can override this method
  async preRender() {
    return ""; // Default implementation can be empty or some base HTML structure
  }

  // Main method to get HTML content
  async getHtml() {
    // Perform pre-render logic before returning HTML
    const preRenderedHtml = this.preRender();
    return preRenderedHtml;
  }
}
 */
