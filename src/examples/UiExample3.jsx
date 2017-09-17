import React from "react";
import TaskTrackerIcon, { Task_Tracker_Icon_Groups, Task_Tracker_Icon_Glyphs } from "../icons/TaskTrackerIcon";
import {
    Combobox,
    ToggleButton,
    ToggleRadioButton,
    ConjoinedButtons,
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
    TextField,
    Tree,
    TreeBranch,
    TreeBranchlet,
    TreeLeaf,
    TreeLeafColumn
} from "zen-ui-react";

/**
 * @class
 */
export default class UiExample3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeToggle: "My tasks"
        };
        this.activeToggleChange = this.activeToggleChange.bind(this);
    }
    activeToggleChange(e) {
        this.setState({activeToggle: e})
    }
    render() {
        const me = this;
        return (
            <Modal>
                <Window stretch={false} palette={Window_Props.palette.ORDINARY} maxWidth="380px">
                    <WindowHead title="Tasks"></WindowHead>
                    <WindowBody>
                        <VerticalLayout>
                            <VerticalLayoutRow padding="2px">
                                <ConjoinedButtons>
                                    {["All", "Open", "My tasks", "Following"].map(function (e,i) {
                                        return <ToggleRadioButton activeItemValue={me.state.activeToggle}
                                                                  onChange={me.activeToggleChange}
                                                                  palette={Button_Props.palette.ORDINARY}
                                                                  disabled={false}
                                                                  value={e}
                                                                  key={i}>{e}</ToggleRadioButton>
                                    })}
                                </ConjoinedButtons>
                            </VerticalLayoutRow>
                            <VerticalLayoutRow padding="0 0 4px 0">
                                <Tree stretch={false} columnSeparator={false}>
                                    <TreeBranch>
                                        <TreeBranchlet open={true}>
                                            <TreeLeaf>
                                                <TreeLeafColumn width={1}>
                                                    <Text><b>Example Project</b></Text>
                                                </TreeLeafColumn>
                                            </TreeLeaf>
                                            <TreeBranch>
                                                <TreeBranchlet open={true}>
                                                    <TreeLeaf>
                                                        <TreeLeafColumn width={1}>
                                                            <Text>Tasks</Text>
                                                        </TreeLeafColumn>
                                                    </TreeLeaf>
                                                    <TreeBranch>
                                                        {[{
                                                            taskType: Task_Tracker_Icon_Glyphs.task_type.TASK,
                                                            severity: Task_Tracker_Icon_Glyphs.color_task_severity.TRIVIAL,
                                                            name: "Trivial Task"
                                                        }, {
                                                            taskType: Task_Tracker_Icon_Glyphs.task_type.TASK,
                                                            severity: Task_Tracker_Icon_Glyphs.color_task_severity.MINOR,
                                                            name: "Minor Task"
                                                        }, {
                                                            taskType: Task_Tracker_Icon_Glyphs.task_type.TASK,
                                                            severity: Task_Tracker_Icon_Glyphs.color_task_severity.MAJOR,
                                                            name: "Major Task"
                                                        }, {
                                                            taskType: Task_Tracker_Icon_Glyphs.task_type.TASK,
                                                            severity: Task_Tracker_Icon_Glyphs.color_task_severity.CRITICAL,
                                                            name: "Critical Task"
                                                        }, {
                                                            taskType: Task_Tracker_Icon_Glyphs.task_type.TASK,
                                                            severity: Task_Tracker_Icon_Glyphs.color_task_severity.BLOCKER,
                                                            name: "Blocker Task"
                                                        }].map((e,i) => (
                                                            <TreeBranchlet key={i}>
                                                                <TreeLeaf>
                                                                    <TreeLeafColumn width="1.5rem">
                                                                        <Text><TaskTrackerIcon glyph={e.taskType} group={Task_Tracker_Icon_Groups.TASK_TYPE}/></Text>
                                                                    </TreeLeafColumn>
                                                                    <TreeLeafColumn width="1.5rem">
                                                                        <Text><TaskTrackerIcon glyph={e.severity} group={Task_Tracker_Icon_Groups.COLOR_TASK_SEVERITY}/></Text>
                                                                    </TreeLeafColumn>
                                                                    <TreeLeafColumn padding="0 5px" width={1}>
                                                                        <Text clipped={true}>{e.name}</Text>
                                                                    </TreeLeafColumn>
                                                                </TreeLeaf>
                                                            </TreeBranchlet>
                                                        ))}
                                                    </TreeBranch>
                                                </TreeBranchlet>
                                                <TreeBranchlet open={true}>
                                                    <TreeLeaf>
                                                        <TreeLeafColumn width={1}>
                                                            <Text>New Features</Text>
                                                        </TreeLeafColumn>
                                                    </TreeLeaf>
                                                    <TreeBranch>
                                                        {[{
                                                            taskType: Task_Tracker_Icon_Glyphs.task_type.NEW_FEATURE,
                                                            severity: Task_Tracker_Icon_Glyphs.color_task_severity.TRIVIAL,
                                                            name: "Trivial Feature"
                                                        }, {
                                                            taskType: Task_Tracker_Icon_Glyphs.task_type.NEW_FEATURE,
                                                            severity: Task_Tracker_Icon_Glyphs.color_task_severity.MINOR,
                                                            name: "Minor Feature"
                                                        }].map((e,i) => (
                                                            <TreeBranchlet key={i}>
                                                                <TreeLeaf>
                                                                    <TreeLeafColumn width="1.5rem">
                                                                        <Text><TaskTrackerIcon glyph={e.taskType} group={Task_Tracker_Icon_Groups.TASK_TYPE}/></Text>
                                                                    </TreeLeafColumn>
                                                                    <TreeLeafColumn width="1.5rem">
                                                                        <Text><TaskTrackerIcon glyph={e.severity} group={Task_Tracker_Icon_Groups.COLOR_TASK_SEVERITY}/></Text>
                                                                    </TreeLeafColumn>
                                                                    <TreeLeafColumn padding="0 5px" width={1}>
                                                                        <Text clipped={true}>{e.name}</Text>
                                                                    </TreeLeafColumn>
                                                                </TreeLeaf>
                                                            </TreeBranchlet>
                                                        ))}
                                                    </TreeBranch>
                                                </TreeBranchlet>
                                                <TreeBranchlet open={true}>
                                                    <TreeLeaf>
                                                        <TreeLeafColumn width={1}>
                                                            <Text>Bugs</Text>
                                                        </TreeLeafColumn>
                                                    </TreeLeaf>
                                                    <TreeBranch>
                                                        {[{
                                                            taskType: Task_Tracker_Icon_Glyphs.task_type.BUG,
                                                            severity: Task_Tracker_Icon_Glyphs.color_task_severity.MAJOR,
                                                            name: "Major Bug"
                                                        }, {
                                                            taskType: Task_Tracker_Icon_Glyphs.task_type.BUG,
                                                            severity: Task_Tracker_Icon_Glyphs.color_task_severity.CRITICAL,
                                                            name: "Critical Bug"
                                                        }, {
                                                            taskType: Task_Tracker_Icon_Glyphs.task_type.BUG,
                                                            severity: Task_Tracker_Icon_Glyphs.color_task_severity.BLOCKER,
                                                            name: "Blocker Bug"
                                                        }].map((e,i) => (
                                                            <TreeBranchlet key={i}>
                                                                <TreeLeaf>
                                                                    <TreeLeafColumn width="1.5rem">
                                                                        <Text><TaskTrackerIcon glyph={e.taskType} group={Task_Tracker_Icon_Groups.TASK_TYPE}/></Text>
                                                                    </TreeLeafColumn>
                                                                    <TreeLeafColumn width="1.5rem">
                                                                        <Text><TaskTrackerIcon glyph={e.severity} group={Task_Tracker_Icon_Groups.COLOR_TASK_SEVERITY}/></Text>
                                                                    </TreeLeafColumn>
                                                                    <TreeLeafColumn padding="0 5px" width={1}>
                                                                        <Text clipped={true}>{e.name}</Text>
                                                                    </TreeLeafColumn>
                                                                </TreeLeaf>
                                                            </TreeBranchlet>
                                                        ))}
                                                    </TreeBranch>
                                                </TreeBranchlet>
                                            </TreeBranch>
                                        </TreeBranchlet>
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