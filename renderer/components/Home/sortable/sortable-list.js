// Packages
import { SortableContainer } from "react-sortable-hoc";
import styled from 'styled-components'
// Components
import SortableItem from "./sortable-item";
import { getProject } from "../../../services/local-storage";

const SortableList = SortableContainer(
    ({ title, notes, onDone, onMove }) => { 
        let taskz = notes ? notes.map((note, index) => {
            const _project = getProject(note.project);
            return (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    note={note}
                    project={_project}
                    onDone={onDone}
                    onMove={onMove}
                />
            );
        })
        : <div>Nothing to search</div>
        return <div>
            {taskz}
        </div>;
    }
);

export default SortableList
// ({ title, notes, onDone, onMove }) => {
//     return (
//         <>
//             <Title>{title}</Title>
//             <SortableList title={title} notes={notes} onMove={onMove} onDone={onDone}/>
//         </>
//     )
// };

const Title = styled.span`
font-size:14px;
padding:5px;
color : ${props => props.theme.color.ternary};
`;