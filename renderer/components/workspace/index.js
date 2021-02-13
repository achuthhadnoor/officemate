import * as Styles from './styled'
import Icon from "react-icons-kit"
import { search } from 'react-icons-kit/feather/search'
import { userPlus } from 'react-icons-kit/feather/userPlus'
import { plus } from 'react-icons-kit/feather/plus'
import { IconUpDOWN } from "../icons/up_down"
import Link from 'next/link'
const Workspace = () => (
    <Styles.WorkspaceWrapper>
        <Styles.Workspace>
            <Link href="/">
                <a style={{ display: 'flex', flex: 1, alignItems: 'center', padding: '10px' }}>
                    <span>🛠 F2 Migration</span> <IconUpDOWN />
                </a>
            </Link>
        </Styles.Workspace>
        <Styles.WorkSpaceOptions>
            <Styles.WorkspaceOption>
                <Icon icon={search} />
            </Styles.WorkspaceOption>
            <Styles.WorkspaceOption>
                <Icon icon={userPlus} />
            </Styles.WorkspaceOption>
            <Styles.WorkspaceAdd>
                <Icon icon={plus} />
            </Styles.WorkspaceAdd>
        </Styles.WorkSpaceOptions>
    </Styles.WorkspaceWrapper>
)



export default Workspace;