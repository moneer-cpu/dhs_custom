/** @odoo-module **/

// Import the core Odoo module dependencies
import { Component, xml, onMounted } from "@odoo/owl";
import { registry } from "@web/core/registry";

// jQuery is already available via the Odoo framework dependencies
const $ = require('jquery');

class jQueryExampleComponent extends Component {
    setup() {
        onMounted(() => {
            // Now you can use jQuery methods
            this.highlightElement();
            console.log("jQuery version running in Odoo:", $.fn.jquery);
        });
    }

    highlightElement() {
        // Use jQuery syntax within your Odoo component
        $(this.el).css('border', '2px solid red');
        $(this.el).find('.my-inner-div').text('I was modified by jQuery!');
    }
}

jQueryExampleComponent.template = xml`
    <div class="odoo-jquery-component">
        <h1>Odoo Component</h1>
        <div class="my-inner-div">Original Text</div>
    </div>
`;

// Register the component if needed
// registry.category("actions").add("jQueryExampleAction", jQueryExampleComponent);
