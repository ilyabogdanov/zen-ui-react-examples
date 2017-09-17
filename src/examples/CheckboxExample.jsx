import React from "react";
import App_Props from "../skeleton/App_Props";
import {
    ScrollArea,
    VerticalLayout,
    VerticalLayoutRow,
    Checkbox,
    Checkbox_Props
} from "zen-ui-react";

/**
 * @prop {*} props.appCallback
 */
export default class CheckboxExample extends React.Component {
    constructor(props) {
        super(props);
        this._onExampleChange = {};
        this._onExampleChange[App_Props.CHECKBOX_1] = this._onChange.bind(this, App_Props.CHECKBOX_1);
        this._onExampleChange[App_Props.CHECKBOX_2] = this._onChange.bind(this, App_Props.CHECKBOX_2);
        this._onExampleChange[App_Props.CHECKBOX_3] = this._onChange.bind(this, App_Props.CHECKBOX_3);
        this._onExampleChange[App_Props.CHECKBOX_4] = this._onChange.bind(this, App_Props.CHECKBOX_4);
        this._onExampleChange[App_Props.CHECKBOX_5] = this._onChange.bind(this, App_Props.CHECKBOX_5);
        this._onExampleChange[App_Props.CHECKBOX_6] = this._onChange.bind(this, App_Props.CHECKBOX_6);
    }
    _onChange(key, value) {
        this.props.appCallback(this.constructor.name, key, value);
    }
    render() {
        return (
            <ScrollArea stretch scroll>
                <VerticalLayout stretch={true}>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <Checkbox onChange={this._onExampleChange[App_Props.CHECKBOX_1]}
                                  checked={this.props.appState[App_Props.CHECKBOX_1]}
                                  disabled={false}
                                  readonly={false}
                                  alignment={Checkbox_Props.alignment.LEFT}>
                            Normal
                        </Checkbox>
                        <Checkbox onChange={this._onExampleChange[App_Props.CHECKBOX_2]}
                                  checked={this.props.appState[App_Props.CHECKBOX_2]}
                                  disabled={true}
                                  readonly={false}
                                  alignment={Checkbox_Props.alignment.LEFT}>
                            Disabled
                        </Checkbox>
                        <Checkbox onChange={this._onExampleChange[App_Props.CHECKBOX_3]}
                                  checked={this.props.appState[App_Props.CHECKBOX_3]}
                                  disabled={true}
                                  readonly={true}
                                  alignment={Checkbox_Props.alignment.LEFT}>
                            Readonly (disabled but looking as if normal)
                        </Checkbox>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <Checkbox onChange={this._onExampleChange[App_Props.CHECKBOX_4]}
                                  checked={this.props.appState[App_Props.CHECKBOX_4]}
                                  disabled={false}
                                  readonly={false}
                                  alignment={Checkbox_Props.alignment.RIGHT}>
                            Normal
                        </Checkbox>
                        <Checkbox onChange={this._onExampleChange[App_Props.CHECKBOX_5]}
                                  checked={this.props.appState[App_Props.CHECKBOX_5]}
                                  disabled={true}
                                  readonly={false}
                                  alignment={Checkbox_Props.alignment.RIGHT}>
                            Disabled
                        </Checkbox>
                        <Checkbox onChange={this._onExampleChange[App_Props.CHECKBOX_6]}
                                  checked={this.props.appState[App_Props.CHECKBOX_6]}
                                  disabled={true}
                                  readonly={true}
                                  alignment={Checkbox_Props.alignment.RIGHT}>
                            Readonly (disabled but looking as if normal)
                        </Checkbox>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={true}/>
                </VerticalLayout>
            </ScrollArea>
        )
    }
};