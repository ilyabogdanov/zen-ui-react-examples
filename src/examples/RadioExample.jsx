import React from "react"
import App_Props from "../skeleton/App_Props";
import {
    ScrollArea,
    Checkbox_Props,
    Radio,
    Text,
    VerticalLayout,
    VerticalLayoutRow
} from "zen-ui-react";

/**
 * @class
 * @prop {object} props
 * @prop {function} props.appCallback
 */
export default class RadioExample extends React.Component {
    constructor() {
        super();
        this._onExampleChange = {};
        this._onExampleChange[App_Props.RADIO_1] = this._onChange.bind(this, App_Props.RADIO_1);
        this._onExampleChange[App_Props.RADIO_2] = this._onChange.bind(this, App_Props.RADIO_2);
        this._onExampleChange[App_Props.RADIO_3] = this._onChange.bind(this, App_Props.RADIO_3);
    }
    _onChange(key, value) {
        this.props.appCallback(this.constructor.name, key, value);
    }
    render() {
        return (
            <ScrollArea>
                <VerticalLayout>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Arrays:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">
                        {[1,2].map((e,i) =>
                            <Radio onChange={this._onExampleChange[App_Props.RADIO_1]}
                                   activeItemValue={this.props.appState[App_Props.RADIO_1]}
                                   disabled={false}
                                   readonly={false}
                                   value={e}
                                   key={i}
                                   alignment={Checkbox_Props.alignment.LEFT}>
                                Normal
                            </Radio>
                        )}
                        {[3,4].map((e,i) =>
                            <Radio disabled={true}
                                   readonly={false}
                                   value={e}
                                   key={i}
                                   alignment={Checkbox_Props.alignment.LEFT}>
                                Disabled
                            </Radio>
                        )}
                        {[3,4].map((e,i) =>
                            <Radio readonly={true}
                                   value={e}
                                   key={i}
                                   alignment={Checkbox_Props.alignment.LEFT}>
                                Readonly
                            </Radio>
                        )}

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">
                        {[1,2].map((e,i) =>
                            <Radio onChange={this._onExampleChange[App_Props.RADIO_2]}
                                   activeItemValue={this.props.appState[App_Props.RADIO_2]}
                                   disabled={false}
                                   readonly={false}
                                   value={e}
                                   key={i}
                                   alignment={Checkbox_Props.alignment.RIGHT}>
                                Normal. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Radio>
                        )}
                        {[3,4].map((e,i) =>
                            <Radio disabled={true}
                                   readonly={false}
                                   value={e}
                                   key={i}
                                   alignment={Checkbox_Props.alignment.RIGHT}>
                                Disabled. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Radio>
                        )}
                        {[3,4].map((e,i) =>
                            <Radio readonly={true}
                                   value={e}
                                   key={i}
                                   alignment={Checkbox_Props.alignment.RIGHT}>
                                Readonly. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Radio>
                        )}

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Objects:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">

                        <Radio onChange={this._onExampleChange[App_Props.RADIO_3]}
                               activeItemValue={this.props.appState[App_Props.RADIO_3]}
                               disabled={false}
                               readonly={false}
                               value={1}
                               alignment={Checkbox_Props.alignment.LEFT}>
                            Normal
                        </Radio>
                        <Radio onChange={this._onExampleChange[App_Props.RADIO_3]}
                               activeItemValue={this.props.appState[App_Props.RADIO_3]}
                               disabled={false}
                               readonly={false}
                               value={2}
                               alignment={Checkbox_Props.alignment.LEFT}>
                            Normal
                        </Radio>
                    </VerticalLayoutRow>
                    <VerticalLayoutRow height="100%"/>
                </VerticalLayout>
            </ScrollArea>
        )
    }
};