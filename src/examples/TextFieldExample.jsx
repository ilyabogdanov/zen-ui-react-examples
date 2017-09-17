import React from "react";
import App_Props from "../skeleton/App_Props";
import {
    ScrollArea,
    Text,
    TextField,
    PasswordField,
    VerticalLayout,
    VerticalLayoutRow
} from "zen-ui-react";

/**
 * @prop {*} props.appCallback
 */
export default class TextFieldExample extends React.Component {
    constructor() {
        super();
        this._onExampleChange = {};
        this._onExampleChange[App_Props.TEXT_FIELD_1] = this._onChange.bind(this, App_Props.TEXT_FIELD_1);
        this._onExampleChange[App_Props.TEXT_FIELD_2] = this._onChange.bind(this, App_Props.TEXT_FIELD_2);
        this._onExampleChange[App_Props.TEXT_FIELD_3] = this._onChange.bind(this, App_Props.TEXT_FIELD_3);
    }
    _onChange(key, value) {
        this.props.appCallback(this.constructor.name, key, value);
    }
    render() {
        const me = this;
        return (
            <ScrollArea stretch scroll>
                <VerticalLayout stretch={true}>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Normal:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <TextField value={me.props.appState[App_Props.TEXT_FIELD_1]}
                                   disabled={false}
                                   error={me.props.appState[App_Props.TEXT_FIELD_1] && me.props.appState[App_Props.TEXT_FIELD_1].length > 6}
                                   stretch={false}
                                   placeholder=""
                                   onChange={me._onExampleChange[App_Props.TEXT_FIELD_1]}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Password:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <PasswordField value={null}
                                       disabled={false}
                                       error={false}
                                       stretch={false}
                                       placeholder=""
                                       onChange={function () {

                                       }}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Stretch:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} height="5rem" padding="5px">

                        <TextField value={me.props.appState[App_Props.TEXT_FIELD_2]}
                                   disabled={false}
                                   error={me.props.appState[App_Props.TEXT_FIELD_2] && me.props.appState[App_Props.TEXT_FIELD_2].length > 6}
                                   stretch={true}
                                   placeholder=""
                                   onChange={me._onExampleChange[App_Props.TEXT_FIELD_2]}/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Disabled:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <TextField value={me.props.appState[App_Props.TEXT_FIELD_3]}
                                   disabled={true}
                                   error={false}
                                   stretch={false}
                                   placeholder="This one is disabled"/>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={true}/>
                </VerticalLayout>
            </ScrollArea>
        )
    }
};
