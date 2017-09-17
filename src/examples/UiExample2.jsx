import React from "react";
import {
    VerticalLayoutRow,
    VerticalLayout,
    Modal,
    Window,
    WindowHead,
    Window_Props,
    WindowBody,
    HorizontalLayout,
    HorizontalLayoutColumn,
    PushButton,
    Button_Props,
    Checkbox_Props,
    Checkbox,
    Text,
    Tree,
    TreeBranch,
    TreeBranchlet,
    TreeLeaf,
    TreeLeafColumn
} from "zen-ui-react";

const data = [{
    year: 2017,
    months: [{
        month: "July",
        contracts: [{
            active: true,
            date: "29.07.2017 – 30.07.2017",
            sum: "12 000"
        }]
    }, {
        month: "May",
        contracts: [{
            active: true,
            date: "13.05.2017 – 14.05.2017",
            sum: "11 500"
        }]
    }, {
        month: "April",
        contracts: [{
            active: true,
            date: "28.04.2017 – 29.04.2017",
            sum: "5 200"
        }, {
            active: false,
            date: "01.04.2017 – 02.04.2017",
            sum: "11 500"
        }]
    }]
}];
/**
 * @class
 */
export default class UiExample2 extends React.Component {
    render() {
        return (
            <Modal>
                <Window stretch={false} palette={Window_Props.palette.ORDINARY} maxWidth="380px">
                    <WindowHead title="Financial transactions"></WindowHead>
                    <WindowBody>
                        <VerticalLayout>
                            <VerticalLayoutRow padding="2px">
                                <HorizontalLayout height="30px">
                                    <HorizontalLayoutColumn width="100%"/>
                                    <HorizontalLayoutColumn width="100px">
                                        <PushButton stretch palette={Button_Props.palette.ORDINARY} onClick={function(){}}>Sync</PushButton>
                                    </HorizontalLayoutColumn>
                                </HorizontalLayout>
                            </VerticalLayoutRow>
                            <VerticalLayoutRow padding="0 0 4px 0">
                                <Tree stretch={false} columnSeparator={true}>
                                    <TreeBranch>
                                        {data.map((e,i) => (
                                            <TreeBranchlet key={i} open={true}>
                                                <TreeLeaf>
                                                    <TreeLeafColumn width="100%">
                                                        <Text x="left" y="middle">{e.year}</Text>
                                                    </TreeLeafColumn>
                                                    <TreeLeafColumn width="100px"/>
                                                </TreeLeaf>
                                                <TreeBranch>
                                                    {e.months.map((e,i) => (
                                                        <TreeBranchlet key={i} open={true}>
                                                            <TreeLeaf>
                                                                <TreeLeafColumn width="100%">
                                                                    <Text x="left" y="middle">{e.month}</Text>
                                                                </TreeLeafColumn>
                                                                <TreeLeafColumn width="100px"/>
                                                            </TreeLeaf>
                                                            <TreeBranch>
                                                                {e.contracts.map((e,i) => (
                                                                    <TreeBranchlet key={i} open={true}>
                                                                        <TreeLeaf>
                                                                            <TreeLeafColumn width="2.1rem">
                                                                                <Checkbox onChange={function () {}}
                                                                                          checked={e.active}
                                                                                          disabled={false}
                                                                                          readonly={false}
                                                                                          alignment={Checkbox_Props.alignment.LEFT}/>
                                                                            </TreeLeafColumn>
                                                                            <TreeLeafColumn padding="0 5px" width={1}>
                                                                                <Text clipped={true} style={e.active ? null : {opacity: "0.2"}}>{e.date}</Text>
                                                                            </TreeLeafColumn>
                                                                            <TreeLeafColumn width="90px" padding="0 10px 0 5px">
                                                                                <Text style={e.active ? null : {opacity: "0.2"}} x="right">{e.sum}</Text>
                                                                            </TreeLeafColumn>
                                                                        </TreeLeaf>
                                                                    </TreeBranchlet>
                                                                ))}
                                                            </TreeBranch>
                                                        </TreeBranchlet>
                                                    ))}
                                                </TreeBranch>
                                            </TreeBranchlet>
                                        ))}
                                    </TreeBranch>
                                </Tree>
                            </VerticalLayoutRow>
                        </VerticalLayout>
                    </WindowBody>
                </Window>
            </Modal>
        )
    }
};