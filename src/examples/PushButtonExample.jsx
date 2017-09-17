import React from "react";
import App_Props from "../skeleton/App_Props";
import {
    ScrollArea,
    Button_Props,
    ConjoinedButtons,
    HorizontalLayout,
    HorizontalLayoutColumn,
    LinkButton,
    PushButton,
    Text,
    VerticalLayout,
    VerticalLayoutRow
} from "zen-ui-react";

/**
 * @prop {*} props.appCallback
 */
export default class PushButtonExample extends React.Component {
    constructor() {
        super();
        this._onClick = {};
        this._onClick[App_Props.PUSH_BUTTON_1] = this.handleChange.bind(this, App_Props.PUSH_BUTTON_1);
        this._onClick[App_Props.PUSH_BUTTON_2] = this.handleChange.bind(this, App_Props.PUSH_BUTTON_2);
        this._onClick[App_Props.PUSH_BUTTON_3] = this.handleChange.bind(this, App_Props.PUSH_BUTTON_3);
        this._onClick[App_Props.PUSH_BUTTON_4] = this.handleChange.bind(this, App_Props.PUSH_BUTTON_4);
        this._onClick[App_Props.PUSH_BUTTON_5] = this.handleChange.bind(this, App_Props.PUSH_BUTTON_5);
    }
    handleChange(key) {
        this.props.appCallback(this.constructor.name, key, "click");
    }
    render() {
        return (
            <ScrollArea stretch scroll>
                <VerticalLayout stretch={true}>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Normal:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <PushButton onClick={this._onClick[App_Props.PUSH_BUTTON_1]} palette={Button_Props.palette.ORDINARY}>Ordinary</PushButton>
                        <PushButton onClick={this._onClick[App_Props.PUSH_BUTTON_2]} palette={Button_Props.palette.BRANDED}>Branded</PushButton>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Disabled:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <PushButton stretch={false} palette={Button_Props.palette.ORDINARY} disabled={true}>Ordinary</PushButton>
                        <PushButton stretch={false} palette={Button_Props.palette.BRANDED} disabled={true}>Branded</PushButton>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Stretch:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px" height="5rem">

                        <PushButton onClick={this._onClick[App_Props.PUSH_BUTTON_3]} stretch palette={Button_Props.palette.ORDINARY}>Ordinary</PushButton>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Stretch Y:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px" height="5rem">

                        <PushButton onClick={this._onClick[App_Props.PUSH_BUTTON_4]} stretchY palette={Button_Props.palette.ORDINARY}>Ordinary</PushButton>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Stretch X:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <PushButton onClick={this._onClick[App_Props.PUSH_BUTTON_5]} stretchX palette={Button_Props.palette.ORDINARY}>Ordinary</PushButton>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <Text>Conjoined buttons:</Text>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px 5px 0 5px">

                        <ConjoinedButtons>
                            <LinkButton palette={Button_Props.palette.ORDINARY} to="/">1</LinkButton>
                            <LinkButton palette={Button_Props.palette.ORDINARY} to="/">2</LinkButton>
                            {[3,4].map(function (e,i) {
                                return <LinkButton palette={Button_Props.palette.ORDINARY} to="/" key={i}>{e}</LinkButton>
                            })}
                        </ConjoinedButtons>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} height="5rem" padding="5px">

                        <ConjoinedButtons>
                            <LinkButton stretchY palette={Button_Props.palette.ORDINARY} to="/">1</LinkButton>
                            <LinkButton stretchY palette={Button_Props.palette.ORDINARY} to="/">2</LinkButton>
                            {[3,4].map(function (e,i) {
                                return <LinkButton stretchY palette={Button_Props.palette.ORDINARY} to="/" key={i}>{e}</LinkButton>
                            })}
                        </ConjoinedButtons>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <HorizontalLayout height="5rem">
                            {[1,2,3,4].map(function (e) {
                                return <HorizontalLayoutColumn key={e} stretch={true} width="25%">

                                    <LinkButton stretch
                                                conjoined={e===1 ? Button_Props.conjoined.FIRST : e===4 ? Button_Props.conjoined.LAST : Button_Props.conjoined.MIDDLE}
                                                palette={Button_Props.palette.ORDINARY}
                                                to="/">{e}</LinkButton>

                                </HorizontalLayoutColumn>

                            })}
                        </HorizontalLayout>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={false} padding="5px">

                        <HorizontalLayout>
                            {[1,2,3,4].map(function (e) {
                                return <HorizontalLayoutColumn key={e} stretch={true} width="25%">

                                    <LinkButton stretchX
                                                palette={Button_Props.palette.ORDINARY}
                                                conjoined={e===1 ? Button_Props.conjoined.FIRST : e===4 ? Button_Props.conjoined.LAST : Button_Props.conjoined.MIDDLE}
                                                to="/">{e}</LinkButton>

                                </HorizontalLayoutColumn>

                            })}
                        </HorizontalLayout>

                    </VerticalLayoutRow>
                    <VerticalLayoutRow stretch={true}/>
                </VerticalLayout>
            </ScrollArea>
        )
    }
};
