(function() {
let template = document.createElement("template");
template.innerHTML = `
<style>
:host {
border-radius: 55px;
border-width: 40px;
border-color: red;
border-style: solid;
display: block;
}
</style>
`;
class ColoredBox extends HTMLElement {
constructor() {
super();
let shadowRoot = this.attachShadow({mode: "open"});
shadowRoot.appendChild(template.content.cloneNode(true));
this.addEventListener("click", event => {
var event = new Event("onClick");
this.dispatchEvent(event);
});
this._props = {};
}
onCustomWidgetBeforeUpdate(changedProperties) {
this._props = { ...this._props, ...changedProperties };
}
onCustomWidgetAfterUpdate(changedProperties) {
if ("color" in changedProperties) {
this.style["background-color"] = changedProperties["color"];
}
if ("opacity" in changedProperties) {
this.style["opacity"] = changedProperties["opacity"];
}
}
}
customElements.define("com-sap-sample-coloredbox", ColoredBox);
})();
