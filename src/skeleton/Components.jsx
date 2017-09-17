import App_Endpoints from "./App_Endpoints";
const Components = [{
    name: "Content",
    list: [{
        name: "Text",
        to: App_Endpoints.TEXT
    }, {
        name: "Clipped Text",
        to: App_Endpoints.CLIPPED_TEXT
    }]
}, {
    name: "Form",
    list: [{
        name: "Combobox",
        to: App_Endpoints.COMBOBOX
    }, {
        name: "Push Button",
        to: App_Endpoints.PUSH_BUTTON
    }, {
        name: "Toggle Button",
        to: App_Endpoints.TOGGLE_BUTTON
    }, {
        name: "Checkbox",
        to: App_Endpoints.CHECKBOX
    }, {
        name: "Radio",
        to: App_Endpoints.RADIO
    }, {
        name: "Text Field",
        to: App_Endpoints.TEXT_FIELD
    }, {
        name: "Number Field",
        to: App_Endpoints.NUMBER_FIELD
    }, {
        name: "Time Field",
        to: App_Endpoints.TIME_FIELD
    }]
}, {
    name: "Layout",
    list: [{
        name: "Horizontal Layout",
        to: App_Endpoints.HORIZONTAL_LAYOUT
    }, {
        name: "Vertical Layout",
        to: App_Endpoints.VERTICAL_LAYOUT
    }]
}, {
    name: "Navigation",
    list: [{
        name: "Horizontal Menu",
        to: App_Endpoints.HORIZONTAL_MENU
    }, {
        name: "Path",
        to: App_Endpoints.PATH
    }]
}, {
    name: "Panel",
    list: [{
        name: "Loading Mask",
        to: App_Endpoints.LOADING_MASK
    }, {
        name: "Tree",
        to: App_Endpoints.TREE
    }]
}, {
    name: "Window",
    list: [{
        name: "Modal",
        to: App_Endpoints.MODAL
    }, {
        name: "Window",
        to: App_Endpoints.WINDOW
    }]
}];
export default Components;