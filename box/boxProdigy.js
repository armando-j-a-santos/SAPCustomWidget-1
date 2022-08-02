<!DOCTYPE HTML>
<html>
  
<body style="text-align:center;">
    <h1 style="color:green;">
        GeeksforGeeks
    </h1>
  
    <p>
        HTML | customElements define() method
    </p>
  
    <button onclick="Geeks();">
        click here
    </button>
  
    <p id="arr"></p>
  
    <script>
        var arr =
            document.getElementById("arr");
  
        // Function to define the element
        function Geeks() {
            class CustomEl extends HTMLElement {
                constructor() {
                    super();
                    this.attachShadow({ mode: 'open' });
                    this.shadowRoot.innerHTML = `
            <h1 style="color:green;">  
            GeeksforGeeks Custom
            Element Data
                </h1>
            `;
                }
            }
  
            // Use the define() method to define
            // a new element
            window.customElements.define(
                'gfg-custom-element', CustomEl);
        } 
    </script>
    <gfg-custom-element></gfg-custom-element>
</body>
  
</html>
