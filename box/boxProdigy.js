const future = ["hello-world"];

let customElementsRegistry = window.customElements;
const registry = {};
registry.define = function(name, constructor, options) {
  console.log('hijacked')
  if (future.includes(name)) {
    customElementsRegistry.define(name, constructor, options);
  }
}
Object.defineProperty(window, "customElements", {
  get() {
    return registry
  }
})

window.customElements.define("hello-world", class HelloWorld extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = "Hello World"
  }
});
