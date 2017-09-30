import React from "react";
import App_Props from "../skeleton/App_Props";
import {
    ScrollArea,
    Text,
    TimeField,
    VerticalLayout,
    VerticalLayoutRow
} from "zen-ui-react";

/**
 * @class
 * @prop {object} props
 * @prop {function} props.appCallback
 */
export default class TimeFieldExample extends React.Component {
    constructor() {
        super();
        this._onExampleChange = {};
        this._onExampleChange[App_Props.TIME_FIELD_1] = this._onChange.bind(this, App_Props.TIME_FIELD_1);
        this._onExampleChange[App_Props.TIME_FIELD_2] = this._onChange.bind(this, App_Props.TIME_FIELD_2);
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

                        <TimeField stretch={false}
                                   error={me.props.appState[App_Props.TIME_FIELD_1].getHours()>12}
                                   disabled={false}
                                   value={me.props.appState[App_Props.TIME_FIELD_1]}
                                   onChange={me._onExampleChange[App_Props.TIME_FIELD_1]}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Stretch</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow height="5rem" padding="5px">

                        <TimeField stretch={true}
                                   error={me.props.appState[App_Props.TIME_FIELD_2].getHours()>12}
                                   disabled={false}
                                   value={me.props.appState[App_Props.TIME_FIELD_2]}
                                   onChange={me._onExampleChange[App_Props.TIME_FIELD_2]}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px 5px 0 5px">

                        <Text>Disabled</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow padding="5px">

                        <TimeField stretch={false}
                                   error={false}
                                   disabled={true}
                                   value={null}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow height="100%"/>
                </VerticalLayout>
            </ScrollArea>
        )
    }
};
