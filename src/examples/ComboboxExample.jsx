import React from "react";
import App_Props from "../skeleton/App_Props";
import {
    ScrollArea,
    Button_Props,
    Combobox,
    Text,
    VerticalLayout,
    VerticalLayoutRow
} from "zen-ui-react";

/**
 * @prop {*} props.appCallback
 */
export default class ComboboxExample extends React.Component {
    constructor(props) {
        super(props);
        this.items = [{
            id: null,
            name: ""
        }, {
            id: 1,
            name: "item 1"
        }, {
            id: 2,
            name: "item 2"
        }, {
            id: 3,
            name: "item 3"
        }];
        this._onChange = {};
        this._onChange[App_Props.COMBOBOX_1] = this.__onChange.bind(this, App_Props.COMBOBOX_1);
        this._onChange[App_Props.COMBOBOX_2] = this.__onChange.bind(this, App_Props.COMBOBOX_2);
        this._onChange[App_Props.COMBOBOX_3] = this.__onChange.bind(this, App_Props.COMBOBOX_3);
    }
    __onChange(key, value) {
        this.props.appCallback(this.constructor.name, key, value);
    }
    render() {
        return (
            <ScrollArea stretch scroll>
                <VerticalLayout stretch={true}>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Stretch:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} height="5rem" padding="5px">

                        <Combobox palette={Button_Props.palette.ORDINARY}
                                  onChange={this._onChange[App_Props.COMBOBOX_1]}
                                  stretch={true}
                                  items={this.items}
                                  textParameter="name"
                                  valueParameter="id"
                                  activeItemValue={this.props.appState[App_Props.COMBOBOX_1]}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Normal:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <Combobox palette={Button_Props.palette.ORDINARY}
                                  onChange={this._onChange[App_Props.COMBOBOX_2]}
                                  stretch={false}
                                  items={this.items}
                                  textParameter="name"
                                  valueParameter="id"
                                  activeItemValue={this.props.appState[App_Props.COMBOBOX_2]}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Disabled:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <Combobox palette={Button_Props.palette.ORDINARY}
                                  onChange={this._onChange[App_Props.COMBOBOX_3]}
                                  stretch={false}
                                  disabled={true}
                                  items={this.items}
                                  textParameter="name"
                                  valueParameter="id"
                                  activeItemValue={this.props.appState[App_Props.COMBOBOX_3]}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} height="5rem"/>
                    <VerticalLayoutRow stretch={true}/>
                </VerticalLayout>
            </ScrollArea>
        )
    }
};