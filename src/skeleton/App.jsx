import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Body from "./Body";
import App_Props from "./App_Props";
import PushButtonExample from "../examples/PushButtonExample";
import WindowExample from "../examples/WindowExample";
import ModalExample from "../examples/ModalExample";

/**
 * @class
 * @prop {object} props
 */
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state[App_Props.COMBOBOX_1] = 1;
        this.state[App_Props.COMBOBOX_2] = 2;
        this.state[App_Props.COMBOBOX_3] = 3;
        this.state.pushButton = null;
        this.state[App_Props.TOGGLE_BUTTON_1] = false;
        this.state[App_Props.TOGGLE_BUTTON_2] = false;
        this.state[App_Props.TOGGLE_BUTTON_3] = false;
        this.state[App_Props.TOGGLE_BUTTON_4] = false;
        this.state[App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_1] = false;
        this.state[App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_2] = false;
        this.state[App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_3] = false;
        this.state[App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_4] = false;
        this.state[App_Props.TOGGLE_RADIO_GROUP_1] = 1;
        this.state[App_Props.TOGGLE_RADIO_GROUP_2] = null;
        this.state[App_Props.TOGGLE_RADIO_GROUP_3] = null;
        this.state[App_Props.TOGGLE_RADIO_GROUP_4] = null;
        this.state[App_Props.CHECKBOX_1] = false;
        this.state[App_Props.CHECKBOX_2] = false;
        this.state[App_Props.CHECKBOX_3] = false;
        this.state[App_Props.CHECKBOX_4] = false;
        this.state[App_Props.CHECKBOX_5] = false;
        this.state[App_Props.CHECKBOX_6] = false;
        this.state[App_Props.RADIO_1] = 3;
        this.state[App_Props.RADIO_2] = null;
        this.state[App_Props.RADIO_3] = null;
        this.state[App_Props.TEXT_FIELD_1] = null;
        this.state[App_Props.TEXT_FIELD_2] = null;
        this.state[App_Props.TEXT_FIELD_3] = null;
        this.state[App_Props.NUMBER_FIELD_1] = null;
        this.state[App_Props.NUMBER_FIELD_2] = null;
        this.state[App_Props.TIME_FIELD_1] = new Date(1970,0,1,12,34,0);
        this.state[App_Props.TIME_FIELD_2] = new Date(1970,0,1,0,0,0);
        this.state.window = null;
        this.state.modal = null;
        this.handleChangeState = this.handleChangeState.bind(this);
    }
    handleChangeState(componentName,key,value) {
        var me = this;

        console.log(componentName, " >> ",key, " >> ", value);

        // noinspection JSUnresolvedVariable
        if (componentName!==PushButtonExample.name &&
            componentName!==WindowExample.name &&
            componentName!==ModalExample.name) {
            me.setState({
                [key]: value
            });
        }
    }
    render() {
        const { state, handleChangeState } = this;
        return (
            <Switch>

                <Route exact path="/" render={(props) => <Nav appState={state} {...this.props}/> } />
                <Route path="/components/" render={(props) => <Body appState={state} appCallback={handleChangeState} {...this.props}/> } />
                <Route path="/examples/" render={(props) => <Body appState={state} appCallback={handleChangeState} {...this.props}/> } />

            </Switch>
        );
    }
};