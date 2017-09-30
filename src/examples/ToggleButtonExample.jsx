import React from "react";
import App_Props from "../skeleton/App_Props";
import {
    ScrollArea,
    Button_Props,
    ConjoinedButtons,
    HorizontalLayout,
    HorizontalLayoutColumn,
    Text,
    ToggleButton,
    ToggleRadioButton,
    VerticalLayout,
    VerticalLayoutRow
} from "zen-ui-react";

/**
 * @class
 * @prop {object} props
 * @prop {function} props.appCallback
 */
export default class ToggleButtonExample extends React.Component {
    constructor(props) {
        // noinspection JSCheckFunctionSignatures
        super(props);
        this.onChange = {};
        this.onChange[App_Props.TOGGLE_BUTTON_1] = this.handleChange.bind(this, App_Props.TOGGLE_BUTTON_1);
        this.onChange[App_Props.TOGGLE_BUTTON_2] = this.handleChange.bind(this, App_Props.TOGGLE_BUTTON_2);
        this.onChange[App_Props.TOGGLE_BUTTON_3] = this.handleChange.bind(this, App_Props.TOGGLE_BUTTON_3);
        this.onChange[App_Props.TOGGLE_BUTTON_4] = this.handleChange.bind(this, App_Props.TOGGLE_BUTTON_4);
        this.onChange[App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_1] = this.handleChange.bind(this, App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_1);
        this.onChange[App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_2] = this.handleChange.bind(this, App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_2);
        this.onChange[App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_3] = this.handleChange.bind(this, App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_3);
        this.onChange[App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_4] = this.handleChange.bind(this, App_Props.TOGGLE_BUTTON_GROUP_1_ITEM_4);
        this.onChange[App_Props.TOGGLE_RADIO_GROUP_1] = this.handleChange.bind(this, App_Props.TOGGLE_RADIO_GROUP_1);
        this.onChange[App_Props.TOGGLE_RADIO_GROUP_2] = this.handleChange.bind(this, App_Props.TOGGLE_RADIO_GROUP_2);
        this.onChange[App_Props.TOGGLE_RADIO_GROUP_3] = this.handleChange.bind(this, App_Props.TOGGLE_RADIO_GROUP_3);
        this.onChange[App_Props.TOGGLE_RADIO_GROUP_4] = this.handleChange.bind(this, App_Props.TOGGLE_RADIO_GROUP_4);
    }
    handleChange(key, value) {
        this.props.appCallback(this.constructor.name, key, value);
    }
    render() {
        const me = this;
        return (
            <ScrollArea>
                <VerticalLayout>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Normal:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">

                        <ToggleButton init={this.props.appState[App_Props.TOGGLE_BUTTON_1]} palette={Button_Props.palette.ORDINARY} onChange={this.onChange[App_Props.TOGGLE_BUTTON_1]}>Ordinary</ToggleButton>
                        <ToggleButton init={this.props.appState[App_Props.TOGGLE_BUTTON_2]} palette={Button_Props.palette.BRANDED} onChange={this.onChange[App_Props.TOGGLE_BUTTON_2]}>Branded</ToggleButton>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Disabled:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">

                        <ToggleButton init={this.props.appState[App_Props.TOGGLE_BUTTON_3]} palette={Button_Props.palette.ORDINARY} disabled={true} onChange={this.onChange[App_Props.TOGGLE_BUTTON_3]}>Ordinary</ToggleButton>
                        <ToggleButton init={this.props.appState[App_Props.TOGGLE_BUTTON_4]} palette={Button_Props.palette.BRANDED} disabled={true} onChange={this.onChange[App_Props.TOGGLE_BUTTON_4]}>Branded</ToggleButton>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Conjoined:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">

                        <ConjoinedButtons>
                            {[1,2,3,4].map(function (e) {
                                return <ToggleButton key={e}
                                                     init={me.props.appState[App_Props["TOGGLE_BUTTON_GROUP_1_ITEM_"+e]]}
                                                     palette={Button_Props.palette.ORDINARY}
                                                     disabled={false}
                                                     onChange={me.onChange[App_Props["TOGGLE_BUTTON_GROUP_1_ITEM_"+e]]}>{e}</ToggleButton>
                            })}
                        </ConjoinedButtons>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Toggle group:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">

                        <ConjoinedButtons>
                            {[1,2,3,4].map(function (e) {
                                return <ToggleRadioButton activeItemValue={me.props.appState[App_Props.TOGGLE_RADIO_GROUP_1]}
                                                          onChange={me.onChange[App_Props.TOGGLE_RADIO_GROUP_1]}
                                                          palette={Button_Props.palette.ORDINARY}
                                                          disabled={false}
                                                          value={e}
                                                          key={e}>{e}</ToggleRadioButton>
                            })}
                        </ConjoinedButtons>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">

                        {[1,2,3,4].map(function (e) {
                            return <ToggleRadioButton activeItemValue={me.props.appState[App_Props.TOGGLE_RADIO_GROUP_2]}
                                                      onChange={me.onChange[App_Props.TOGGLE_RADIO_GROUP_2]}
                                                      palette={Button_Props.palette.ORDINARY}
                                                      disabled={false}
                                                      value={e}
                                                      key={e}>{e}</ToggleRadioButton>
                        })}

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">
                        <HorizontalLayout height="5rem">
                            {[1,2,3,4].map(function (e) {
                                return <HorizontalLayoutColumn key={e} width="25%">

                                    <ToggleRadioButton activeItemValue={me.props.appState[App_Props.TOGGLE_RADIO_GROUP_3]}
                                                       onChange={me.onChange[App_Props.TOGGLE_RADIO_GROUP_3]}
                                                       palette={Button_Props.palette.ORDINARY}
                                                       disabled={false}
                                                       conjoined={e===1 ? Button_Props.conjoined.FIRST : e===4 ? Button_Props.conjoined.LAST : Button_Props.conjoined.MIDDLE}
                                                       stretch={true}
                                                       value={e}
                                                       key={e}>{e}</ToggleRadioButton>

                                </HorizontalLayoutColumn>

                            })}
                        </HorizontalLayout>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">
                        <HorizontalLayout>
                            {[1,2,3,4].map(function (e) {
                                return <HorizontalLayoutColumn key={e} width="25%">

                                    <ToggleRadioButton activeItemValue={me.props.appState[App_Props.TOGGLE_RADIO_GROUP_4]}
                                                       onChange={me.onChange[App_Props.TOGGLE_RADIO_GROUP_4]}
                                                       palette={Button_Props.palette.ORDINARY}
                                                       disabled={false}
                                                       conjoined={e===1 ? Button_Props.conjoined.FIRST : e===4 ? Button_Props.conjoined.LAST : Button_Props.conjoined.MIDDLE}
                                                       stretchX={true}
                                                       value={e}
                                                       key={e}>{e}</ToggleRadioButton>

                                </HorizontalLayoutColumn>

                            })}
                        </HorizontalLayout>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow height="100%"/>
                </VerticalLayout>
            </ScrollArea>
        )
    }
};