import React from "react";
import App_Props from "../skeleton/App_Props";
import {
    ScrollArea,
    NumberField,
    Text,
    VerticalLayout,
    VerticalLayoutRow
} from "zen-ui-react";

/**
 * @class
 * @prop {object} props
 * @prop {function} props.appCallback
 */
export default class TextFieldExample extends React.Component {
    constructor() {
        super();
        this._onExampleChange = {};
        this._onExampleChange[App_Props.NUMBER_FIELD_1] = this._onChange.bind(this, App_Props.NUMBER_FIELD_1);
        this._onExampleChange[App_Props.NUMBER_FIELD_2] = this._onChange.bind(this, App_Props.NUMBER_FIELD_2);
    }
    _onChange(key, value) {
        this.props.appCallback(this.constructor.name, key, value);
    }
    render() {
        const me = this;
        return (
            <ScrollArea>
                <VerticalLayout>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Normal</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">

                        <NumberField stretch={false}
                                     error={me.props.appState[App_Props.NUMBER_FIELD_1] && me.props.appState[App_Props.NUMBER_FIELD_1] > 999}
                                     disabled={false}
                                     placeholder={"press number 0-9 or plus/minus"}
                                     suffix="DD"
                                     onChange={me._onExampleChange[App_Props.NUMBER_FIELD_1]}
                                     value={me.props.appState[App_Props.NUMBER_FIELD_1]}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Stretch</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow height="5rem" padding="5px">

                        <NumberField stretch={true}
                                     error={me.props.appState[App_Props.NUMBER_FIELD_2] && me.props.appState[App_Props.NUMBER_FIELD_2] > 999}
                                     disabled={false}
                                     placeholder={null}
                                     suffix="DD"
                                     onChange={me._onExampleChange[App_Props.NUMBER_FIELD_2]}
                                     value={me.props.appState[App_Props.NUMBER_FIELD_2]}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Disabled, without suffix, without placeholder</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">

                        <NumberField stretch={false}
                                     error={false}
                                     disabled={true}
                                     placeholder={null}
                                     suffix={null}
                                     value={null}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow height="100%"/>
                </VerticalLayout>
            </ScrollArea>
        )
    }
};
